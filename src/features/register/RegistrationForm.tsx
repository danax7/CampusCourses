import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { useRegistrationForm } from './hooks/useRegistrationForm';


export const RegistrationForm = () => {
  const { state, form, functions } = useRegistrationForm();

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='space-y-3 max-w-96 w-96'>
      <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Имя
              </FormLabel>
              <FormControl>
                <Input
                  disabled={state.isLoading}
                  placeholder="Имя"
                  {...field}
                />
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
              <FormLabel>
                Дата рождения
              </FormLabel>
              <FormControl>
                <Input
                  type='date'
                  disabled={state.isLoading}
                  placeholder="Дата рождения"
                  {...field}
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
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  disabled={state.isLoading}
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.password && (
                  <span>{form.formState.errors.password.message}</span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Пароль
              </FormLabel>
              <FormControl>
                  <Input
                    disabled={state.isLoading}
                    placeholder="******"
                    {...field}
                    type='password'
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.password && (
                  <span>{form.formState.errors.password.message}</span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Подтвердите пароль
              </FormLabel>
              <FormControl>
                  <Input
                    disabled={state.isLoading}
                    placeholder="******"
                    {...field}
                    type='password'
                />
              </FormControl>
              <FormMessage>
                {form.formState?.errors?.confirmPassword && (
                  <span>{form.formState.errors.confirmPassword.message}</span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        <Button
          type='submit'
          size='lg'
          className='w-full'
          loading={state.isLoading}
        >
          Зарегестрироваться
        </Button>
      </form>
    </Form>
  );
};
