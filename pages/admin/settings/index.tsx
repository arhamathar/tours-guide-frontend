import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Wrapper from 'Layout/Wrapper';
import Input from 'components/FormElements/Input';
import Image from 'next/image';

import { BiUserCircle, BiPhoneCall } from 'react-icons/bi';
import { FaRegAddressBook, FaCloudUploadAlt } from 'react-icons/fa';
import { AiOutlineCamera } from 'react-icons/ai';
import FileUpload from 'components/FileUpload';
import useData from 'pages/admin/settings/data';

const Settings = () => {
    const { state, handler } = useData();
    const { attachedFiles } = state;
    const { handleAcceptedFiles } = handler;

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
                    <div className='flex flex-col md:flex-row justify-between my-2'>
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
                    <div className='flex flex-col md:flex-row justify-between my-2'>
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
                    <div className='flex flex-col md:flex-row justify-between my-2'>
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
                    {/* <div className='my-4 rounded-full'> */}
                    <Dropzone
                        onDrop={(acceptedFiles) => {
                            console.log(acceptedFiles);
                            handleAcceptedFiles(acceptedFiles);
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section className='text-center py-4 outline-0 bg-gray-100 bg-opacity-75 border border-gray-300 border-dashed cursor-pointer'>
                                <div
                                    className='dz-message needsclick'
                                    {...getRootProps()}
                                >
                                    <input
                                        disabled={attachedFiles.length > 0}
                                        {...getInputProps()}
                                        accept='.jpg,.png,.jpeg'
                                        multiple={false}
                                    />
                                    <div className='dz-message needsclick'>
                                        <div className='mb-2 flex justify-center'>
                                            <FaCloudUploadAlt
                                                size={48}
                                                className='text-gray-600 mr-2'
                                            />
                                            <AiOutlineCamera
                                                size={48}
                                                className='text-gray-600'
                                            />
                                        </div>
                                        <h4 className='text-gray-600 text-lg'>
                                            {console.log(attachedFiles.length)}
                                            {attachedFiles.length > 0
                                                ? 'One file allowed'
                                                : 'Drop files here or click to upload profile pic'}
                                        </h4>
                                    </div>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    {/* </div> */}
                </div>
            </div>
        </Wrapper>
    );
};

export default Settings;
