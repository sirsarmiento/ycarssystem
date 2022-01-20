import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'ADMIN',
        items: ['cliente','user', 'rol', 'state', 'city', 'dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
];

export const sideNavItems: SideNavItems = {
    cliente: {
        icon: 'tachometer-alt',
        text: 'Cliente',
        link: '/cliente',
    },
    user: {
        icon: 'tachometer-alt',
        text: 'Usuario',
        link: '/user',
    },
    rol: {
        icon: 'tachometer-alt',
        text: 'Roles',
        link: '/rol',
    },
    city: {
        icon: 'tachometer-alt',
        text: 'Ciudades',
        link: '/city',
    },
    state: {
        icon: 'tachometer-alt',
        text: 'Estados',
        link: '/state',
    },
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Disponible',
                submenu: [
                    {
                        text: 'Submenu1',
                        link: '/auth/login',
                    },
                    {
                        text: 'Submenu2',
                        link: '/auth/register',
                    },
                    {
                        text: 'Submenu3',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
};
