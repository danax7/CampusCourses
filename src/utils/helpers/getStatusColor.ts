export const getStatusColor = (status: СourseStatus) => {
    switch (status) {
        case 'OpenForAssigning':
            return 'text-green-600';
        case 'Created':
            return 'text-current';
        case 'Started':
            return 'text-blue-600';
        case 'Finished':
            return 'text-destructive';
        default:
            return '';
    }
};


export const getStudentStatusColor = (status: StudentStatuses) => {
    switch (status) {
        case 'InQueue':
            return 'text-blue-600';
        case 'Accepted':
            return 'text-green-600';
        case 'Declined':
            return 'text-destructive';
        default:
            return '';
    }
};