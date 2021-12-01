interface NavBarLinks {
    label: string;
    href: string;
    permission?: 'USER' | 'ADMIN' | 'GUIDE' | 'MANAGER';
}

export const NAV_BAR_LINKS: NavBarLinks[] = [
    {
        label: 'Home',
        href: '/',
        permission: 'USER',
    },
    {
        label: 'Login',
        href: '/auth/login',
        permission: 'USER',
    },
    {
        label: 'Register',
        href: '/auth/register',
        permission: 'USER',
    },
];
