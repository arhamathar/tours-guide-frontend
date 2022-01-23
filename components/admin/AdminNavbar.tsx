import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
    navRoutes: { title: string; path: string }[] | undefined;
}

const AdminNavbar: React.FC<IProps> = ({ navRoutes }) => {
    const { pathname } = useRouter();

    // const isActive = exact ? pathname === href : pathname.startsWith(href);

    const renderNavItem = () => {
        return navRoutes?.map((navItem) => {
            return (
                <Link href={navItem.path} key={navItem.path}>
                    <a className='block bg-gray-200 min-w-max mr-2 py-2 mb-1 px-5 rounded-full text-gray-700 text-sm font-normal'>
                        {navItem.title}
                    </a>
                </Link>
            );
        });
    };
    return (
        <div className='bg-white z-10 sticky top-0 right-0 left-0 p-1 flex items-center justify-start border-b border-gray-200 overflow-x-auto overflow-y-auto scrollbar-hide'>
            {renderNavItem()}
        </div>
    );
};

export default AdminNavbar;
