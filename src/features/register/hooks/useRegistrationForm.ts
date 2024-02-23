import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { RegistrationSchema, registrationSchema } from '../constants/RegistrationSchema';
import { usePostRegisterMutation } from '@/utils/api/hooks/usePostRegisterMutation';


export const useRegistrationForm = () => {
  const navigate = useNavigate();

  const registrationForm = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        birthDate: '',
    }
  });

  const postRegister = usePostRegisterMutation();

  const onSubmit = registrationForm.handleSubmit(async (values) => {
    const { birthDate, ...rest } = values;
    const isoBirthDate = new Date(birthDate).toISOString();
  
    const res = await postRegister.mutateAsync({ ...rest, birthDate: isoBirthDate });
    localStorage.setItem("token", res.data.token)
    navigate('/');
  });

  return {
    state: {
        isLoading: postRegister.isPending
    },
    form: registrationForm,
    functions: { onSubmit }
  };
};
