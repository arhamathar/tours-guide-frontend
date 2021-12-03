import React from 'react';

interface IProps {
    children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ children }) => {
    return (
        <div className='rounded-md bg-white px-3 py-3 shadow-lg md:w-2/5 w-3/5 my-4 mx-auto'>
            {children}
        </div>
    );
};

export default Card;
