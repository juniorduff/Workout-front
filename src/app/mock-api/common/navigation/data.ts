/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'student',
        title: 'Alunos',
        subtitle: 'Manage your students',
        type: 'group',
        icon: 'heroicons_outline:document',
    },
    {
        id: 'student-register',
        title: 'Register',
        type: 'basic',
        icon: 'heroicons_outline:user-add',
        link: '/student/create',
    },
    {
        id: 'student-list',
        title: 'List all students',
        type: 'basic',
        icon: 'heroicons_outline:view-list',
        link: '/student/list',
    },

    {
        id: 'exercise',
        title: 'Exercises',
        subtitle: 'Menage  Yours Exercises',
        type: 'group',
    },

    {
        id: 'exercise',
        title: 'New Exercise',
        type: 'basic',
        icon: 'heroicons_solid:plus-circle',
        link: '/exercise/register',
    },
    {
        id: 'exercise',
        title: 'List Exercises',
        type: 'basic',
        icon: 'heroicons_solid:view-boards',
        link: '/exercise/list',
    },

    {
        id: 'exercise',
        title: 'Workout',
        subtitle: 'Menage Yours Workout',
        type: 'group',
    },
    {
        id: 'exercise',
        title: 'New Workout',
        type: 'basic',
        icon: 'heroicons_outline:view-grid-add',
        link: '/workout/create',
    },
    {
        id: 'exercise',
        title: 'list by Student',
        type: 'basic',
        icon: 'heroicons_outline:trending-up',
        link: '/workout/list',
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'exercise',
        title: 'Example3',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/exercise',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'exercise',
        title: 'Example4',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/exercise',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'exercise',
        title: 'Example5',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/exercise',
    },
];
