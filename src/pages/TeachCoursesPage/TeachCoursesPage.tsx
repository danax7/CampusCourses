import { CampusCourseCard } from '@/features/GroupCourses/component/CampusCourseCard/CampusCourseCard';
import { useGetTeachCoursesQuery } from '@/utils/api/hooks/useGetTeachCoursesQuery';

export const TeachCoursesPage = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetTeachCoursesQuery();
  return (
    <div className='py-6 md:px-20 px-2 space-y-4'>
      <h2 className='text-3xl font-semibold'>Преподаваемые курсы</h2>
      <div className='space-y-3'>
        {isSuccess &&
          data &&
          data.data.map((course) => <CampusCourseCard course={course} />)}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {/* {isSuccess && data.data.length==0 && <div>У группы нет курсов на данный момент</div>} */}
      </div>
    </div>
  );
};
