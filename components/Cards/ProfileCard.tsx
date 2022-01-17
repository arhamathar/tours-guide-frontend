import Link from 'next/link';
interface Card {
    Icon: any;
    title: string;
    body: string;
    href: string;
}

const Card = ({ Icon, title, body, href }: Partial<Card>) => {
    return (
        <Link href={`/myprofile/${href}`}>
            <div className='p-5 shadow-xl rounded-lg space-y-5'>
                <Icon size={38} />
                <div>
                    <h4 className='text-lg font-semibold'>{title}</h4>
                    <p className='font-light'>{body}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
