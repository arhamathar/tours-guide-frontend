import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-toastify';

const api = axios.create({ baseURL: 'http://127.0.0.1:3000/api/v1/' });

export const getConfig = () => {
    console.log('inside config');

    const token = Cookies.get('token');

    console.log('tokn: ', token);
    return {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
};

export const getAllHotels = async () => {
    try {
        const res = await api.get('/hotel/getAllHotels');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getAllHotelsOfPage = async (page: number) => {
    try {
        const res = await api.get(`/hotel/getAllHotels?limit=5&page=${page}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getAllPastBookings = async (token: string) => {
    console.log('inside the api');
    try {
        console.log('inside try');
        const res = await api.get('/traveller/getTravellerPastBooking', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log('res: ', res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const updatePassword = async (data: any) => {
    try {
        console.log("inside try")
        const res = await api.patch(
            '/auth/updatePassword',
            data,
            getConfig(),
        );
        // toast.success('success')
        console.log('success')
    } catch (err) {
        console.log(err);
    }
};
