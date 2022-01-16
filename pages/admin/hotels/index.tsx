import React from 'react';
import Wrapper from 'Layout/Wrapper';
import HotelCard from 'components/Cards/HotelCard';

const Hotel = () => {
    return (
        <Wrapper>
            <h3 className='text-gray-500 font-bold text-2xl'>All Hotels</h3>
            <div className='w-full'>
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </div>
        </Wrapper>
    );
};

export default Hotel;
