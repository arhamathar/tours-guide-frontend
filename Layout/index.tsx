import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

interface Iprops {
    children: ReactNode;
    className?: string;
}

function Index({ children, className }: Partial<Iprops>) {
    const { pathname } = useRouter();

    return (
        <>
            {!pathname.includes('admin') && <Navbar active={true} />}
            <div className={`${className}`}>{children}</div>
        </>
    );
}

export default Index;
