import EditDeed from '@/components/deeds/EditDeed';
import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/DeedForm.module.scss';
import { checkAuth } from '@/utils/checkAuth';
import BackBtn from '@/components/BackBtn/BackBtn';

const EditDeedPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deeds / Редактирование записи</title>
            </Head>
            <main>
                <BackBtn />
                <div className={styles.editDeed}>
                    <h1 className={styles.editDeed__title}>
                        Редактирование записи
                    </h1>
                    <EditDeed></EditDeed>
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
export default EditDeedPage;
