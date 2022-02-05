import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { ToastContainer } from 'react-toastify';

import 'styles/global.css';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import 'filepond/dist/filepond.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import configureStore from 'Redux/store/configureStore';
// import Layout from 'components/Layout';
import Layout from './../Layout';


const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start());
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());
    }, []);

    return (
        <Provider store={store}>
            <Layout>
                <Head>
                    <title>Tours Guide | Home</title>
                    <meta
                        name='description'
                        content='Tours Guide - An app where you can plan your tours finding best deals on guides & hotels. '
                    />
                    <meta
                        name='viewport'
                        content='initial-scale=1.0, width=device-width'
                    />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <ToastContainer theme={'colored'} />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
