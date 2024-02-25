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
import { useCourseEditForm } from '../hooks/useCourseEditForm';
  
interface CourseEditFormProps{
    annotations: string;
    requirements: string;
}

  export const CourseEditForm = ({annotations, requirements}:CourseEditFormProps) => {
    const { state, form, functions } = useCourseEditForm({annotations,requirements});

    // const users = getUsers.data
    // console.log(getUsers.data)
    return (
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className="flex w-full flex-col items-end">
          <div className="mb-7 flex w-full gap-5 smx:flex-col">
            <div className="flex-1 space-y-3">
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
  