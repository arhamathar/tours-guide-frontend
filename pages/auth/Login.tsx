import React from 'react';
import Link from 'next/link';

import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';

const Login = () => {
    const [loginUser, setLoginUser] = React.useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        mobile: '',
        role: 'USER',
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Card>
            <div className='uppercase font-bold text-3xl text-center text-purple-800 tracking-wider mb-3'>
                LOGIN
            </div>
            <Input
                name='email'
                label='Email'
                value=''
                type='email'
                onChange={onChangeHandler}
            />
            <Input
                name='password'
                label='Password'
                value=''
                onChange={onChangeHandler}
                type='password'
            />
            <label className='font-medium text-gray-600 text-opacity-75'>
                User Type
            </label>
            <select
                name='role'
                value={loginUser.role}
                className='w-full border-2 border-gray-200 py-2 px-2 rounded-md focus:outline-none focus:border-purple-700'
            >
                <option>User</option>
                <option>Guide</option>
                <option>Admin</option>
                <option>Manager</option>
            </select>
            <div className='flex justify-between items-center my-4'>
                <button className='bg-purple-800 text-white py-2 px-4 rounded-sm font-semibold transition duration-500 ease-in-out uppercase tracking-wide hover:shadow-lg'>
                    login
                </button>
                <button className='bg-transparent border-2 border-purple-800 text-purple-800 py-2 px-4 rounded-sm font-semibold transition duration-500 ease-in-out uppercase tracking-wide'>
                    <Link href='/auth/signup'> signup</Link>
                </button>
            </div>
        </Card>
    );
};

export default Login;
