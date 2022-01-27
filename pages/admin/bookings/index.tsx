import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Wrapper from 'Layout/Wrapper';
import { AppState } from 'Redux/reducers/rootReducer';
import adminRoutes from 'components/admin/adminRoutes';

export interface IBookings {
    id: string;
    startingDate: string | Date;
    endingDate: string | Date;
    userFName: string;
    userLName: string;
    hotelName: string;
    price: number;
}

const Bookings: React.FC = () => {
    const [bookings, setBookings] = useState<IBookings[] | null>(null);
    const [filter, setFilter] = useState<string>('ALL');
    const [url, setUrl] = useState<string>('/hotel/getAllBooking');

    const bookingsRoutes = adminRoutes.filter(
        (route) => route.label === 'Bookings',
    );

    const { user } = useSelector((state: AppState) => state?.user);
    console.log({ user });

    useEffect(() => {
        if (filter === 'All') {
            setUrl('/hotel/getUserBookingList');
        } else if (filter === 'Past') {
            setUrl(`/hotel/getUserBookingList?past=${true}`);
        } else if (filter === 'Future') {
            setUrl(`/hotel/getUserBookingList?future=${true}`);
        } else {
            setUrl('/hotel/getUserBookingList');
        }
    }, [filter]);

    const getBookings = React.useCallback(async () => {
        try {
            const { data } = await axios.get(
                process.env.NEXT_PUBLIC_BACKEND_URL_DEV + url,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + user.token,
                    },
                },
            );

            setBookings(data);
            console.log(data);
        } catch (e: any) {
            console.log(e);
            console.log(e.response?.data.message);
        }
    }, [url, user.token]);

    useEffect(() => {
        getBookings();
    }, [url, filter, getBookings]);

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
            {bookings &&
                bookings.length > 0 &&
                bookings.map(
                    ({
                        id,
                        hotelName,
                        userFName,
                        userLName,
                        price,
                        startingDate,
                        endingDate,
                    }) => (
                        <div className='flex flex-col shadow-lg p-4' key={id}>
                            <div className='flex justify-between mb-4'>
                                <h4 className='text-2xl font-semibold text-gray-700'>
                                    {hotelName}
                                </h4>
                                <h4 className='text-lg font-bold flex flex-row-reverse'>
                                    ₹ {price} / night
                                </h4>
                            </div>
                            <div className='flex justify-between gap-6'>
                                <div>
                                    <h4 className='font-medium text-gray-600 text-opacity-75 mb-1'>
                                        Traveller
                                    </h4>
                                    <p className='font-medium text-gray-600 '>
                                        {userFName + ' ' + userLName}
                                    </p>
                                </div>
                                <div className='flex justify-between gap-6'>
                                    <div>
                                        <h4 className='font-medium text-gray-600 text-opacity-75 mb-1'>
                                            Check In
                                        </h4>
                                        <p className='font-medium text-gray-600 '>
                                            {new Date(
                                                startingDate,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className='font-medium text-gray-600 text-opacity-75 mb-1'>
                                            Check Out
                                        </h4>
                                        <p className='font-medium text-gray-600 '>
                                            {new Date(
                                                endingDate,
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),
                )}
        </Wrapper>
    );
};

export default Bookings;
