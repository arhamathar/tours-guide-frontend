import React from 'react';
import Link from 'next/link';

import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';

const Login = () => {
    const [signupUser, setSignupUser] = React.useState({
        email: '',
    });

    const onChangeHandler = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setSignupUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Card>
            <div className='uppercase font-bold text-3xl text-center text-purple-800 tracking-wider mb-3'>
                sign up
            </div>
            <Input
                name='email'
                label='Please enter your email address to reset your password.'
                value={signupUser.email}
                type='email'
                onChange={onChangeHandler}
            />
            <div className='block md:flex justify-between items-center my-4'>
                <button className='w-full md:w-max bg-purple-800 text-white py-2 px-4 rounded-sm font-semibold transition duration-500 ease-in-out uppercase tracking-wide hover:shadow-lg'>
                    Send Link
                </button>
                <p className='text-center font-medium text-gray-600 text-opacity-75 my-3'>
                    OR
                </p>
                <button className='w-full md:w-max bg-transparent border-2 border-purple-800 text-purple-800 py-2 px-4 rounded-sm font-semibold transition duration-500 ease-in-out uppercase tracking-wide'>
                    <Link href='/auth/register'>Create New</Link>
                </button>
            </div>
        </Card>
    );
};

export default Login;
