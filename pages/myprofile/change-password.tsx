import Layout from '../../Layout/index';
import LayoutBody from 'components/LayoutBody';
import Input from 'components/FormElements/Input';
import Autocomplete from 'react-google-autocomplete';
import { useState } from 'react';
import Button from 'components/FormElements/Button';

export default function index() {
    const [name, setName] = useState<string>('Ashutosh Singh');
    return (
        <Layout>
            <LayoutBody className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold'>Password Change</h4>
                <div className='grid grid-cols-2 gap-2'>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='Old Password'
                        name='Old Password'
                        type='password'
                        placeholder='Enter Your First Name'
                    ></Input>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='New Password'
                        name='New Password'
                        type='password'
                        placeholder='Enter Your Last Name'
                    ></Input>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='Confirm Password'
                        type='password'
                        name='Confirm Password'
                        placeholder='Enter Your Last Name'
                    ></Input>
                </div>
                <button className='p-2 bg-pink-500 text-white rounded-lg'>
                    Submit
                </button>
            </LayoutBody>
        </Layout>
    );
}
