import React from 'react';
import Navbar from 'components/Navigation/Navbar';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
    return (
        <div className='bg-indigo-100 min-h-screen'>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;
