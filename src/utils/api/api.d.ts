interface MutationSettings<Params = void, Func = unknown> {
  config?: ApiRequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    'queryKey'
  >;
}

type ResponseError = Error & { config: RequestConfig; response: InterceptorResponseResult };

type RequestParams<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface UserRegisterDto {
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserEditDto {
  fullName: string;
  birthDate: string;
}

interface UserProfileDto {
  fullName: string;
  birthDate: string;
  email: string;
}

interface UserLoginDto {
  email: string;
  password: string;
}

interface TokenResponse {
  token: string;
}

type UserRole = 'teacherAndStudent' | 'teacher' | 'student' | 'user' | 'guest';

interface UserRolesResponse{
  isTeacher: boolean,
  isStudent: boolean,
  isAdmin: boolean
}

interface GroupLiteDto {
  id: string;
  name: string;
}

interface GroupCreateDto {
  name: string;
}

interface CampusCourseDto{
  id: string;
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  remainingSlotsCount: number;
  status: string;
  semester: string
}

const CourseStatuses = 'Created' | 'OpenForAssigning' | 'Started' | 'Finished'