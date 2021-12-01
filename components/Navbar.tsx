import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_BAR_LINKS } from 'helpers/constants';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <nav className='bg-purple-800 flex items-center justify-between h-16'>
            <div>
                <Link href='/'>
                    <a className='text-white text-3xl font-bold uppercase mx-4 tracking-wide'>
                        ToursGuide
                    </a>
                </Link>
            </div>
            <div className='flex justify-around items-center mx-4 '>
                {NAV_BAR_LINKS.map((navlink) => {
                    return (
                        <div
                            key={navlink.label}
                            className={`hover:bg-purple-500 py-4 hover:border-white border-b-4 border-transparent ${
                                pathname === `${navlink.href}`
                                    ? 'border-white bg-purple-500 border-b-4 '
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
            </div>
        </nav>
    );
};

export default Navbar;
