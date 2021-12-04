import React from 'react';

const primary =
    'bg-purple-700 text-white hover:bg-transparent hover:text-purple-700 hover:border-purple-700 border-2 border-transparent';
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
            className={`${customColor} font-bold py-2 px-4 tracking-wider transition duration-500 ease-in-out ${customClass}`}
            onClick={onClick}
            disabled={isLoading}
        >
            {children}
        </button>
    );
};

export default Button;
