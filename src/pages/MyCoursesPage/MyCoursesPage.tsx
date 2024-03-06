import { CampusCourseCard } from '@/features/GroupCourses/component/CampusCourseCard/CampusCourseCard';
import { useGetMyCoursesQuery } from '@/utils/api/hooks/useGetMyCoursesQuery';

export const MyCoursesPage = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetMyCoursesQuery();
  return (
    <div className='py-6 md:px-20 px-2 space-y-4'>
      <h2 className='text-3xl font-semibold'>Мои курсы</h2>
      <div className='space-y-3'>
        {isSuccess &&
          data &&
          data.data.map((course) => <CampusCourseCard course={course} />)}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Ошибка: {error.message}</p>}
        {isSuccess && data.data.length == 0 && (
          <div>Вы пока не записались ни на один курс</div>
        )}
      </div>
    </div>
  );
};
