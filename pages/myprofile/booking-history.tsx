import Layout from '../../Layout/index';
import LayoutBody from 'components/LayoutBody';
import Input from 'components/FormElements/Input';
import Autocomplete from 'react-google-autocomplete';
import { useEffect, useState } from 'react';
import Button from 'components/FormElements/Button';
import { AppState } from 'Redux/reducers/rootReducer';

import { useSelector } from 'react-redux';
import { getAllPastBookings } from 'utils/api';
import Cookies from 'js-cookie';

export default function index({ pastBookings, res }) {
    const [name, setName] = useState<string>('Ashutosh Singh');

    const [allPastBookings, setAllPastBookings] = useState<any>(pastBookings.data);
    return (
        <Layout>
            <LayoutBody className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold'>Booking History</h4>
                <div className='space-y-4'>
                    {allPastBookings.length == 0 && <h1 className='text-xl text-gray-400 font-semibold'>No Past Bookings</h1>}
                    {allPastBookings &&
                        allPastBookings.map((booking: any) => (
                            <div
                                className='grid grid-cols-2 gap-6 shadow-lg p-4'
                                key={booking._id}
                            >
                                <h4 className='text-2xl font-semibold text-gray-900'>
                                    Satna Bharhut Hotel
                                </h4>
                                <h4 className='text-lg font-bold flex flex-row-reverse'>
                                    ₹ 3,390 / night
                                </h4>
                                <div className='flex gap-8'>
                                    <div>
                                        <h4 className='text-sm font-light'>
                                            Check In
                                        </h4>
                                        <p className='font-light '>
                                            24 Oct 2021
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-light'>
                                            Check Out
                                        </h4>
                                        <p className='font-light '>
                                            26 Oct 2021
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <button className='p-1.5 bg-green-400 text-white font-semibold rounded'>
                                        Upcoming
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </LayoutBody>
        </Layout>
    );
}

export async function getServerSideProps(ctx: any) {
    console.clear();
    console.log('ctx: ', ctx.req.cookies.token);

    // console.log('inside static prps');
    const pastBookings = await getAllPastBookings(ctx.req.cookies.token);

    console.log('pastBookings: ', pastBookings);
    const res = 'sfsdf';
    return {
        props: {
            pastBookings,
            res,
        },
    };
}
