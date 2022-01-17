import Layout from '../../Layout/index';
import LayoutBody from 'components/LayoutBody';
import Input from 'components/FormElements/Input';
import Autocomplete from 'react-google-autocomplete';
import { useState } from 'react';
import Button from 'components/FormElements/Button';

export default function index() {
    const [name, setName] = useState<string>('Ashutosh Singh');
    return (
        <Layout>
            <LayoutBody className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold'>Booking History</h4>
                <div className='space-y-4'>
                    {[0, 1, 2, 3, 4].map((el) => {
                        return (
                            <div className='grid grid-cols-2 gap-6 shadow-lg p-4'>
                                <h4 className='text-2xl font-semibold text-gray-900'>
                                    Satna Bharhut Hotel
                                </h4>
                                <h4 className='text-lg font-bold flex flex-row-reverse'>
                                    ₹ 3,390 / night
                                </h4>
                                <div className='flex gap-8'>
                                    <div>
                                        <h4 className='text-sm font-light'>
                                            Check In
                                        </h4>
                                        <p className='font-light '>
                                            24 Oct 2021
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className='text-sm font-light'>
                                            Check Out
                                        </h4>
                                        <p className='font-light '>
                                            26 Oct 2021
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row-reverse'>
                                    <button className='p-1.5 bg-green-400 text-white font-semibold rounded'>
                                        Upcoming
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </LayoutBody>
        </Layout>
    );
}
