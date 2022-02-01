import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Navbar from './Navbar';
import Footer from 'Layout/Footer';

import { LOGIN_USER } from 'Redux/actionTypes/user';

interface Iprops {
    children: ReactNode;
    className?: string;
}

function Index({ children, className }: Partial<Iprops>) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const { token, userData } = Cookies.get();
        const user = { token, ...JSON.parse(userData) };
        dispatch({ type: LOGIN_USER, payload: user });
    }, []);

    const { pathname } = useRouter();

    return (
        <>
            {!pathname.includes('admin') && <Navbar active={true} />}
            <div className={`${className}`}>{children}</div>
            {!pathname.includes('admin') && <Footer />}
        </>
    );
}

export default Index;
