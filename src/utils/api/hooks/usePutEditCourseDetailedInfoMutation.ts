import { useMutation } from '@tanstack/react-query';
import {
  PutEditCourseDetailedInfo,
  PutEditCourseDetailedInfoParams,
} from '../requests/GroupsCampusCourses/CourseInfo/editCourseDetailedInfo';

export const usePutEditCourseDetailedInfo = (
  settings?: MutationSettings<
    PutEditCourseDetailedInfoParams,
    typeof PutEditCourseDetailedInfo
  >,
) =>
  useMutation({
    mutationKey: ['putEditCourseDetailedInfo'],
    mutationFn: (params) =>
      PutEditCourseDetailedInfo({
        params,
        ...(settings?.config && { config: settings.config }),
      }),
    ...settings?.options,
  });
