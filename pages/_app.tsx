import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import Layout from 'components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>Tours Guide | Home</title>
                <meta
                    name="description"
                    content="Tours Guide - An app where you can plan your tours finding best deals on guides & hotels. "
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
