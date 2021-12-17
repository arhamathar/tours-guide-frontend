import { useRouter } from 'next/router';
import { useEffect, useState, FC } from 'react';
import Link from 'next/link';

type Props = {
    active: boolean;
};

function Navbar({ active = true }: Props) {
    interface Iprops {
        name: String;
        href: String;
    }
    const [scrollY, setScrollY] = useState<number>(0);

    const router = useRouter();
    const routes: Array<Iprops> = [
        { name: 'Home', href: '/' },
        { name: 'Search', href: '/search' },
        { name: 'Become a Host', href: '/become-a-host' },
        { name: 'My Profile', href: '/myprofile' },
        { name: 'Login', href: '/auth/login' },
        { name: 'Signup', href: '/auth/signup' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex z-50 fixed top-0 right-0 left-0 px-4 py-1 justify-between items-center transition-all duration-600 ${
                scrollY > 90 || !active ? 'bg-white border-b-2' : ''
            }`}
        >
            <img
                alt='logo'
                className='h-12 w-12'
                src='/icons/logo-icon.png'
            ></img>
            <div className='flex items-center space-x-8'>
                {routes.map((el) => {
                    const activeState = router.pathname == el.href;
                    return (
                        //@ts-ignore
                        <Link key={el.href} href={el.href}>
                            <a
                                className={`font-semibold ${
                                    activeState ? 'text-pink-500 ' : ''
                                } ${
                                    scrollY > 90 || !active ? '' : 'text-white'
                                }`}
                            >
                                {el.name}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;
