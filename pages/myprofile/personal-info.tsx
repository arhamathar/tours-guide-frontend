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
                <h4 className='text-4xl font-semibold'>My Personal Info</h4>
                <div className='grid grid-cols-2 gap-2'>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='First Name'
                        name='First Name'
                        type='text'
                        placeholder='Enter Your First Name'
                    ></Input>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='Last Name'
                        name='First Name'
                        type='text'
                        placeholder='Enter Your Last Name'
                    ></Input>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='Gender'
                        name='Dropdown'
                        inputType='dropdown'
                        placeholder='Enter Your Last Name'
                    ></Input>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='Address'
                        name='Dropdown'
                        inputType='text'
                        placeholder='Enter Your Last Name'
                    ></Input>
                    <div>
                        <label className='font-medium text-gray-600 text-opacity-75 mb-1'>
                            Address
                        </label>
                        <Autocomplete
                            apiKey='AIzaSyCryqdJrYXn4RAZ6LU_kC-uYB2Tn2K00_M'
                            className='border-2 w-full placeholder-gray-500 border-gray-200 py-1 px-4 rounded-md focus:outline-none focus:border-purple-700'
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                        />
                    </div>
                </div>
                <button className='p-2 bg-pink-500 text-white rounded-lg'>
                    Submit
                </button>
            </LayoutBody>
        </Layout>
    );
}
