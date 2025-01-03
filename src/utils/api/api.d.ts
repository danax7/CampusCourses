/* eslint-disable @typescript-eslint/no-explicit-any */
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

type ResponseError = Error & {
  config: RequestConfig;
  response: InterceptorResponseResult;
};

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

interface UserRolesResponse {
  isTeacher: boolean;
  isStudent: boolean;
  isAdmin: boolean;
}

interface GroupLiteDto {
  id: string;
  name: string;
}

interface GroupCreateDto {
  name: string;
}

interface CampusCourseDto {
  id: string;
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  remainingSlotsCount: number;
  status: СourseStatus;
  semester: string;
}

type СourseStatus = 'Created' | 'OpenForAssigning' | 'Started' | 'Finished';
type Semester = 'Autumn' | 'Spring';
type StudentStatuses = 'InQueue' | 'Accepted' | 'Declined';

interface CampusCourseCreateDto {
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  semester: string;
  requirements: string;
  annotations: string;
  mainTeacherId: string;
}

interface TeacherDto {
  name: string;
  email: string;
  isMain: boolean;
}

// interface UserDto {
//   name: string;
//   email: string;
// }

type MarkType = 'Midterm' | 'Final';
type StudentMarks = 'NotDefined' | 'Passed' | 'Failed';

interface UserDto {
  id: string;
  name: string;
  email: string;
  status: StudentStatuses;
  midtermResult?: StudentMarks;
  finalResult?: StudentMarks;
}

interface EditCourseStudentMarkDto {
  markType: string;
  mark: string;
}

interface NotificationDto {
  text: string;
  isImportant: string;
}

interface CreateNotificationDto {
  text: string;
  isImportant: boolean;
}

interface CampusCourseFullDto extends CampusCourseDto {
  id: string;
  maximumStudentsCount: number;
  studentsEnrolledCount: number;
  studentsInQueueCount: number;
  requirements: string;
  annotations: string;
  students: UserDto[];
  teachers: TeacherDto[];
  notifications: NotificationDto[];
}

interface CampusCourseFullInfo {
  id: string;
  maximumStudentsCount: number;
  requirements: string;
  annotations: string;
  name: string;
  startYear: number;
  status: СourseStatus;
  semester: string;
  // mainTeacherId: string;
}

interface CampusCourseCreateDtoRequest extends CampusCourseCreateDto {
  groupId: string;
}

interface SearchUserDto {
  id: string;
  fullName: string;
}

interface AddTeacherDto {
  userId: string;
}

interface EditStudentStatusDto {
  status: StudentStatuses;
}

interface EditCourseStatusDto {
  status: СourseStatus;
}

interface EditCourseDto {
  requirements: string;
  annotations: string;
}

interface EditCourseDetailedInfoDto {
  name: string;
  startYear: number;
  maximumStudentsCount: number;
  semester: string;
  requirements: string;
  annotations: string;
  mainTeacherId: string;
}

interface EditGroupDto {
  name: string;
}
