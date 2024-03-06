import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { CourseCreateSchema, courceCreateSchema } from '../constants/CourceCreateSchema';
import { useGetUsersQuery } from '@/utils/api/hooks/useGetUsersQuery';
import { usePostCourseCreateMutation } from '@/utils/api/hooks/usePostCourseCreateMutation';
import { useParams } from 'react-router-dom';

interface useCourseCreateFormProps {
  actionType: 'add' | 'edit';
  // cource?: CampusCourseDto;
}

export const useCourseCreateForm = ({ actionType }: useCourseCreateFormProps) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [selectedUser, setSelectedUser] = useState('');
  const queryClient = useQueryClient();
  const getUsers = useGetUsersQuery();

  const courceCreateForm = useForm<CourseCreateSchema>({
    resolver: zodResolver(courceCreateSchema),
    defaultValues: {
      name: '',
      startYear: 2024,
      maximumStudentsCount: 100,
      semester: '',
      requirements: '',
      annotations: '',
      mainTeacherId: '',
    },
  });

  const handleUserSelect = (value: string | undefined) => {
    courceCreateForm.setValue('mainTeacherId', value!);
    setSelectedUser(value || '');
  };

  const postCreateCourse = usePostCourseCreateMutation();

  const onSubmit = courceCreateForm.handleSubmit(async (values) => {
    if (actionType === 'add') {
      const res = await postCreateCourse.mutateAsync({ groupId: groupId!, data: values });

      if (res.data) {
        queryClient.invalidateQueries({ queryKey: ['groupCourses'] });
        toast.info('Курс успешно создан', {
          cancel: { label: 'Close' },
        });
      }
    }

    // else if (actionType === 'edit') {

    //   const res = await putGroupEdit.mutateAsync({ id: group?.id, data: values });
    //   if (res.data) {
    //     queryClient.invalidateQueries('getGroups');
    //     toast.info('Группа успешно отредактирована', {
    //       cancel: { label: 'Close' }
    //     });
    //   }
    // }
  });

  return {
    state: {
      isLoading: postCreateCourse.isPending,
    },
    form: courceCreateForm,
    functions: { onSubmit },
    handleUserSelect,
    selectedUser,
    users: getUsers.data,
  };
};
