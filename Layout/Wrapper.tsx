import { useEffect, useState } from 'react';
import Sidebar from 'Layout/Sidebar';
import AdminLayout from 'Layout/AdminLayout';

const Wrapper: React.FC = ({ children }) => {
    const [sideBar, setSideBar] = useState(() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
            return true;
        }
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            return false;
        }
        return true;
    });

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setSideBar(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setSideBar(true);
            }
        });
    }, []);

    return (
        <AdminLayout>
            <div className='bg-white m-auto md:w-11/12 w-full flex shadow-xl min-h-screen md:min-h-0 md:rounded overflow-hidden'>
                <div
                    className={`absolute w-8/12 max-w-xs z-2 md:static md:w-2/12 bg-gradient-to-r from-pink-500 to-pink-800 transform top-0 left-0 bottom-0 ${
                        sideBar ? '' : '-translate-x-full'
                    } transition-all`}
                >
                    {' '}
                    <Sidebar />
                </div>
                <div className='w-10/12'>{children}</div>
            </div>
        </AdminLayout>
    );
};

export default Wrapper;
