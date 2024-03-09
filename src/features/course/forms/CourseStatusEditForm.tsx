import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCourseStatusEditForm } from '../hooks/useCourseStatusEditForm';

interface CourseStatusEditFormProps {
  status: СourseStatus;
}

export const CourseStatusEditForm = ({ status }: CourseStatusEditFormProps) => {
  const { state, form, functions } = useCourseStatusEditForm({ status });

  // const users = getUsers.data
  // console.log(getUsers.data)
  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className='flex w-full flex-col items-end'>
        <div className='mb-7 flex w-full gap-5 smx:flex-col'>
          <div className='flex-1 space-y-3'>
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Статус</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='OpenForAssigning' />
                        </FormControl>
                        <FormLabel className='font-normal'>Открыт для записи</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Created' />
                        </FormControl>
                        <FormLabel className='font-normal'>Создан</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Started' />
                        </FormControl>
                        <FormLabel className='font-normal'>В процессе обучения</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Finished' />
                        </FormControl>
                        <FormLabel className='font-normal'>Завершен</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.status && (
                      <span>{form.formState.errors.status.message}</span>
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
          <span>Сохранить</span>
        </Button>
      </form>
    </Form>
  );
};
