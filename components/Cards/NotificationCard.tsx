import { AiOutlinePlus as Icon } from 'react-icons/ai';

const Card = () => {
    return (
        <div className='flex items-center justify-between border-b py-2'>
            <div className='flex items-center gap-4'>
                <img className='w-12' src='/icons/logo-icon.png'></img>
                <div>
                    <p className='font-semibold'>
                        Connect with Facebook to complete the profile
                    </p>
                    <p className='font-light'>12 Oct 2020</p>
                </div>
            </div>
            <span className='rounded-full cursor-pointer p-2 transition-all hover:bg-gray-100 duration-200'>
                <Icon
                    size={32}
                    className='transform rotate-45 transition-all duration-200 hover:transform hover:scale-110'
                />
            </span>
        </div>
    );
};

export default Card;
