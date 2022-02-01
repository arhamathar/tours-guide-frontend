import { useState } from 'react';
// import Button from '../Button';
import Link from 'next/link';

function Footer() {
    const [Message, setMessage] = useState('Write Message');
    return (
        <div className='bg-gray-900 '>
            <div className='bg-gray-900 p-5 lg:p-10 py-10 grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='col-span-4 h-14'>
                    <img
                        className='h-full'
                        src='/icons/logo-icon.png'
                        alt='logo'
                    />
                </div>
                <div className='text-gray-300 col-span-4 md:col-span-1'>
                    <span className='text-primary text-md text-pink-500 font-bold'>
                        About us
                    </span>
                    <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </p>
                </div>
                <div className='flex justify-between md:justify-around items-start self-start '>
                    <div className='text-gray-300'>
                        <span className='text-primary mb-2 text-sm font-bold text-pink-500'>
                            Links
                        </span>
                        <Link href='/'>
                            <a className='hover:text-pink-400'>
                                <p className='text-sm'>Home</p>
                            </a>
                        </Link>
                        <Link href='/contact'>
                            <a className='hover:text-pink-400'>
                                <p className='text-sm'>Contact us</p>
                            </a>
                        </Link>
                        <Link href='/about'>
                            <a className='hover:text-pink-400'>
                                <p className='text-sm'>About us</p>
                            </a>
                        </Link>
                    </div>
                    <div className='text-gray-300'>
                        <span className='text-primary mb-2 text-sm font-bold text-pink-500'>
                            Social
                        </span>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-pink-400'
                        >
                            <p className='text-sm'>Facebook</p>
                        </a>
                        <a
                            href='https://instagram.com'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-pink-400'
                        >
                            <p className='text-sm'>Instagram</p>
                        </a>
                        <a
                            href='https://linkedin.com'
                            target='_blank'
                            rel='noreferrer'
                            className='hover:text-pink-400'
                        >
                            <p className='text-sm'>Linkedin</p>
                        </a>
                    </div>
                </div>

                <form
                    action='mailto:someone@example.com'
                    className='col-span-4 lg:col-span-1 flex flex-col'
                >
                    <span className='text-primary mb-2 text-sm font-bold text-pink-500'>
                        Write Message
                    </span>
                    <input
                        type='text'
                        required
                        placeholder='Write Message'
                        className='bg-gray-600 text-gray-200 my-2 p-1 outline-none'
                    />
                    <div>
                        <a href=''>
                            <button className='bg-pink-500 text-white py-1 px-4 block'>
                                Send
                            </button>
                        </a>
                    </div>
                </form>
                <div className='col-span-4 text-md text-xs text-gray-400'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
