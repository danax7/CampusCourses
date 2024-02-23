'use client';

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


import { useLoginForm } from './hooks/useLoginForm';

export const LoginForm = () => {
  const { state, form, functions } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='space-y-3 max-w-96 w-96'>
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
        <Button
          type='submit'
          size='lg'
          className='w-full'
          loading={state.isLoading}
        >
          Войти
        </Button>
      </form>
    </Form>
  );
};
