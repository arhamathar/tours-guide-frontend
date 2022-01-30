import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className='flex justify-center items-center'>
            <div
                className='border-pink-400 spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
                role='status'
            ></div>
        </div>
    );
};

export default Spinner;
