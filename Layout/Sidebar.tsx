import Link from 'next/link';
import { useRouter } from 'next/router';

import adminRoutes from 'components/admin/adminRoutes';

const Sidebar = () => {
    const router = useRouter();

    const getNavLinks = () => {
        return adminRoutes.map((route) => {
            let activeClass = false;
            if (router.pathname === route.path) {
                activeClass = true;
            }
            return (
                <Link key={route.label} href={route.path}>
                    <a
                        className={`${
                            activeClass ? 'bg-pink-500' : ''
                        } flex p-4 justify-between md:bg-gray-100 md:hover:bg-pink-400 md:hover:text-white md:text-gray-700 text-md text-gray-100  w-full uppercase text-left`}
                    >
                        {route.label}
                    </a>
                </Link>
            );
        });
    };
    return (
        <aside className=' min-h-full md:min-h-0'>
            {getNavLinks()}
            <button className='p-4 md:bg-gradient-to-r from-pink-500 to-pink-700 text-md hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-500 text-gray-100  w-full uppercase text-left'>
                Sign Out
            </button>
        </aside>
    );
};

export default Sidebar;
