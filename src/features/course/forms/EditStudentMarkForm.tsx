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
import { useEditStudentMarkForm } from '../hooks/useEditStudentMarkForm';
  
  interface EditStudentMarkFormProps {
    studentId: string;
    markType: string;
  }
  
  export const EditStudentMarkForm = ({ studentId, markType }: EditStudentMarkFormProps) => {
    const { state, form, functions } = useEditStudentMarkForm({studentId, markType});

    return (
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className="flex w-full flex-col items-end">
          <div className="mb-7 flex w-full gap-5 smx:flex-col">
            <div className="flex-1 space-y-3">
                <FormField
                    control={form.control}
                    name="mark"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Статус
                        </FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Passed" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Пройдено
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Failed" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Зафейлено
                                        </FormLabel>
                                    </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage>
                        {form.formState?.errors?.mark && (
                            <span>{form.formState.errors.mark.message}</span>
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
            <span>Сохранить</span>
          </Button>
        </form>
      </Form>
    );
  };
  