import axios from 'axios';
import toast from 'react-toastify';

const api = axios.create({ baseURL: 'http://127.0.0.1:3000/api/v1/' });

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
