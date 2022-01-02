import Sidebar from 'Layout/Sidebar';
import AdminLayout from 'Layout/AdminLayout';

const Wrapper: React.FC = ({ children }) => {
    return (
        <AdminLayout>
            <div className='bg-white m-auto md:w-11/12 w-full grid shadow-xl min-h-screen md:min-h-0 md:rounded overflow-hidden'>
                <Sidebar />
                <div>{children}</div>
            </div>
        </AdminLayout>
    );
};

export default Wrapper;
