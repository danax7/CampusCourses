import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { RegistrationSchema, registrationSchema } from '../constants/RegistrationSchema';
import { usePostRegisterMutation } from '@/utils/api/hooks/usePostRegisterMutation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/utils/store/store';
import { setRoles, setToken } from '@/utils/AuthSlice/slice';
import { getRoles } from '@/utils/api/requests/user/roles';

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const registrationForm = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      birthDate: '',
    },
  });

  const postRegister = usePostRegisterMutation();

  const onSubmit = registrationForm.handleSubmit(async (values) => {
    const { birthDate, ...rest } = values;
    const isoBirthDate = new Date(birthDate).toISOString();

    const res = await postRegister.mutateAsync({ ...rest, birthDate: isoBirthDate });

    localStorage.setItem('email', values.email);
    dispatch(setToken(res.data.token));

    if (res.data) {
      const roles = (await getRoles()).data;
      localStorage.setItem('roles', JSON.stringify(roles));
      dispatch(setRoles(roles));
    }

    navigate('/');
  });

  return {
    state: {
      isLoading: postRegister.isPending,
    },
    form: registrationForm,
    functions: { onSubmit },
  };
};
