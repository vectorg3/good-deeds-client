import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const DashboardPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <main>
                <h1>Home page</h1>
            </main>
        </>
    );
};

export default DashboardPage;
