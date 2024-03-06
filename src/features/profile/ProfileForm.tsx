import { Input, Button } from '@/components/ui';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
  FormField,
} from '@/components/ui/form';
import { selectUserEmail } from '@/utils/AuthSlice/slice';
import { useSelector } from 'react-redux';
import { useProfileForm } from './hooks/useProfileForm';

export const ProfileForm = () => {
  const { state, form, functions } = useProfileForm();
  const email = useSelector(selectUserEmail);

  return (
    <Form {...form}>
      <form
        className='flex flex-col max-w-prose gap-4 border p-4 w-full'
        onSubmit={functions.onSubmit}
      >
        <div>
          <span className='text-sm font-medium'>Email</span>
          <p className='text-xl'>{email}</p>
        </div>
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>ФИО</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.fullName && (
                  <span>{form.formState.errors.fullName.message}</span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='birthDate'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Дата рождения</FormLabel>
              <FormControl>
                <Input
                  type='date'
                  {...field}
                  max={new Date().toISOString().substring(0, 10)}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.birthDate && (
                  <span>{form.formState.errors.birthDate.message}</span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button type='submit' className='mt-3' loading={state.isLoading}>
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
