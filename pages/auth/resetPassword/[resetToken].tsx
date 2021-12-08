import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useApi from 'hooks/useApi';
import Card from 'components/Cards/Card';
import Input from 'components/FormElements/Input';
import Button from 'components/FormElements/Button';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const router = useRouter();
    console.log(router);
    const [newPassword, setNewPassword] = React.useState<{
        password: string;
        confirmPassword: string;
    }>({
        password: '',
        confirmPassword: '',
    });

    const { loading, sendRequest } = useApi({
        url: `/auth/resetPassword/${router.query.resetToken}`,
        method: 'PATCH',
        defaultResponse: newPassword,
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async () => {
        try {
            if (newPassword.password !== newPassword.confirmPassword) {
                toast.warn('Passwords does not match');
                return;
            }
            const response = await sendRequest();
            if (response) {
                router.push('/');
            }
        } catch (e) {}
    };

    return (
        <Card>
            <div className='uppercase font-bold text-3xl text-center text-purple-800 tracking-wider mb-3'>
                reset password
            </div>
            <Input
                name='password'
                label='Please enter your new password.'
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
                    <Link href='/auth/forgetPassword'>Resend Link</Link>
                </Button>
            </div>
        </Card>
    );
};

export default ResetPassword;
