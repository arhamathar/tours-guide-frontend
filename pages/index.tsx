import React from 'react';
import type { NextPage } from 'next';
import useApi from 'hooks/useApi';

const Home: NextPage = () => {
    // const { loading } = useApi({
    //     url: 'https://jsonplaceholder.typicode.com/users',
    //     method: 'GET',
    // });
    // console.log(test);
    const { sendRequest } = useApi({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
    });
    // console.log(response.data);

    return (
        <div
            onClick={sendRequest}
            className='flex justify-center items-center min-h-screen'
        >
            HOME PAGE
        </div>
    );
};

export default Home;
