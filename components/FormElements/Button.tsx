import React from 'react';

const primary =
    'bg-purple-700 text-white hover:bg-purple-600  hover:border-purple-600 border-2 border-transparent';
const secondary =
    'border-2 border-purple-700 bg-transparent text-purple-700 hover:bg-purple-700 hover:text-white';

interface IProps {
    isLoading?: boolean;
    color?: 'primary' | 'secondary';
    customClass?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({
    color,
    customClass,
    onClick,
    children,
    isLoading = false,
}) => {
    const customColor =
        color === 'primary' ? primary : color === 'secondary' ? secondary : '';
    // const buttonClasses = classNames('base-button', className); // classsNames npm package to join class
    return (
        <button
            className={`${customColor} font-bold py-2 px-4 tracking-wider transition duration-500 ease-in-out text-center ${customClass}`}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading && (
                <div className='animate-spin rounded-full h-6 w-6 m-auto text-center border-t-2 border-b-2  border-white'></div>
            )}
            {!isLoading && children}
        </button>
    );
};

export default Button;
