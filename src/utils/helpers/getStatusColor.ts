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
