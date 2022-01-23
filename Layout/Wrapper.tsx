import { useEffect, useState } from 'react';
import Sidebar from 'Layout/Sidebar';
import AdminLayout from 'Layout/AdminLayout';
import Header from 'components/admin/Header';

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
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setSideBar(true);
            } else {
                setSideBar(false);
            }
        });
    }, []);

    return (
        <AdminLayout>
            <div className='admin__wrapper  bg-white m-auto md:w-11/12 xl:min-h-5/6 lg:w-10/12 w-full flex flex-col shadow-xl md:rounded'>
                <div>
                    <Header
                        sidebarHandler={() =>
                            setSideBar((currState) => !currState)
                        }
                    />
                </div>
                <div className='md:flex overflow-y-auto md:overflow-hidden'>
                    <div
                        className={`absolute w-full sm:w-8/12 max-w-xs z-5 md:static md:w-2/12 mt-16 md:mt-0 transform top-0 left-0 bottom-0 ${
                            sideBar ? '' : '-translate-x-full '
                        } transition-all bg-gray-100`}
                    >
                        {' '}
                        <Sidebar />
                    </div>
                    <div className='w-full md:w-10/12 py-1 px-4 overflow-y-scroll'>
                        {children}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Wrapper;
