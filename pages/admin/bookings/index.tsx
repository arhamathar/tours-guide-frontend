import React, { useState } from 'react';
import useApi from 'hooks/useApi';
import Wrapper from 'Layout/Wrapper';

const Bookings: React.FC = () => {
    const [bookings, setBookings] = useState<[]>([]);

    const {} = useApi({
        url: `/auth/login`,
        method: 'GET',
    });

    return (
        <Wrapper>
            <h3 className='text-gray-500 font-bold text-2xl'>All Bookings</h3>
            <div className='flex flex-col shadow-lg p-4'>
                <div className='flex justify-between mb-4'>
                    <h4 className='text-2xl font-semibold text-gray-700'>
                        Satna Bharhut Hotel
                    </h4>
                    <h4 className='text-lg font-bold flex flex-row-reverse'>
                        ₹ 3,390 / night
                    </h4>
                </div>
                <div className='flex justify-between gap-6'>
                    <div>
                        <h4 className='font-medium text-gray-600 text-opacity-75 mb-1'>
                            Traveller
                        </h4>
                        <p className='font-medium text-gray-600 '>
                            Yash Mittal
                        </p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <div>
                            <h4 className='font-medium text-gray-600 text-opacity-75 mb-1'>
                                Check In
                            </h4>
                            <p className='font-medium text-gray-600 '>
                                24 Oct 2021
                            </p>
                        </div>
                        <div>
                            <h4 className='font-medium text-gray-600 text-opacity-75 mb-1'>
                                Check Out
                            </h4>
                            <p className='font-medium text-gray-600 '>
                                26 Oct 2021
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Bookings;
