import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useApi from 'hooks/useApi';
import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';
import Button from 'components/FormElements/Button';

const Register = () => {
    const router = useRouter();

    const [signupUser, setSignupUser] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
        role: 'Traveller',
    });

    const { loading, sendRequest } = useApi({
        url: `/auth/signup`,
        method: 'POST',
        defaultResponse: signupUser,
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

    const onSubmitHandler = async () => {
        try {
            const response = await sendRequest();
            if (response && response.user.role === 'Traveller') {
                router.push('/');
            } else if (response) {
                router.push('/admin');
            }
        } catch (e) {}
    };

    return (
        <Card>
            <div className='uppercase font-bold text-3xl text-center text-purple-800 tracking-wider mb-3'>
                sign up
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <Input
                    label='First Name'
                    placeholder='John'
                    value={signupUser.firstName}
                    onChange={onChangeHandler}
                    name='firstName'
                />
                <Input
                    label='Last Name'
                    placeholder='Doe'
                    value={signupUser.lastName}
                    onChange={onChangeHandler}
                    name='lastName'
                />
            </div>
            <Input
                name='email'
                label='Email'
                value={signupUser.email}
                type='email'
                onChange={onChangeHandler}
            />
            <Input
                name='mobile'
                label='Mobile'
                value={signupUser.mobile}
                type='number'
                onChange={onChangeHandler}
            />
            <Input
                name='password'
                label='Password'
                value={signupUser.password}
                onChange={onChangeHandler}
                type='password'
            />
            <label className='font-medium text-gray-600 text-opacity-75'>
                User Type
            </label>
            <select
                name='role'
                value={signupUser.role}
                onChange={onChangeHandler}
                className='w-full border-2 border-gray-200 py-1 px-2 rounded-md focus:outline-none focus:border-purple-700'
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
                    signup
                </Button>
                <p className='font-medium text-center text-gray-600 text-opacity-75'>
                    OR
                </p>
                <Button
                    color='secondary'
                    customClass='uppercase w-full md:w-max'
                >
                    <Link href='/auth/login'>login</Link>
                </Button>
            </div>
        </Card>
    );
};

export default Register;
