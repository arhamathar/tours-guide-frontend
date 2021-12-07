import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useApi from 'hooks/useApi';
import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';
import Button from 'components/FormElements/Button';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState<string>('');

    const { loading, sendRequest } = useApi({
        url: `/auth/forgotPassword`,
        method: 'POST',
        defaultResponse: { email },
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = async () => {
        try {
            const response = await sendRequest();
            if (response) {
                router.push('/auth/login');
            }
        } catch (e) {}
    };

    return (
        <Card>
            <div className='uppercase font-bold text-xl md:text-3xl  text-center text-purple-800 tracking-wider mb-3'>
                forgot password
            </div>
            <Input
                name='email'
                label='Please enter your email address to reset your password.'
                value={email}
                type='email'
                onChange={onChangeHandler}
            />
            <div className='block md:flex justify-between items-center my-4'>
                <Button
                    color='primary'
                    customClass='uppercase w-full md:w-max'
                    onClick={onSubmitHandler}
                    isLoading={loading}
                >
                    send link
                </Button>
                <p className='text-center font-medium text-gray-600 text-opacity-75 my-3'>
                    OR
                </p>
                <Button
                    color='secondary'
                    customClass='uppercase w-full md:w-max'
                >
                    <Link href='/auth/register'> Create New</Link>
                </Button>
            </div>
        </Card>
    );
};

export default Login;
