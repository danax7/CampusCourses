export const statusTexts: Record<СourseStatus, string> = {
    'OpenForAssigning': 'Открыт для записи',
    'Created': 'Создан',
    'Started': 'В процессе обучения',
    'Finished': 'Завершен',
};

export const StudentStatusTexts: Record<StudentStatuses, string> = {
    'InQueue': 'В очереди',
    'Accepted': 'Принят в группу',
    'Declined': 'Отклонен'
};

export const StudentMarkTexts: Record<StudentMarks, string> = {
    'Passed': 'Пройдена',
    'Failed': 'Зафейлена',
    'NotDefined': 'Отметки нет'
};