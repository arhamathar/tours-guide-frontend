import React from 'react';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';

interface IProps {
    label: string;
    name: string;
    value: string | number | any;
    type?: string;
    placeholder?: string;
    required?: boolean;
    icon?: React.ReactNode;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onFocus: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onBlur: React.ChangeEventHandler<HTMLInputElement> | undefined;
    inputType: string;
    className: string;
}

const Input: React.FC<Partial<IProps>> = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    onFocus,
    onBlur,
    type = 'text',
    required = false,
    inputType,
    className = '',
}) => {
    switch (inputType) {
        case 'primary': {
            return (
                <div className={className}>
                    {label && <label>{label}</label>}
                    <div className='relative w-full'>
                        <SearchIcon
                            size={28}
                            className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                        />
                        <input
                            className='text-lg border-2 w-full border-gray-400 pl-12 pr-4 py-3 rounded font-semibold text-gray-700 outline-none hover:shadow-md focus:border focus:border-pink-400'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                        ></input>
                    </div>
                </div>
            );
        }
        default: {
            return (
                <div className='flex flex-col py-1'>
                    <label className='font-medium text-gray-600 text-opacity-75 mb-1'>
                        {label}
                    </label>
                    <input
                        className='border-2 w-full placeholder-gray-500 border-gray-200 py-1 px-4 rounded-md focus:outline-none focus:border-purple-700'
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        name={name}
                        required={required}
                    />
                </div>
            );
        }
    }
};

export default Input;
