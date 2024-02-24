import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/ui';
import { useGroupForm } from '../hooks/useGroupForm';

interface EmployeeFormProps {
  actionType: 'add' | 'edit';
  groupId?: string;
}

export const GroupForm = ({ actionType, groupId }: EmployeeFormProps) => {
  const { state, form, functions } = useGroupForm({actionType, groupId});
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
                    Название группы
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
