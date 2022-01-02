import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import logo from 'public/icons/logo-icon.png';
import ProfilePic from 'components/Navigation/ProfilePic';

interface IProps {
    sidebarHandler: () => void;
}

const Header: React.FC<IProps> = ({ sidebarHandler }) => {
    return (
        <header className='border flex h-16 p-2 justify-between items-center'>
            <div
                className='md:hidden blocks h-10 cursor-pointer'
                onClick={sidebarHandler}
            >
                <RiBarChartHorizontalLine size={35} color='#999' />
            </div>
            <Link href='/' passHref>
                <Image src={logo} alt='logo' height={40} width={40} />
            </Link>
            <div className='flex'>
                <div className='flex flex-col p-2'>
                    <h4 className='text-gray-700 font-bold'>Arham Athar</h4>
                    <p className='text-gray-700'>Admin</p>
                </div>
                <div className='p-2'>
                    <ProfilePic />
                </div>
            </div>
        </header>
    );
};

export default Header;
