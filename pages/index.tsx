import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { checkAuth } from '@/utils/checkAuth';
import styles from '@/styles/Home.module.scss';
import Profile from '@/components/profile/Profile';

const DashboardPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <main>
                <div className={styles.home}>
                    <header className={styles.home__profile}>
                        <Profile />
                    </header>
                    <div className={styles.home__dashboard}>
                        <div className={styles.home__friends}></div>
                        <div className={styles.home__deeds}></div>
                    </div>
                </div>
            </main>
        </>
    );
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);
    if ('redirect' in authProps) {
        return authProps;
    }
    return {
        props: {},
    };
};
export default DashboardPage;
