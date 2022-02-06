//@ts-ignore
import Layout from '../../Layout/index';
import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker, InfoBox } from '@react-google-maps/api';
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';
import { mapDarkmode } from 'helpers/constants';
import { StandaloneSearchBox } from '@react-google-maps/api';
import Input from 'components/FormElements/Input';
import ReactPaginate from 'react-paginate';
import { getAllHotels, getAllHotelsOfPage } from 'utils/api';
import Pagination from '@mui/material/Pagination';
import Link from 'next/link';

interface coords {
    lat: number;
    lng: number;
}
//@ts-ignore
export default function Index({ totalPages }) {
    const [items, setItems] = useState(totalPages);
    const [hotels, setHotels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);

    const getHotelsOfPage = async (page: number) => {
        const res = await getAllHotelsOfPage(page);
        setHotels(res.data);
    };

    useEffect(() => {
        setPages(Math.ceil(totalPages / 5));
    }, []);

    useEffect(() => {
        getHotelsOfPage(currentPage);
    }, [currentPage]);

    //@ts-ignore

    const [apiMap, setApiMap] = useState<string>(
        'AIzaSyCryqdJrYXn4RAZ6LU_kC-uYB2Tn2K00_M',
    );
    const [center, setCenter] = useState<coords>({
        lat: -3.745,
        lng: -38.523,
    });
    const autocomplete = useRef(null);

    const onMarkerDragEnd = (e: any) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCenter({ lat, lng });
    };
    const SearchMap = () => {
        const containerStyle = {
            width: '100%',
            height: '100%',
        };
        return (
            <LoadScript
                libraries={[
                    'drawing',
                    'geometry',
                    'localContext',
                    'places',
                    'visualization',
                ]}
                googleMapsApiKey={apiMap}
            >
                <StandaloneSearchBox
                    //@ts-ignore
                    onLoad={(ref) => (autocomplete.current = ref)}
                    onPlacesChanged={() => {
                        //@ts-ignore
                        const { lat, lng } =
                            //@ts-ignore
                            autocomplete.current.getPlaces()[0].geometry
                                .location;
                        setCenter({
                            lat: lat(),
                            lng: lng(),
                        });
                    }}
                >
                    <Input />
                </StandaloneSearchBox>
                <GoogleMap
                    onClick={(e: any) => {
                        setCenter({
                            lat: e.latLng?.lat(),
                            lng: e.latLng?.lng(),
                        });
                        console.log(e.latLng?.lat(), e.latLng?.lng());
                    }}
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker
                        position={center}
                        onDragEnd={(e) => onMarkerDragEnd(e)}
                        draggable={true}
                    ></Marker>
                </GoogleMap>
            </LoadScript>
        );
    };

    return (
        <Layout className='grid grid-cols-2 mt-20 px-4 space-x-6'>
            <div className='overflow-y-auto'>
                {/* @ts-ignore */}
                {hotels.length &&
                    hotels.map(({ _id, hotelName }) => (
                        <>
                            <Link href={`/Hotel/${_id}`}>
                            <div key={_id}>
                            <div className='py-4 border-t border-b'>
                                <div className='grid grid-cols-5 space-x-4'>
                                    <img
                                        src='/images/sample2.jpg'
                                        className='inline-block rounded-xl col-span-2 h-full'
                                    ></img>
                                    <div className='col-span-3'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-base text-gray-600 font-thin'>
                                                Entire rental unit in Mussoorie
                                            </p>
                                            <AiOutlineHeart
                                                size={24}
                                                className='text-gray-700'
                                            />
                                        </div>
                                        <h4 className='truncate py-1 text-lg font-semibold'>
                                            {hotelName}
                                        </h4>
                                        <div className='py-2'>
                                            <p className='text-base text-gray-600 font-thin'>
                                                3
                                                Guests•1bedroom•3beds•1bathroom
                                            </p>
                                            <p className='text-base -mt-1 text-gray-600 font-thin'>
                                                Wifi•Kitchen•Free
                                                Parking•Heating
                                            </p>
                                        </div>
                                        <div className='flex justify-between items-center pt-2'>
                                            <div className='flex items-center'>
                                                <AiTwotoneStar
                                                    size={22}
                                                    fill='#DD0007'
                                                />
                                                <p className='font-medium'>
                                                    4.95{' '}
                                                    <span className='text-gray-500 font-normal'>
                                                        (42 reviews)
                                                    </span>
                                                </p>
                                            </div>
                                            <div className='font-bold text-lg'>
                                                ₹ 3,390{' '}
                                                <span className='font-normal'>
                                                    / night
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </Link>
                        </>
                    ))}
                {/* <PaginatedItems itemsPerPage={5} /> */}
                <Pagination
                    count={pages}
                    onChange={(e) => setCurrentPage(e.target.innerText)}
                    color='secondary'
                    className='mt-4 flex justify-center w-full'
                />
            </div>
            <div className='space-y-2'>
                <SearchMap />
            </div>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const allHotels = await getAllHotels();
    const totalPages = allHotels.data.length;
    return {
        props: {
            totalPages,
        },
        revalidate: 1,
    };
};
