//@ts-nocheck
import React from 'react';
import { GrNext as FcNext } from 'react-icons/gr';

interface Iprops {
    prevRef: HTMLSpanElement;
    nextRef: HTMLSpanElement;
}

function NavButton({ prevRef, nextRef }: Iprops) {
    return (
        <div className=' items-center justify-start hidden md:flex'>
            <span
                ref={prevRef}
                className='transform active:scale-90  h-10 w-10 cursor-pointer bg-white shadow flex items-center justify-center rounded-full m-2 swiper-prev-btn '
            >
                <FcNext
                    size={22}
                    color='#aaa'
                    className='transform rotate-180'
                />
            </span>
            <span
                ref={nextRef}
                className='transform active:scale-90  h-10 w-10 cursor-pointer bg-white shadow flex items-center justify-center rounded-full m-2 swiper-next-btn '
            >
                <FcNext size={22} color='#aaa' className='text-primary' />
            </span>
        </div>
    );
}

export default NavButton;
