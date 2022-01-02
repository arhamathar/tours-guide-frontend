import Link from 'next/link';

import adminRoutes from 'components/admin/adminRoutes';

const Sidebar = () => {
    const getNavLinks = () => {
        return adminRoutes.map((route) => (
            <Link key={route.label} href={route.path}>
                <a className='flex p-4 justify-between md:bg-gray-100 md:text-gray-700 text-md text-gray-100  w-full uppercase text-left'>
                    {route.label}
                </a>
            </Link>
        ));
    };
    return (
        <aside className='border-r border-gray-100 min-h-screen md:min-h-0'>
            {getNavLinks()}
        </aside>
    );
};

export default Sidebar;
