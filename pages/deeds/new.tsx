import CreateDeed from '@/components/deeds/CreateDeed';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/DeedForm.module.scss';
const NewDeed: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deeds / Новая запись</title>
            </Head>
            <main>
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

export default NewDeed;
