import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';

import 'styles/global.css';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start());
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());
    }, []);

    return (
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
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
