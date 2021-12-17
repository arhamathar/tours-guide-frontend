import Layout from '../../Layout/index';
import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker, InfoBox } from '@react-google-maps/api';
//@ts-ignore
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';
import { mapDarkmode } from 'helpers/constants';
export default function Index() {
    const [coords, setCoords] = useState({
        lat: -1.2884,
        lng: 36.8233,
    });

    const [latLng, setLatLng] = useState({
        lat: -1.2884,
        lng: 36.8233,
    });

    const SearchMap = () => {
        const containerStyle = {
            width: '100%',
            height: '100%',
        };
        const center = {
            lat: -3.745,
            lng: -38.523,
        };
        const onLoad = (infoBox: any) => {
            console.log('infoBox: ', infoBox);
        };
        const options = { closeBoxURL: '', enableEventPropagation: true };
        return (
            <LoadScript googleMapsApiKey='AIzaSyCryqdJrYXn4RAZ6LU_kC-uYB2Tn2K00_M'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <InfoBox
                        onLoad={onLoad}
                        options={options}
                        position={center}
                    >
                        <div
                            style={{
                                backgroundColor: 'yellow',
                                opacity: 0.75,
                                padding: 12,
                            }}
                        >
                            <div style={{ fontSize: 16, color: '#08233B' }}>
                                Hello, World!
                            </div>
                        </div>
                    </InfoBox>
                </GoogleMap>
            </LoadScript>
        );
    };

    return (
        <Layout className='grid grid-cols-2 mt-20 px-4 space-x-6'>
            <div className='overflow-y-auto'>
                {[0, 0, 1, 1, 1].map((el) => {
                    return (
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
                                        Herne Lodge 4 - A Mountain Home Away
                                        From Satna Ashutosh
                                    </h4>
                                    <div className='py-2'>
                                        <p className='text-base text-gray-600 font-thin'>
                                            3 Guests•1bedroom•3beds•1bathroom
                                        </p>
                                        <p className='text-base -mt-1 text-gray-600 font-thin'>
                                            Wifi•Kitchen•Free Parking•Heating
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
                    );
                })}
            </div>
            <div>
                <SearchMap />
            </div>
        </Layout>
    );
}
