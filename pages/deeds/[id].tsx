import EditDeed from '@/components/deeds/EditDeed';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/DeedForm.module.scss';

const editDeed: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deeds / Редактирование записи</title>
            </Head>
            <main>
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

export default editDeed;
