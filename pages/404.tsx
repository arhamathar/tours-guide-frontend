import React from 'react';
import Link from 'next/link';
import Button from 'components/FormElements/Button';

const PageNotFound404 = () => {
    return (
        <div className='text-center mt-16'>
            <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold text-purple-600'>
                404
            </h1>
            <h2 className='text-4xl sm:text-5xl md:text-6xl text-gray-800 font-bold'>
                Oops! Page not found
            </h2>
            <p className='text-gray-500 mt-4 text-xl'>
                The page you are looking for does not exist
            </p>
            <Button color='secondary' customClass='mt-8'>
                <Link href='/'>Back home</Link>
            </Button>
        </div>
    );
};

export default PageNotFound404;
