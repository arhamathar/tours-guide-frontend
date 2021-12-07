import React from 'react';
import Image from 'next/image';
interface IProps {
    name: string,
    url?: string,
    price?: number,
    daysForGivenPrice?: number,
    review?: number,
    description?: string
}

const HotelOrGuideCard: React.FC<IProps> = ({
    name,
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegOQH2mkVKDWO2lsLTCUFeFjG5gtX0st22johXR66_gqxwonI9j-K0LFz5dX4qIDZlGg&usqp=CAU",
    price,
    review,
    description
}) => {
    return (

        <div className="md:flex p-3  md:items-left md:justify-left">
            <div className="bg-white  w-11/12 h-3/5 bg-opacity-75 duration-500 rounded-xl mb-2  md:h-auto shadow-lg lg:transform  hover:scale-105 ">
                <div className="flex flex-row rounded-lg">
                    <Image
                        src={url}
                        className="rounded-t-xl"
                        alt="No Image"
                        width="300"
                        height="100">
                    </Image>
                    <div className="p-3 space-y-10">
                        <div>
                            <h1 className="font-bold text-2xl text-black">{name}</h1><br />
                        </div>
                        <div>
                            <p className="font-Roboto font text-gray-500 ">{description}</p>
                        </div>
                        <div>
                            <button className="bg-white- border-2 border-green-600 text-green-600 px-2 py-1 rounded  hover:bg-green-600 hover:text-white">View<i className="fad fa-long-arrow-right"></i></button>
                        </div>
                        <div>
                        <div>
                            <p className="text-gray-600  italic font-bold float-left ">{`Review: ${review}`}</p>
                            <p className="text-gray-600  italic font-bold  float-right">{`Rs ${price}/night`}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelOrGuideCard;