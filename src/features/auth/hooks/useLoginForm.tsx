import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { LoginSchema, loginSchema } from '../constants/LoginSchema';

import { usePostLoginMutation } from '@/utils/api/hooks/usePostLoginMutation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/utils/store/store';
import { setToken } from '@/utils/AuthSlice/slice';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  
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
    localStorage.setItem('email', loginForm.getValues("email"))
    dispatch(setToken(res.data.token))
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
