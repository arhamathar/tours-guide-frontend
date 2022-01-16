import React from 'react';
import Wrapper from 'Layout/Wrapper';
import Input from 'components/FormElements/Input';
import Image from 'next/image';
import { BiUserCircle, BiPhoneCall } from 'react-icons/bi';
import { FaRegAddressBook } from 'react-icons/fa';

const Settings = () => {
    return (
        <Wrapper>
            <h3 className='text-gray-500 font-bold text-2xl'>Profile Update</h3>
            <div className='mx-auto w-full md:w-10/12 xl:w-8/12'>
                <div className='text-center'>
                    <Image
                        src={`https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg`}
                        alt='profilePic'
                        height={150}
                        width={150}
                        className='rounded-full mx-auto'
                        objectFit='cover'
                    />
                </div>
                <div>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <Input
                            label='First Name'
                            placeholder='John'
                            name='fName'
                            inputType='primary'
                            type='string'
                            icon={
                                <BiUserCircle
                                    size={28}
                                    className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                                />
                            }
                        />
                        <Input
                            label='Last Name'
                            placeholder='Doe'
                            name='lName'
                            inputType='primary'
                            type='string'
                            icon={
                                <BiUserCircle
                                    size={28}
                                    className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                                />
                            }
                        />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <Input
                            label='Mobile'
                            placeholder='0987654321'
                            name='number'
                            inputType='primary'
                            type='number'
                            icon={
                                <BiPhoneCall
                                    size={28}
                                    className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                                />
                            }
                        />
                        <Input
                            label='Pin Code'
                            placeholder='123456'
                            name='pinCode'
                            inputType='primary'
                            icon={
                                <FaRegAddressBook
                                    size={28}
                                    className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                                />
                            }
                        />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <Input
                            label='Street'
                            placeholder='Okhla'
                            name='street'
                            inputType='primary'
                            icon={
                                <FaRegAddressBook
                                    size={28}
                                    className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                                />
                            }
                        />
                        <Input
                            label='City'
                            placeholder='Delhi'
                            name='city'
                            inputType='primary'
                            icon={
                                <FaRegAddressBook
                                    size={28}
                                    className='text-gray-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2'
                                />
                            }
                        />
                    </div>
                    <div>
                        <input type='file' />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Settings;
