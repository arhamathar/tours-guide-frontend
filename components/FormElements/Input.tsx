import React from 'react';

interface IProps {
    label: string;
    name: string;
    value: string | number;
    type?: string;
    placeholder?: string;
    required?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<IProps> = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    type = 'text',
    required = false,
}) => {
    return (
        <div className='flex flex-col py-2'>
            <label className='font-medium text-gray-600 text-opacity-75'>
                {label}
            </label>
            <input
                className='border-2 w-full placeholder-gray-500 border-gray-200 py-2 px-4 rounded-md focus:outline-none focus:border-purple-700'
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                required={required}
            />
        </div>
    );
};

export default Input;
