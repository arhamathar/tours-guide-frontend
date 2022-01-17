import { ReactNode } from 'react';
import Navbar from './Navbar';

interface Iprops {
    children: ReactNode;
    className: string;
}

function Index({ children, className }: Partial<Iprops>) {
    return (
        <>
            <Navbar active={false} />
            <div className={`${className} mt-14`}>{children}</div>
        </>
    );
}

export default Index;
