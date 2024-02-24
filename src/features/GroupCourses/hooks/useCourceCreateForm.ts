import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GroupSchema, groupSchema } from '../constants/GroupSchema';
import { usePostCreateGroupMutation } from '@/utils/api/hooks/usePostGroupMutation';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { usePutGroupEditMutation } from '@/utils/api/hooks/usePutGroupEditMutation';
import { useEffect, useState } from 'react';
import { CourseCreateSchema, courceCreateSchema } from '../constants/CourceCreateSchema';
import { useGetUsersQuery } from '@/utils/api/hooks/useGetUsersQuery';


interface useCourseCreateFormProps {
  actionType: 'add' | 'edit';
  cource?: CampusCourseDto;
}

export const useCourseCreateForm = ({actionType, cource}: useCourseCreateFormProps) => {
  const [selectedUser, setSelectedUser] = useState('');
  const queryClient = useQueryClient();



  const courceCreateForm = useForm<CourseCreateSchema>({
    resolver: zodResolver(courceCreateSchema),
    defaultValues: {
      name: '',
      startYear: 2024,
      maximumStudentsCount: 100,
      semester: '',
      requirements: '',
      annotations: '',
      mainTeacherId:''
    }
  });

  const handleUserSelect = (value: string | undefined) => {
    console.log(value);
    courceCreateForm.setValue('mainTeacherId', value!)
    setSelectedUser(value || '');
  };

  const postCreateGroup = usePostCreateGroupMutation();
  const putGroupEdit = usePutGroupEditMutation();

  const getUsers = useGetUsersQuery();

//   console.log(courceCreateForm.formState);

//   useEffect(() => {
//     if (actionType === 'edit') {
//         courceCreateForm.setValue('name', group?.name || '');
//     }
//   }, [actionType, group]);

  const onSubmit = courceCreateForm.handleSubmit(async (values) => {
    console.log(values);
    // if (actionType === 'add') {
    //   const res = await postCreateGroup.mutateAsync(values);
    //   if (res.data) {
    //     queryClient.invalidateQueries('getGroups');
    //     toast.info('Группа успешно создана', {
    //       cancel: { label: 'Close' }
    //     });
    //   }
    // } else if (actionType === 'edit') {
   
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
      isLoading: postCreateGroup.isPending || putGroupEdit.isPending
    },
    form: courceCreateForm,
    functions: { onSubmit },
    handleUserSelect,
    selectedUser,
    users: getUsers.data
  };
};
