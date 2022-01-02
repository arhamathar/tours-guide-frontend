const AdminLayout: React.FC = ({ children }) => {
    return (
        <div className='min-h-screen flex justify-center items-middle bg-gradient-to-r from-pink-500 to-pink-800'>
            {children}
        </div>
    );
};

export default AdminLayout;
