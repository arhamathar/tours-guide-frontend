import React from 'react';
import Link from 'next/link';

const ProfilePicPopover = () => {
    return (
        <div className='absolute right-0 mt-2 py-2 w-48 bg-pink-400 text-white rounded-lg shadow-xl z-10'>
            <Link href='/'>
                <a className='block px-4 py-2  hover:bg-pink-500 '>
                    Account settings
                </a>
            </Link>
            <Link href='/support'>
                <a className='block px-4 py-2  hover:bg-pink-500 '>Support</a>
            </Link>
            <Link href='/signout'>
                <a className='block px-4 py-2  hover:bg-pink-500 '>Sign out</a>
            </Link>
        </div>
    );
};

export default ProfilePicPopover;
