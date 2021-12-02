import React from 'react';
import Image from 'next/image';
import ProfilePicPopover from './ProfilePicPopover';

const ProfilePic = () => {
    const [showPopover, setShowPopover] = React.useState(false);

    return (
        <React.Fragment>
            <div
                className='relative'
                onMouseEnter={() => setShowPopover(true)}
                onMouseLeave={() => setShowPopover(false)}
            >
                <button
                    type='button'
                    className='bg-gray-800 flex text-sm rounded-full focus:outline-none'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                >
                    <Image
                        alt='profile-pic'
                        className='h-8 w-8 rounded-full object-cover'
                        width={48}
                        height={48}
                        src='https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg'
                    />
                </button>
                {showPopover && <ProfilePicPopover />}
            </div>
        </React.Fragment>
    );
};

export default ProfilePic;
