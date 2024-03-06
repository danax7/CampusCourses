import { useMutation } from '@tanstack/react-query';
import { putEditCourse } from '../requests/GroupsCampusCourses/CourseInfo/InfoEdit';

export const usePutEditCourseMutation = (
  settings?: MutationSettings<typeof putEditCourse>,
) =>
  useMutation({
    mutationKey: ['putEditCourse'],
    mutationFn: (params) =>
      putEditCourse({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        id: params.id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        data: params.data,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
