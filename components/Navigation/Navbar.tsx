import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_BAR_LINKS } from 'helpers/constants';

import ProfilePic from 'components/Navigation/ProfilePic';

const Navbar = () => {
    const { pathname } = useRouter();
    const [openNavbar, setOpenNavbar] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <nav className='bg-purple-800 h-16'>
                <div className='flex items-center justify-between'>
                    <div className='md:hidden flex items-center h-auth hover:bg-purple-500 py-3 px-4 hover:border-white border-b-4 border-transparent'>
                        <button
                            className='outline-none mobile-menu-button cursor-pointer'
                            onClick={() => setOpenNavbar(!openNavbar)}
                        >
                            <div className='w-8 h-0.5 bg-white my-2'></div>
                            <div className='w-8 h-0.5 bg-white my-2'></div>
                            <div className='w-8 h-0.5 bg-white my-2'></div>
                        </button>
                    </div>
                    <div>
                        <Link href='/'>
                            <a className='text-white text-xl md:text-3xl font-bold uppercase mx-4 tracking-wide'>
                                ToursGuide
                            </a>
                        </Link>
                    </div>
                    <div className='flex md:hidden px-2'>
                        <ProfilePic />
                    </div>
                    <div className='hidden md:flex justify-around items-center mx-4 '>
                        {NAV_BAR_LINKS.map((navlink) => {
                            return (
                                <div
                                    key={navlink.label}
                                    className={`hover:bg-purple-500 py-4 hover:border-white border-b-4 border-transparent transition duration-300 ${
                                        pathname === `${navlink.href}`
                                            ? 'border-white bg-purple-500 border-b-4 transition duration-300'
                                            : ''
                                    }`}
                                >
                                    <Link href={navlink.href}>
                                        <a className='text-lg font-medium text-white uppercase px-2 tracking-wide'>
                                            {navlink.label}
                                        </a>
                                    </Link>
                                </div>
                            );
                        })}
                        <div className='px-2'>
                            <ProfilePic />
                        </div>
                    </div>
                </div>
            </nav>
            {openNavbar && (
                <div className='md:hidden z-10 origin-top' id='mobile-menu'>
                    <div className='bg-purple-800 text-white text-center text-2xl font-semibold uppercase py-2'>
                        {NAV_BAR_LINKS.map((navlink) => (
                            <div
                                key={navlink.label}
                                className='hover:bg-purple-500 p-4 transition duration-300'
                                onClick={() => setOpenNavbar(false)}
                            >
                                <Link href={navlink.href}>
                                    <a>{navlink.label}</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Navbar;
