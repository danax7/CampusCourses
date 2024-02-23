import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { LoginSchema, loginSchema } from '../constants/LoginSchema';

import { usePostLoginMutation } from '@/utils/api/hooks/usePostLoginMutation';
export const useLoginForm = () => {
  const navigate = useNavigate();

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
        email: '',
        password: '',
    }
  });

  const postLogin = usePostLoginMutation();

  const onSubmit = loginForm.handleSubmit(async (values) => {
    const res = await postLogin.mutateAsync(values);

    localStorage.setItem("token", res.data.token)
    
    navigate('/');
  });

  return {
    state: {
        isLoading: postLogin.isPending
    },
    form: loginForm,
    functions: { onSubmit }
  };
};
