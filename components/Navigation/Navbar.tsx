import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_BAR_LINKS } from 'helpers/constants';

import ProfilePic from 'components/Navigation/ProfilePic';

const Navbar = () => {
    const { asPath } = useRouter();
    const [openNavbar, setOpenNavbar] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <nav className='bg-white h-16 shadow-md'>
                <div className='flex items-center justify-between'>
                    <div className='md:hidden flex items-center h-auth  py-3 px-4 '>
                        {' '}
                        {/* hover:border-white border-b-4 border-transparent for hover on border */}
                        <button
                            className='outline-none mobile-menu-button cursor-pointer'
                            onClick={() => setOpenNavbar(!openNavbar)}
                        >
                            <div className='w-8 h-0.5 bg-purple-900 my-2'></div>
                            <div className='w-8 h-0.5 bg-purple-900 my-2'></div>
                            <div className='w-8 h-0.5 bg-purple-900 my-2'></div>
                        </button>
                    </div>
                    <div>
                        <Link href='/'>
                            <a className='text-purple-800 text-xl md:text-3xl font-bold uppercase mx-4 tracking-wide'>
                                ToursGuide
                            </a>
                        </Link>
                    </div>
                    <div className='flex md:hidden px-2'>
                        <ProfilePic />
                    </div>
                    <div className='hidden md:flex justify-around items-center mx-4 cursor-pointer'>
                        {NAV_BAR_LINKS.map((navlink) => {
                            return (
                                <Link
                                    href={navlink.href}
                                    key={navlink.label}
                                    passHref={true}
                                >
                                    <div
                                        className={`py-4 hover:border-purple-800 border-b-4 border-transparent transition duration-300 ${
                                            asPath === `${navlink.href}`
                                                ? 'border-purple-800  border-b-4 transition duration-300'
                                                : ''
                                        }`}
                                    >
                                        <a className='text-lg font-medium text-purple-800 uppercase px-2 tracking-wide'>
                                            {navlink.label}
                                        </a>
                                    </div>
                                </Link>
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
                    <div className='bg-white text-purple-800 text-center text-2xl font-semibold uppercase py-2 cursor-pointer'>
                        {NAV_BAR_LINKS.map((navlink) => (
                            <Link
                                href={navlink.href}
                                key={navlink.label}
                                passHref={true}
                            >
                                <div
                                    className='hover:bg-purple-500 hover:text-white p-4 transition duration-300'
                                    onClick={() => setOpenNavbar(false)}
                                >
                                    <a>{navlink.label}</a>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Navbar;
