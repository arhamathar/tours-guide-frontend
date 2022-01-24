import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';
import Button from 'components/FormElements/Button';
import useApi from 'hooks/useApi';

const Login = () => {
    const router = useRouter();

    const [loginUser, setLoginUser] = React.useState({
        email: '',
        password: '',
        role: 'Traveller',
    });

    const { loading, sendRequest } = useApi({
        url: `/auth/login`,
        method: 'POST',
        defaultResponse: loginUser,
    });

    const onChangeHandler = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setLoginUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async () => {
        try {
            const response = await sendRequest();
            if (response && response.user.role === 'Traveller') {
                router.push('/');
            } else {
                router.push('/admin');
            }
            console.log(response);
        } catch (e) {}
    };

    return (
        <Card>
            <div className='uppercase font-bold text-3xl text-center text-purple-800 tracking-wider mb-3'>
                LOGIN
            </div>
            <Input
                name='email'
                label='Email'
                value={loginUser.email}
                type='email'
                onChange={onChangeHandler}
            />
            <Input
                name='password'
                label='Password'
                value={loginUser.password}
                onChange={onChangeHandler}
                type='password'
            />
            <label className='font-medium text-gray-600 text-opacity-75 mb-1'>
                User Type
            </label>
            <select
                name='role'
                value={loginUser.role}
                onChange={onChangeHandler}
                className='w-full border-2 border-gray-200 py-2 px-2 rounded-md focus:outline-none focus:border-purple-700'
            >
                <option>Traveller</option>
                <option>Guide</option>
                <option>Admin</option>
                <option>Manager</option>
            </select>
            <div className='block md:flex justify-between items-center my-4'>
                <Button
                    color='primary'
                    customClass='uppercase w-full md:w-max'
                    onClick={onSubmitHandler}
                    isLoading={loading}
                >
                    login
                </Button>
                <p className='font-medium text-center my-3 text-gray-600 text-opacity-75'>
                    OR
                </p>
                <Button
                    color='secondary'
                    customClass='uppercase w-full md:w-max'
                >
                    <Link href='/auth/register'> signup</Link>
                </Button>
            </div>
            <Link href='/auth/forgetPassword' passHref={true}>
                <p className='font-medium text-gray-600 text-opacity-75 cursor-pointer'>
                    Forgot Password ?
                </p>
            </Link>
        </Card>
    );
};

export default Login;
