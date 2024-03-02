import {
    Button,
    Combobox,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui';

import { convertUsersToComboboxItems } from '@/features/GroupCourses/helpers/ConvertUsersToComboboxItems';
import { useAddTeacherForm } from '../hooks/useAddTeacherForm';
  
  export const AddTeacherForm = () => {
    const { state, form, functions, users, selectedUser, handleUserSelect } = useAddTeacherForm();
    return (
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className="flex w-full flex-col items-end">
          <div className="mb-7 flex w-full gap-5 smx:flex-col">
            <div className="flex-1 space-y-3">
            <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                          Преподаватель курса
                        </FormLabel>
                        <FormControl>
                          <div>
                            {users && (
                              <Combobox
                                {...field}
                                items={convertUsersToComboboxItems(users.data)}
                                onSelect={handleUserSelect}
                                value={selectedUser}
                                className='w-full'
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage>
                        {form.formState?.errors?.userId && (
                            <span>{form.formState.errors.userId.message}</span>
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
            <span>Добавить</span>
          </Button>
        </form>
      </Form>
    );
  };
  