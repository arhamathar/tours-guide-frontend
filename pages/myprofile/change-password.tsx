import Layout from '../../Layout/index';
import LayoutBody from 'components/LayoutBody';
import Input from 'components/FormElements/Input';
import Autocomplete from 'react-google-autocomplete';
import { useState } from 'react';
import Button from 'components/FormElements/Button';
import { updatePassword } from 'utils/api';

export default function index() {
    const [currentPassword, setCurrentPassword] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [newConfirmPassword, setNewConfirmPassword] = useState<string>();

    const onSubmit = async () => {
        if (newPassword != newConfirmPassword) {
            return;
        }
        console.log("called")
        const data = {
            currentPassword: currentPassword,
            newPassword: newPassword,
            newConfirmPassword: newConfirmPassword,
        };
        const res = await updatePassword(data);
    };

    return (
        <Layout>
            <LayoutBody className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold'>Password Change</h4>
                <div className='grid grid-cols-2 gap-2'>
                    <Input
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        label='Old Password'
                        name='Old Password'
                        type='password'
                        placeholder='Enter Your First Name'
                    ></Input>
                    <Input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        label='New Password'
                        name='New Password'
                        type='password'
                        placeholder='Enter Your Last Name'
                    ></Input>
                    <Input
                        value={newConfirmPassword}
                        onChange={(e) => setNewConfirmPassword(e.target.value)}
                        label='Confirm Password'
                        type='password'
                        name='Confirm Password'
                        placeholder='Enter Your Last Name'
                    ></Input>
                </div>
                <button
                    onClick={onSubmit}
                    className='p-2 bg-pink-500 text-white rounded-lg'
                >
                    Submit
                </button>
            </LayoutBody>
        </Layout>
    );
}
