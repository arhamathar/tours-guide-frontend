import { ReactNode } from 'react';

interface Iprops {
    children: ReactNode;
    className: string;
}
const LayoutBody = ({ children, className, ...props }: Iprops) => {
    return (
        <div {...props} className={`${className} px-60 py-32`}>
            {children}
        </div>
    );
};
export default LayoutBody;
