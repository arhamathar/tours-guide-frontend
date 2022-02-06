//@ts-nocheck
import type { NextPage } from 'next';
import { FC, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from 'components/FormElements/Input';
import NavButton from 'components/swiper/NavButton';
import SwiperSection from 'components/swiper/SwiperSection';
import Navbar from 'Layout/Navbar';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Modal from 'Layout/modal';
import {format} from 'date-fns';

const Home: NextPage = () => {
    const prevRef = useRef<HTMLSpanElement>();
    const nextRef = useRef<HTMLSpanElement>();

    const [calenderFocus, setCalenderFocus] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const resetInput = () => {
        setCalenderFocus(false);
    };
    const SearchTours = () => {
        return (
            <div className='flex flex-col py-30'>
                <div
                    style={{ top: '45%' }}
                    className='px-40 space-y-2 absolute'
                >
                    <h1 className='text-5xl filter drop-shadow font-extrabold'>
                        Avoid the Crowds
                    </h1>
                    <h2 className='text-2xl filter drop-shadow font-bold'>
                        Book private tours & activities with locals worldwide
                    </h2>
                    <div className='min-h-20 bg-white rounded-2xl p-10 grid grid-cols-5 gap-4'>
                        
                        <div className='border-2 col-span-2 py-3 border-gray-400 rounded-lg flex space-x-4 px-2 items-center'>
                            <SearchIcon className='text-3xl text-gray-400 ' />
                            <input
                                type='text'
                                placeholder='Where are you Going?'
                                className=' text-lg bg-transparent outline-none text-gray-400'
                            />
                        </div>

                        
                        <div onClick={() => setCalenderFocus(true)} className='border-2 border-gray-400 rounded-lg grid grid-cols-2 justify-between px-2 items-center'>
                            <FaCalendarAlt className='text-xl text-gray-400 flex-grow' />
                            <input
                                disabled
                                
                                value={`${format(new Date(startDate.toISOString()), "dd MMMM yy")} - ${format(new Date(endDate.toISOString()), "dd MMMM yy")}`}
                                // onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                placeholder='Date Dropdown'
                                className='-ml-12 text-lg bg-transparent outline-none text-gray-400'
                            />
                        </div>
                        <div className='border-2 border-gray-400 rounded-lg grid grid-cols-2 justify-between px-2 items-center'>
                            <FaUser className='text-xl text-gray-400 flex-grow' />
                            <input
                                type='text'
                                placeholder='Peoples'
                                className='-ml-12 text-lg bg-transparent outline-none text-gray-400'
                            />
                        </div>

                        <button className='inline-block p-2 hover:scale-105 transform transition duration-150 ease-out rounded-full text-white font-bold bg-pink-600'>
                            Search
                        </button>
                    </div>
                </div>
                {/* <div style={{ top: '85%', left: '24%' }} className='px-20 space-y-4 absolute z-40 mx-auto'>
                   {openCalender && (
                       <div>
                           <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5861"]}
                            onChange = {handleSelect}
                           />
                       </div>
                   )}
            </div> */}
            </div>
        );
    };

    const DestinationCard = () => {
        return (
            <div className='w-full -z-1 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer'>
                <img
                    className='w-full h-48 object-cover rounded-t-2xl'
                    src='/images/sample1.jpg'
                ></img>
                <div className='space-y-4 px-4 py-4'>
                    <h2 className='font-bold text-lg text-gray-700'>
                        The Netherlands
                    </h2>
                    <p className='text-xs'>
                        <span className='font-bold'>COVID 19 STATUS : </span>
                        <span>
                            Open for traveller from EU and Schengen countries
                        </span>
                    </p>
                    <p className='text-sm text-gray-500'>
                        Welcoming you with the friendly smile and good sprit !
                        The locals of the Netherlands are eager to show yout he
                        best their countries had to offer.
                    </p>
                    <h4 className='text-pink-600 font-bold'>
                        View all things to do in Netherlands
                    </h4>
                </div>
            </div>
        );
    };

    return (
        <>
            {calenderFocus && (
                <Modal title='Select Date' onClose={resetInput}>
                    {/* {searchInput && ( */}
                    <div className='flex flex-col mx-auto mt-4 w-full sm:w-auto h-80'>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#fd5b61']}
                            onChange={handleSelect}
                            className='text-gray-400'
                        />
                    </div>
                    {/* // )} */}
                </Modal>
            )}
            <Navbar active={true} />
            <div
                style={{
                    backgroundImage: `linear-gradient(
                    to right bottom,
                    rgba(0,0,0,0.1),
                    rgba(0,0,0,0.2)
                  ),
                  url(/images/4.jpg)`,
                    backgroundSize: 'cover',
                    height: '34rem',
                }}
                className='bg-gray-900 relative text-white'
            >
                <SearchTours />
            </div>
            <div className='px-40 space-y-2'>
                <div className='flex flex-row-reverse'>
                    {
                        //@ts-ignore
                        <NavButton nextRef={nextRef} prevRef={prevRef} />
                    }
                </div>
                <SwiperSection
                    prevRef={prevRef}
                    nextRef={nextRef}
                    component={DestinationCard}
                    data={[0, 1, 2, 3, 4, 5, 6]}
                    className=''
                />
            </div>
        </>
    );
};

export default Home;
