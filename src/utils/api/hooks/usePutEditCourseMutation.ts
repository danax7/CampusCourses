import { useMutation } from '@tanstack/react-query';
import { putEditCourse } from '../requests/GroupsCampusCourses/CourseInfo/InfoEdit';

export const usePutEditCourseMutation = (
    settings?: MutationSettings<typeof putEditCourse>
  ) =>
    useMutation({
      mutationKey: ['putEditCourse'],
      mutationFn: (params) =>
      putEditCourse({
          id: params.id,
          data: params.data,
          ...(settings?.config && { config: settings.config })
        }),
      ...settings?.options
    });
  