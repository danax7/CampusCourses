import {
    Button,
    Combobox,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
  } from '@/components/ui';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCourseCreateForm } from '../hooks/useCourceCreateForm';
// import { UsersCombobox } from '../component/UserCombobox/UserCombobox.tsx';
import { convertUsersToComboboxItems } from '../helpers/ConvertUsersToComboboxItems';
  
  interface CourceCreateProps {
    actionType: 'add' | 'edit';
    cource?: CampusCourseDto;
  }
  
  export const CourceCreateForm = ({ actionType, cource }: CourceCreateProps) => {
    const { state, form, functions, users, selectedUser, handleUserSelect } = useCourseCreateForm({actionType, cource});

    // const users = getUsers.data
    // console.log(getUsers.data)
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
                                className='flex w-full'
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
  