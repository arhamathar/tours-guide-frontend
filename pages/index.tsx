import type { NextPage } from 'next';
import { FC, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Input from 'components/FormElements/Input';
import NavButton from 'components/swiper/NavButton';
import SwiperSection from 'components/swiper/SwiperSection';
import Navbar from 'Layout/Navbar';

const Home: NextPage = () => {
    const prevRef = useRef<HTMLSpanElement>();
    const nextRef = useRef<HTMLSpanElement>();

    const SearchTours = () => {
        return (
            <div style={{ top: '45%' }} className='px-40 space-y-2 absolute'>
                <h1 className='text-5xl filter drop-shadow font-extrabold'>
                    Avoid the Crowds
                </h1>
                <h2 className='text-2xl filter drop-shadow font-bold'>
                    Book private tours & activities with locals worldwide
                </h2>
                <div className='min-h-20 bg-white rounded-2xl p-10 grid grid-cols-5 gap-4'>
                    <Input
                        className='col-span-2 w-full'
                        placeholder='Where are you Going ?'
                        inputType='primary'
                    />

                    <Input placeholder='Date Dropdown' inputType='primary' />
                    <Input placeholder='9 Peoples' inputType='primary' />
                    <button className='inline-block p-2 rounded-full text-white font-bold bg-pink-600'>
                        Search
                    </button>
                </div>
            </div>
        );
    };

    const DestinationCard = () => {
        return (
            <div className='w-full rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer'>
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
