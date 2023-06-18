import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { checkAuth } from '@/utils/checkAuth';
import styles from '@/styles/Home.module.scss';
import Profile from '@/components/profile/Profile';
import Deeds from '@/components/deeds/Deeds';
import Friends from '@/components/friends/Friends';

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deeds / Главная</title>
            </Head>
            <main>
                <div className={styles.home}>
                    <h2>Профиль</h2>
                    <header className={styles.home__profile}>
                        <Profile />
                    </header>
                    <div className={styles.home__dashboard}>
                        <div className={styles.home__friends}>
                            <h2>Друзья</h2>
                            <Friends></Friends>
                        </div>
                        <div className={styles.home__deeds}>
                            <h2>Добрые дела</h2>
                            <Deeds></Deeds>
                        </div>
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
export default HomePage;
