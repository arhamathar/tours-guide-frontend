import { ReactNode } from 'react';
import Layout from '../../Layout/index';
import LayoutBody from 'components/LayoutBody';

import { AiOutlineIdcard as PersonalInfo } from 'react-icons/ai';
import Card from '../../components/Cards/ProfileCard';

export default function index() {
    return (
        <Layout>
            <LayoutBody className='space-y-10'>
                <div>
                    <h4 className='text-4xl font-semibold'>Profile</h4>
                    <p className='text-lg'>Welcome, Ashutosh Singh</p>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <Card
                        Icon={PersonalInfo}
                        title='Personal Info'
                        body='Provide Personal Details and how we reach you'
                        href='personal-info'
                    />
                    <Card
                        Icon={PersonalInfo}
                        title='Change Password'
                        body='Provide Personal Details and how we reach you'
                        href='change-password'
                    />
                    <Card
                        Icon={PersonalInfo}
                        title='Booking History'
                        body='Provide Personal Details and how we reach you'
                        href='booking-history'
                    />
                    <Card
                        Icon={PersonalInfo}
                        title='Notifications'
                        body='Provide Personal Details and how we reach you'
                    />
                    <Card
                        Icon={PersonalInfo}
                        title='Your Transactions'
                        body='Provide Personal Details and how we reach you'
                    />
                    <Card
                        Icon={PersonalInfo}
                        title='Many More'
                        body='Provide Personal Details and how we reach you'
                    />
                </div>
            </LayoutBody>
        </Layout>
    );
}
