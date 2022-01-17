import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import Input from 'components/FormElements/Input';
// import RangeSlider from 'components/rangeSlider';
import useApi from 'hooks/useApi';
import { useRouter } from 'next/router';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import {
    GiVacuumCleaner,
    GiWeightLiftingUp,
    GiLift,
    GiSmokeBomb,
} from 'react-icons/gi';
import {
    RiDoorLockBoxFill,
    RiParkingBoxFill,
    RiComputerFill,
} from 'react-icons/ri';
import { MdFreeCancellation, MdPool, MdOutlineKitchen } from 'react-icons/md';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BsController } from 'react-icons/bs';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Image from 'next/image';
import { getTime } from 'date-fns';
import useReviewScrolling from 'hooks/useReviewScrolling';
import Layout from '../../Layout/index';

export const getStaticPaths = async () => {
    const res = await axios.get(
        'http://localhost:3000/api/v1/hotel/getAllHotels',
    );
    const val = res.data.data;
    console.log(val);
    const paths = val.map((hotel: any) => {
        return {
            params: { id: hotel._id },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await axios.get(
        'http://localhost:3000/api/v1/hotel/getHotelDetails/' + id,
    );

    return {
        props: { hotel: res.data.data },
    };
};

const Hotel = ({ hotel }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfRooms, setNoOfRooms] = useState('0');
    const [noOfDays, setNoOfDays] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const [rooms, setRooms] = useState(0);

    const router = useRouter();
    const payment = () => {
        router.push({
            pathname: '/payment',
            query: {
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfRooms: rooms,
                price: hotel.price,
                noOfDays: noOfDays,
                id: hotel._id,
            },
        });
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };
    useEffect(() => {
        const totalTime = endDate.getTime() - startDate.getTime();
        setNoOfDays(Math.ceil(totalTime / (1000 * 3600 * 24)));
    }, [startDate, endDate]);

    useEffect(() => {
        setRooms(parseInt(noOfRooms));
    }, [noOfRooms]);

    const { reviews, hasMore, loading, error } = useReviewScrolling(
        pageNumber,
        router.query.id,
    );

    const observer = useRef();
    const lastReview = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    return (
        <Layout>
            <div className='flex flex-col'>
                <div className='space-y-3 pt-0 mt-0 md:ml-40 md:pt-12 md:flex md:flex-col md:space-y-7'>
                    <div className='hidden md:block'>
                        <h1 className='text-black-900 font-semibold text-2xl '>
                            {hotel.hotelName}
                        </h1>
                    </div>
                    <div className='hidden  md:flex space-x-4 items-center cursor-pointer'>
                        <h1>
                            <span>
                                <AiFillStar
                                    style={{
                                        color: '#FF385C',
                                        fontSize: '1rem',
                                    }}
                                />
                            </span>
                        </h1>
                        <h1 className='font-sm md:font-semibold'>
                            {' '}
                            5.0(20 reviews)
                        </h1>
                        <div>
                            <h1 className='text-gray-400 underline font-semibold'>
                                {hotel.locations.address}
                            </h1>
                        </div>
                    </div>
                    <div className='w-full h-full block md:grid md:grid-rows-2 md:grid-flow-col md:gap-2 md:w-10/12'>
                        <div className='m-0 p-0 w-full md:row-span-2 hover:grayscale filter-none'>
                            <img
                                alt='logo'
                                className='md:rounded-l-xl  w-full h-full object-cover'
                                src='https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                            ></img>
                        </div>
                        <div className='hidden md:flex md:row-span-1 md:w-full'>
                            <Image
                                src={
                                    'https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                                }
                                className='rounded-l-xl object-cover'
                                alt='No Image'
                                width='300'
                                height='170'
                            ></Image>
                        </div>
                        <div className='hidden md:block md:row-span-1 md:w-full'>
                            <Image
                                src={
                                    'https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                                }
                                className='rounded-l-xl object-cover'
                                alt='No Image'
                                width='300'
                                height='170'
                            ></Image>
                        </div>
                        <div className='hidden md:block md:row-span-1 md:w-full'>
                            <Image
                                src={
                                    'https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                                }
                                className='rounded-l-xl object-cover'
                                alt='No Image'
                                width='300'
                                height='170'
                            ></Image>
                        </div>
                        <div className='hidden md:block md:row-span-1 md:w-full'>
                            <Image
                                src={
                                    'https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                                }
                                className='rounded-l-xl object-cover'
                                alt='No Image'
                                width='300'
                                height='170'
                            ></Image>
                        </div>
                    </div>
                    <div className='ml-6 md:hidden flex flex-col space-y-1'>
                        <div>
                            <h1 className='text-black-900 font-semibold text-2xl '>
                                {hotel.hotelName}
                            </h1>
                        </div>
                        <div className='flex space-x-4 items-center cursor-pointer'>
                            <h1>
                                <span>
                                    <AiFillStar
                                        style={{
                                            color: '#FF385C',
                                            fontSize: '1rem',
                                        }}
                                    />
                                </span>
                            </h1>
                            <h1 className='font-sm md:font-semibold'>
                                {' '}
                                5.0(20 reviews)
                            </h1>
                        </div>
                        <div>
                            <h1 className='text-gray-400 underline font-semibold'>
                                {hotel.locations.address}
                            </h1>
                        </div>
                    </div>
                    <div className='pt-3 ml-6 flex w-11/12 md:w-10/12 justify-between space-x-12'>
                        <div className='flex flex-col space-y-8 w-11/12 divide-y md:w-7/12 md:space-y-12'>
                            <div>
                                <h1 className='text-black-900 font-semibold text-xl '>
                                    Fully Furnished Luxurious Room
                                </h1>
                                <h1 className='text-black-100 text-md font-sans'>
                                    {hotel.bed} bedroom. {hotel.bed} bed.{' '}
                                    {hotel.bathroom} bathroom
                                </h1>
                            </div>
                            <div className='flex flex-col pt-6 md:pt-12 space-y-10'>
                                <div className='flex space-x-8'>
                                    <h1>
                                        <span>
                                            <GiVacuumCleaner
                                                style={{ fontSize: '1rem' }}
                                            />
                                        </span>
                                    </h1>
                                    <div className='flex flex-col space-y-1'>
                                        <h1 className='font-bold text-black-500'>
                                            {' '}
                                            Enhanced Clean
                                        </h1>
                                        <h1 className='text-gray-600'>
                                            This host has committed to Airbnb's
                                            5-step enhanced cleaning process.
                                        </h1>
                                    </div>
                                </div>
                                <div className='flex space-x-8'>
                                    <h1>
                                        <span>
                                            <RiDoorLockBoxFill
                                                style={{ fontSize: '1rem' }}
                                            />
                                        </span>
                                    </h1>
                                    <div className='flex flex-col space-y-1'>
                                        <h1 className='font-bold text-black-500'>
                                            {' '}
                                            Self check-in
                                        </h1>
                                        <h1 className='text-gray-600'>
                                            Check yourself in with the lockbox.
                                        </h1>
                                    </div>
                                </div>
                                <div className='flex space-x-8'>
                                    <h1>
                                        <span>
                                            <MdFreeCancellation
                                                style={{ fontSize: '1rem' }}
                                            />
                                        </span>
                                    </h1>
                                    <div className='flex flex-col space-y-1'>
                                        <h1 className='font-bold text-black-500'>
                                            {' '}
                                            Free cancellation for 48 hours
                                        </h1>
                                        <h1 className='text-gray-600'>
                                            Your whole money will be refunded
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col pt-6 md:pt-12 space-y-4 md:space-y-8'>
                                <h1 className='text-black-900 font-semibold text-xl '>
                                    Hotel Description
                                </h1>
                                <p>{hotel.description}</p>
                            </div>
                            <div className='flex flex-col space-y-8 pt-6 md:pt-12'>
                                <h1 className='text-black-900 font-semibold text-xl '>
                                    Where you'll sleep
                                </h1>
                                <div>
                                    <Image
                                        src={
                                            'https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                                        }
                                        className='rounded-xl object-cover'
                                        alt='No Image'
                                        width='300'
                                        height='200'
                                    ></Image>
                                    <h1 className='font-bold text-black'>
                                        Bedroom area
                                    </h1>
                                    <h1 className='text-black-100 font-sans'>
                                        {hotel.bed} double bed, {hotel.bed}{' '}
                                        sofa, 1 floor mattress
                                    </h1>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-8 pt-6 md:pt-12'>
                                <h1 className='text-black-900 font-semibold text-xl '>
                                    What this place offers
                                </h1>
                                <div className='grid grid-cols-1 grid-flow-row md:grid-rows-5  md:grid-flow-col gap-4'>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <FaUmbrellaBeach />
                                        </h1>
                                        <h1>Beach Access</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <AiOutlineWifi />
                                        </h1>
                                        <h1>Wifi</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <MdPool />
                                        </h1>
                                        <h1>Shared Pool</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <GiWeightLiftingUp />
                                        </h1>
                                        <h1>Gym Facility</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <GiLift />
                                        </h1>
                                        <h1>Lift</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <MdOutlineKitchen />
                                        </h1>
                                        <h1>Kitchen</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <RiParkingBoxFill />
                                        </h1>
                                        <h1>Free on-street parking</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <RiComputerFill />
                                        </h1>
                                        <h1>TV</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <BsController />
                                        </h1>
                                        <h1>Game Sections</h1>
                                    </div>
                                    <div className='flex space-x-6 items-center'>
                                        <h1>
                                            <GiSmokeBomb />
                                        </h1>
                                        <h1>Smoke alarm</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:flex flex-col space-y-8 pt-12'>
                                <div>
                                    <h1 className='text-black-900 font-semibold text-xl '>
                                        Now Its Time To Select The Dates
                                    </h1>
                                </div>
                                <div>
                                    <DateRangePicker
                                        ranges={[selectionRange]}
                                        minDate={new Date()}
                                        rangeColors={['#FD5861']}
                                        onChange={handleSelect}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border border-solid shadow-lg shadow-gray-900 rounded-lg border-inherit hidden md:flex md:flex-col space-y-3 w-5/12 h-3/4'>
                            <div className='flex justify-around  pt-7'>
                                <h1 className='font-bold text-2xl text-black'>
                                    ₹{hotel.price}/night
                                </h1>
                                <div className='flex space-x-4 items-center cursor-pointer'>
                                    <h1>
                                        <span>
                                            <AiFillStar
                                                style={{
                                                    color: '#FF385C',
                                                    fontSize: '1rem',
                                                }}
                                            />
                                        </span>
                                    </h1>
                                    <h1 className='font-semibold'>
                                        {' '}
                                        5.0(20 reviews)
                                    </h1>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-x-1  px-12 py-4'>
                                <div className='col-span-1 flex flex-col space-y-1 items-center  border rounded-lg border-black'>
                                    <h1 className='text-xs font-bold'>
                                        CHECK-IN
                                    </h1>
                                    <h1>{startDate.getDate()}</h1>
                                </div>
                                <div className='col-span-1 flex flex-col space-y-1 items-center  border rounded-lg border-black'>
                                    <h1 className='text-xs font-bold'>
                                        CHECK-OUT
                                    </h1>
                                    <h1>{endDate.getDate()}</h1>
                                </div>
                                <div className='col-span-2 flex flex-col space-y-1 items-center  border rounded-lg border-black'>
                                    <h1 className='text-xs font-bold'>
                                        Number of Rooms
                                    </h1>
                                    <input
                                        className='border-0'
                                        value={noOfRooms}
                                        onChange={(e) => {
                                            setNoOfRooms(e.target.value);
                                        }}
                                    ></input>
                                </div>
                            </div>
                            <div className='px-12 py-4'>
                                <button
                                    className='rounded-lg text-white bg-pink-600 w-full h-10'
                                    onClick={payment}
                                >
                                    Reserve
                                </button>
                            </div>
                            <div className='flex flex-col space-y-4 px-12 py-5'>
                                <div className='flex justify-between'>
                                    <h1 className='underline'>
                                        ₹{hotel.price} x {noOfDays} nights x{' '}
                                        {rooms} rooms
                                    </h1>
                                    <h1>₹{hotel.price * noOfDays * rooms}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='underline'>
                                        Weekly discount
                                    </h1>
                                    <h1 className='text-yellow-600'>
                                        -₹{(hotel.price * noOfDays) / 10}
                                    </h1>
                                </div>
                                <div className='flex justify-between'>
                                    <h1 className='underline'>Service fee</h1>
                                    <h1>₹{hotel.price / 1000}</h1>
                                </div>
                            </div>
                            <div className='border px-12'></div>
                            <div className='flex justify-between px-12 py-5'>
                                <h1 className='font-bold text-2xl text-black'>
                                    Total
                                </h1>
                                <h1 className='font-bold text-black'>
                                    ₹
                                    {Math.round(
                                        hotel.price * noOfDays * rooms +
                                            (hotel.price * noOfDays) / 10 +
                                            hotel.price / 1000,
                                    )}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='ml-6 w-10/12 flex flex-col pt-6 md:pt-12'>
                        <div className='flex space-x-5 items-center'>
                            <h1>
                                <span>
                                    <AiFillStar
                                        style={{
                                            color: '#FF385C',
                                            fontSize: '1rem',
                                        }}
                                    />
                                </span>
                            </h1>
                            <h1 className='font-bold text-2xl'>
                                {' '}
                                5.0(20 reviews)
                            </h1>
                        </div>
                        <div className='hidden md:grid grid-cols-2 grid-flow-row gap-6 py-12'>
                            {/* <RangeSlider name={'Cleanliness'} volume={'4.7'} />
                        <RangeSlider name={'Communication'} volume={'3.6'} />
                        <RangeSlider name={'Check-in'} volume={'2.4'} />
                        <RangeSlider name={'Accuracy'} volume={'1.6'} />
                        <RangeSlider name={'Location'} volume={'4.5'} />
                        <RangeSlider name={'Value'} volume={'3.6'} /> */}
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-12 py-12'>
                            {reviews.map((review, index) => {
                                if (reviews.length === index + 1) {
                                    return (
                                        <div
                                            ref={lastReview}
                                            className='flex flex-col'
                                        >
                                            <div className='flex space-x-2'>
                                                <Image
                                                    alt='profile-pic'
                                                    className='h-8 w-8 rounded-full object-cover'
                                                    width={48}
                                                    height={48}
                                                    src='https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg'
                                                />
                                                <div className='flex flex-col'>
                                                    <h1 className='font-bold'>
                                                        Suraj
                                                    </h1>
                                                    <h1>December 2021</h1>
                                                </div>
                                            </div>
                                            <div className='py-5'>
                                                {review.review}
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className='flex flex-col'>
                                            <div className='flex space-x-2'>
                                                <Image
                                                    alt='profile-pic'
                                                    className='h-8 w-8 rounded-full object-cover'
                                                    width={48}
                                                    height={48}
                                                    src='https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg'
                                                />
                                                <div className='flex flex-col'>
                                                    <h1 className='font-bold'>
                                                        Suraj
                                                    </h1>
                                                    <h1>December 2021</h1>
                                                </div>
                                            </div>
                                            <div className='py-5'>
                                                {review.review}
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                //{' '}
            </div>
        </Layout>
    );
};

export default Hotel;
