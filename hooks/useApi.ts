import React from 'react';
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
    config = { ...config, method };

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
        try {
            const response = await axios(url, config);
            console.log(response);
            setState({ loading: false, response, errorResponse: null });
        } catch (e) {
            setState({ loading: false, response: null, errorResponse: e });
        }
    }, [url, config]);

    return {
        loading: loading,
        data: response?.data || defaultResponse,
        response,
        errorResponse,
        sendRequest,
    };
};

export default useApi;
