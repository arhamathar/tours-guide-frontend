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
                        className={`flex p-4 justify-between  hover:bg-pink-400 hover:text-white  text-md w-full uppercase text-left ${
                            activeClass
                                ? 'bg-pink-500 text-white'
                                : 'text-gray-700'
                        }`}
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
