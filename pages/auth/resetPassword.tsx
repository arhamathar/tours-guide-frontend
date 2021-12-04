import React from 'react';
import Link from 'next/link';

import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';

const Login = () => {
    const [newPassword, setNewPassword] = React.useState<{
        password: string;
        confirmPassword: string;
    }>({
        password: '',
        confirmPassword: '',
    });

    const onChangeHandler = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setNewPassword((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Card>
            <div className='uppercase font-bold text-3xl text-center text-purple-800 tracking-wider mb-3'>
                reset password
            </div>
            <Input
                name='password'
                label='Please enter your email your new password.'
                value={newPassword.password}
                type='password'
                onChange={onChangeHandler}
            />
            <Input
                name='confirmPassword'
                label='Please confirm your new password.'
                value={newPassword.confirmPassword}
                type='password'
                onChange={onChangeHandler}
            />
            <div className='block md:flex justify-between items-center my-4'>
                <button className='w-full md:w-max bg-purple-800 text-white py-2 px-4 rounded-sm font-semibold transition duration-500 ease-in-out uppercase tracking-wide hover:shadow-lg'>
                    Reset Password
                </button>
                <p className='text-center font-medium text-gray-600 text-opacity-75 my-3'>
                    OR
                </p>
                <button className='w-full md:w-max bg-transparent border-2 border-purple-800 text-purple-800 py-2 px-4 rounded-sm font-semibold transition duration-500 ease-in-out uppercase tracking-wide'>
                    <Link href='/auth/register'>Resend Link</Link>
                </button>
            </div>
        </Card>
    );
};

export default Login;
