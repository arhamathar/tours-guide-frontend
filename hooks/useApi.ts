import React from 'react';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';
import axios, { AxiosRequestConfig } from 'axios';

interface Options {
    url: string;
    method?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
    postData?: { [key: string]: any };
    config?: AxiosRequestConfig;
    defaultResponse?: { [key: string]: any } | null;
}

const useApi = ({
    url,
    method = 'GET',
    defaultResponse = null,
    config,
}: Options) => {
    config = { ...config, method, data: { ...defaultResponse } };
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL_DEV;

    const [state, setState] = React.useState<{
        loading: boolean;
        response: null | any;
        errorResponse: null | any;
    }>({
        loading: false,
        response: null,
        errorResponse: null,
    });
    const { loading, response, errorResponse } = state;

    const sendRequest = React.useCallback(async () => {
        setState({ loading: true, response: null, errorResponse: null });
        nProgress.start();
        try {
            const { data } = await axios({ url, ...config });
            setState({ loading: false, response, errorResponse: null });
            nProgress.done();
            console.log(data);
            toast.success(data.message || 'success');
            return data;
        } catch (e: any) {
            // console.log(e.response.data);
           // toast.error(e.response.data.message || 'Something went wrong');
            setState({ loading: false, response: null, errorResponse: e });
            nProgress.done();
        }
    }, [url, config, response]);

    return {
        loading: loading,
        data: response?.data || defaultResponse,
        response,
        errorResponse,
        sendRequest,
    };
};

export default useApi;
