import FriendsDeeds from '@/components/friends/FriendsDeeds';
import { checkAuth } from '@/utils/checkAuth';
import { GetServerSidePropsContext, NextPage } from 'next';
import styles from '@/styles/Section.module.scss';
import Head from 'next/head';
import React from 'react';
import BackBtn from '@/components/BackBtn/BackBtn';

const FriendDeedsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deeds / Добрые дела друга</title>
            </Head>
            <main>
            <BackBtn />
                <div className={styles.card}>
                    <h1 className={styles.section__title}>Добрые дела друга</h1>
                    <FriendsDeeds />
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

export default FriendDeedsPage;
