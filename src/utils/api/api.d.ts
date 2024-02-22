interface MutationSettings<Params = void, Func = unknown> {
  config?: ApiRequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

type ResponseError = Error & { config: RequestConfig; response: InterceptorResponseResult };

type RequestParams<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface UserRegisterDto {
  fullName: string;
  birthDate?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserLoginDto {
  email: string;
  password: string;
}

type UserRole = 'admin' | 'teacher' | 'student';