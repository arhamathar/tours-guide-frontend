import React from 'react';

interface IProps {
    children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ children }) => {
    return (
        <div className='rounded-md bg-white px-3 py-3 shadow-lg w-3/5 min-w-full xs:min-w-min max-w-xl my-4 mx-auto'>
            {children}
        </div>
    );
};

export default Card;
