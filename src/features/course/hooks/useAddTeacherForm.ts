import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddTeacherSchema, addTeacherSchema } from '../constants/addTeacherSchema';
import { useGetUsersQuery } from '@/utils/api/hooks/useGetUsersQuery';
import { usePostAddTeacherMutation } from '@/utils/api/hooks/usePostAddTeacherMutation';

export const useAddTeacherForm = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [selectedUser, setSelectedUser] = useState('');
  const queryClient = useQueryClient();
  const getUsers = useGetUsersQuery();

  const addTeacherForm = useForm<AddTeacherSchema>({
    resolver: zodResolver(addTeacherSchema),
    defaultValues: {
        userId:''
    }
  });

  const handleUserSelect = (value: string | undefined) => {
    addTeacherForm.setValue('userId', value!)
    setSelectedUser(value || '');
  };

  const postAddCourseTeacher = usePostAddTeacherMutation();

  const onSubmit = addTeacherForm.handleSubmit(async (values) => {
      const res = await postAddCourseTeacher.mutateAsync({ courseId: courseId, data: values });
   
      if (res.data) {
        queryClient.invalidateQueries(['groupCourseDetailedInfo']); 
        toast.info('Преподаватель успешно добавлен', {
          cancel: { label: 'Close' }
        });
      }
  });

  return {
    state: {
      isLoading: postAddCourseTeacher.isPending
    },
    form: addTeacherForm,
    functions: { onSubmit },
    handleUserSelect,
    selectedUser,
    users: getUsers.data
  };
};
