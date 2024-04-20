import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { CourseCreateSchema, courceCreateSchema } from '../constants/CourceCreateSchema';
import { useGetUsersQuery } from '@/utils/api/hooks/useGetUsersQuery';
import { usePostCourseCreateMutation } from '@/utils/api/hooks/usePostCourseCreateMutation';
import { useParams } from 'react-router-dom';
import { usePutEditCourseDetailedInfo } from '@/utils/api/hooks/usePutEditCourseDetailedInfoMutation';

interface useCourseCreateFormProps {
  actionType: 'add' | 'edit';
  cource?: CampusCourseFullInfo;
}

export const useCourseCreateForm = ({ actionType, cource }: useCourseCreateFormProps) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [selectedUser, setSelectedUser] = useState('');
  const queryClient = useQueryClient();
  const getUsers = useGetUsersQuery();

  console.log('@cource', cource);

  const courceCreateForm = useForm<CourseCreateSchema>({
    resolver: zodResolver(courceCreateSchema),
    defaultValues: {
      name: cource?.name ?? '',
      startYear: cource?.startYear ?? 2024,
      maximumStudentsCount: cource?.maximumStudentsCount ?? 100,
      semester: cource?.semester ?? '',
      requirements: cource?.requirements ?? '',
      annotations: cource?.annotations ?? '',
      mainTeacherId: '', // cringe
    },
  });

  const handleUserSelect = (value: string | undefined) => {
    courceCreateForm.setValue('mainTeacherId', value!);
    setSelectedUser(value || '');
  };

  const postCreateCourse = usePostCourseCreateMutation();
  const putEditCourseDetailedInfo = usePutEditCourseDetailedInfo();

  const onSubmit = courceCreateForm.handleSubmit(async (values) => {
    if (actionType === 'add') {
      const res = await postCreateCourse.mutateAsync({ groupId: groupId!, data: values });

      if (res.data) {
        queryClient.invalidateQueries({ queryKey: ['groupCourses'] });
        toast.info('Курс успешно создан', {
          cancel: { label: 'Close' },
        });
      }
    } else if (actionType === 'edit') {
      const res = await putEditCourseDetailedInfo.mutateAsync({
        courceId: cource!.id,
        data: values,
      });
      if (res.data) {
        queryClient.invalidateQueries({
          queryKey: ['groupCourseDetailedInfo', cource?.id],
        });
        toast.info('Курс успешно отредактирован', {
          cancel: { label: 'Close' },
        });
      }
    }
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
