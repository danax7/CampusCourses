import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileEditSchema, profileEditSchema } from '../constants/ProfileEditSchema';
import { usePutProfileEditMutation } from '@/utils/api/hooks/usePutProfileEditMutation';
import { getProfile } from '@/utils/api/requests/user/profile/get';
import { useEffect } from 'react';
import { toast } from 'sonner';


export const useProfileForm = () => {

  const profileEditForm = useForm<ProfileEditSchema>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
        fullName: '',
        birthDate: '',
    }
  });

  const putProfileEdit = usePutProfileEditMutation();

  const onSubmit = profileEditForm.handleSubmit(async (values) => {
    const { birthDate, ...rest } = values;
    const isoBirthDate = new Date(birthDate).toISOString();
    await putProfileEdit.mutateAsync({ ...rest, birthDate: isoBirthDate });
        toast.info('Профиль успешно обновлен', {
          cancel: { label: 'Close' }
        });
      
  });
  
    const setUserProfile = async () => {
      const res = await getProfile();
      const { fullName, birthDate } = res.data;
      profileEditForm.setValue('fullName', fullName || '');
      profileEditForm.setValue('birthDate', birthDate?.substring(0, 10) || '');
    };

    useEffect(() => {
        setUserProfile();
    }, []);


  return {
    state: {
        isLoading: putProfileEdit.isPending
    },
    form: profileEditForm,
    functions: { onSubmit }
  };
};
