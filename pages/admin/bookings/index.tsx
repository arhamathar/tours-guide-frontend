import React, { useState, useEffect } from 'react';
import useApi from 'hooks/useApi';
import Wrapper from 'Layout/Wrapper';
import adminRoutes from 'components/admin/adminRoutes';
import AdminNavbar from 'components/admin/AdminNavbar';

const Bookings: React.FC = () => {
    const [bookings, setBookings] = useState<[]>([]);
    const [filter, setFilter] = useState<string>('ALL');
    const [url, setUrl] = useState<string>('/hotel/getAllBooking');

    const bookingsRoutes = adminRoutes.filter(
        (route) => route.label === 'Bookings',
    );

    const { sendRequest } = useApi({
        url,
        method: 'GET',
    });

    useEffect(() => {
        if (filter === 'ALL') setUrl('/hotel/getAllBooking');
        else if (filter === 'PAST') setUrl('/hotel/getPastBooking');
        else if (filter === 'FUTURE') setUrl('hotel/getFutureBooking');
        else setUrl('/hotel/getAllBooking');
    }, [filter]);

    const getBookings = async () => {
        try {
            const data = await sendRequest();

            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getBookings();
    }, [url, filter]);

    const filterOption = ['All', 'Past', 'Future'];

    return (
        <Wrapper>
            <div className='bg-white z-10 sticky top-0 right-0 left-0 p-1 flex items-center justify-start border-b border-gray-200 overflow-x-auto overflow-y-auto scrollbar-hide'>
                {filterOption.map((option) => {
                    const isActive = option === filter ? true : false;
                    return (
                        <button
                            key={option}
                            name={option}
                            className={`block ${
                                isActive
                                    ? 'bg-pink-400 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }  min-w-max mr-2 py-2 mb-1 px-5 rounded-full text-sm font-normal`}
                            onClick={(e) => setFilter(option)}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            {/* <h3 className='text-gray-500 font-bold text-2xl my-2'>
                All Bookings
            </h3> */}
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
