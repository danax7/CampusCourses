import {
    Button,
    Combobox,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    ScrollArea
  } from '@/components/ui';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCourseCreateForm } from '../hooks/useCourceCreateForm';
// import { UsersCombobox } from '../component/UserCombobox/UserCombobox.tsx';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/cn.ts';
import { useGetUsersQuery } from '@/utils/api/hooks/useGetUsersQuery';
import { convertUsersToComboboxItems } from '../helpers/ConvertUsersToComboboxItems';
  
  interface CourceCreateProps {
    actionType: 'add' | 'edit';
    cource?: CampusCourseDto;
  }
  
  export const CourceCreateForm = ({ actionType, cource }: CourceCreateProps) => {
    const { state, form, functions, users, selectedUser, handleUserSelect } = useCourseCreateForm({actionType, cource});

    // const users = getUsers.data
    // console.log(getUsers.data)
    console.log(users)
    return (
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className="flex w-full flex-col items-end">
          <div className="mb-7 flex w-full gap-5 smx:flex-col">
            <div className="flex-1 space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Название курса
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Введите название"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.name && (
                        <span>{form.formState.errors.name.message}</span>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Год начала курса
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='number'
                        min='2000'
                        max='2029'
                        placeholder="Введите год"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.startYear && (
                        <span>{form.formState.errors.startYear.message}</span>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maximumStudentsCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Общее количество мест
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='number'
                        min='0'
                        max='200'
                        placeholder="Введите количество"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState?.errors?.maximumStudentsCount && (
                        <span>{form.formState.errors.maximumStudentsCount.message}</span>
                      )}
                    </FormMessage>
                  </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="semester"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Семестр
                        </FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="Autumn" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Осенний
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                        <RadioGroupItem value="Spring" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Весенний
                                        </FormLabel>
                                    </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage>
                        {form.formState?.errors?.semester && (
                            <span>{form.formState.errors.semester.message}</span>
                        )}
                        </FormMessage>
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Требования
                        </FormLabel>
                        <FormControl>
                        <Input
                            {...field}
                            placeholder="Введите текст"
                        />
                        </FormControl>
                        <FormMessage>
                        {form.formState?.errors?.requirements && (
                            <span>{form.formState.errors.requirements.message}</span>
                        )}
                        </FormMessage>
                    </FormItem>
                    )}
                />
               <FormField
                    control={form.control}
                    name="annotations"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Аннотации
                        </FormLabel>
                        <FormControl>
                        <Input
                            {...field}
                            placeholder="Введите текст"
                        />
                        </FormControl>
                        <FormMessage>
                        {form.formState?.errors?.annotations && (
                            <span>{form.formState.errors.annotations.message}</span>
                        )}
                        </FormMessage>
                    </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mainTeacherId"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                          Основной преподаватель курса
                        </FormLabel>
                        <FormControl>
                     
                          <div>
                            {users && (
                                <Combobox
                                {...field}
                                items={convertUsersToComboboxItems(users.data)}
                                onSelect={handleUserSelect}
                                value={selectedUser}
                              />
                            )}
                        
                          </div>
                   
                        </FormControl>
                        <FormMessage>
                        {form.formState?.errors?.annotations && (
                            <span>{form.formState.errors.annotations.message}</span>
                        )}
                        </FormMessage>
                    </FormItem>
                    )}
                />
                {/* <FormField
                    control={form.control}
                    name="mainTeacherId"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                      <FormLabel>Основной преподаватель курса</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                'w-[200px] justify-between',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value
                                ? users.find(
                                  (u) => u.id === field.value,
                                )?.fullName
                                : 'Выберите пользователя'}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Поиск преподавателя..."
                              className="h-9"
                            />
                            <CommandEmpty>Пользователь не найден.</CommandEmpty>
                            <CommandGroup className="overflow-auto max-h-80">
                              {users?.data && (
                                  <ScrollArea className="h-72 w-48 rounded-md border">
                                  {users.data.map((u) => (
                                    <CommandItem
                                      value={u.fullname}
                                      key={u.id}
                                      onSelect={() => {
                                        form.setValue('mainTeacherId', u.id);
                                      }}
                                    >
                                      {u.fullname}
                                      <CheckIcon
                                        className={cn(
                                          'ml-auto h-4 w-4',
                                          u.id === field.value
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </ScrollArea>
                              )}
                  
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage>
                        {form.formState?.errors?.mainTeacherId && (
                            <span>{form.formState.errors.mainTeacherId.message}</span>
                        )}
                        </FormMessage>
                    </FormItem>
                  )}
                /> */}
                  
              
            </div>
          </div>
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={state.isLoading}
            className="w-full"
          >
            {actionType === 'add' && <span>Добавить</span>}
            {actionType === 'edit' && <span>Сохранить</span>}
          </Button>
        </form>
      </Form>
    );
  };
  