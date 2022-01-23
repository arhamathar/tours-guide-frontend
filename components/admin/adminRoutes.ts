const adminRoutes = [
    {
        label: 'Hotels',
        path: '/admin/hotels',
        access: ['admin', 'manager'],
        navbar: [
            { title: 'Add', path: '/admin/hotel/create' },
            { title: 'Update', path: '/admin/hotel/update' },
            { title: 'Back', path: '/admin/hotels' },
        ],
    },
    {
        label: 'Bookings',
        path: '/admin/bookings',
        access: ['admin', 'manager', 'traveller'],
        navbar: [
            { title: 'All', path: '/admin/bookings' },
            { title: 'Future', path: '/admin/bookings/future' },
            { title: 'History', path: '/admin/bookings/history' },
        ],
    },
    {
        label: 'Settings',
        path: '/admin/settings',
        access: ['admin'],
    },
    {
        label: 'Register',
        path: '/auth/register/user',
        access: ['admin'],
    },
];

export default adminRoutes;
