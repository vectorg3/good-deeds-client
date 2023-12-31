import CreateDeed from '@/components/deeds/CreateDeed';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/DeedForm.module.scss';
import { checkAuth } from '@/utils/checkAuth';
import BackBtn from '@/components/BackBtn/BackBtn';
const NewDeedPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deeds / Новая запись</title>
            </Head>
            <main>
            <BackBtn />
                <div className={styles.editDeed}>
                    <h1 className={styles.editDeed__title}>
                        Создание записи
                    </h1>
                    <CreateDeed></CreateDeed>
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
export default NewDeedPage;
