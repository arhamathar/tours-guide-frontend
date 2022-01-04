import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';

interface IProps {
    border?: boolean;
}

const HotelCard: React.FC<IProps> = ({ border = false }) => {
    return (
        <div className={`py-4 ${border ? 'border-t border-b' : ''}`}>
            <div className='flex'>
                <div className='rounded-xl'>
                    <Image
                        src='/images/sample2.jpg'
                        alt='sample'
                        height={180}
                        width={300}
                        className='object-contain rounded-md'
                    />
                </div>
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <p className='text-base text-gray-600 font-thin'>
                            Entire rental unit in Mussoorie
                        </p>
                        <AiOutlineHeart size={24} className='text-gray-700' />
                    </div>
                    <h4 className='truncate py-1 text-lg font-semibold'>
                        Herne Lodge 4 - A Mountain Home Away From Satna Ashutosh
                    </h4>
                    <div className='py-2'>
                        <p className='text-base text-gray-600 font-thin'>
                            3 Guests•1bedroom•3beds•1bathroom
                        </p>
                        <p className='text-base -mt-1 text-gray-600 font-thin'>
                            Wifi•Kitchen•Free Parking•Heating
                        </p>
                    </div>
                    <div className='flex justify-between items-center pt-2'>
                        <div className='flex items-center'>
                            <AiTwotoneStar size={22} fill='#DD0007' />
                            <p className='font-medium'>
                                4.95{' '}
                                <span className='text-gray-500 font-normal'>
                                    (42 reviews)
                                </span>
                            </p>
                        </div>
                        <div className='font-bold text-lg'>
                            ₹ 3,390 <span className='font-normal'>/ night</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
