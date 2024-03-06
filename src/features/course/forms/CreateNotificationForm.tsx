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

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCreateNotificationForm } from '../hooks/useCreateNotificationForm';

export const CreateNotificationForm = () => {
  const { state, form, functions } = useCreateNotificationForm();

  // const users = getUsers.data
  // console.log(getUsers.data)
  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='mb-7 flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Введите текст уведомления</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Введите текст' />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.text && (
                      <span>{form.formState.errors.text.message}</span>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='isImportant'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Важность</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue='false'
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='false' />
                        </FormControl>
                        <FormLabel className='font-normal'>Обычная</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='true' />
                        </FormControl>
                        <FormLabel className='font-normal'>Высокая</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.isImportant && (
                      <span>{form.formState.errors.isImportant.message}</span>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type='submit'
          variant='default'
          size='lg'
          loading={state.isLoading}
          className='w-full'
        >
          <span>Создать</span>
        </Button>
      </form>
    </Form>
  );
};
