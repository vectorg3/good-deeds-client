import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { NextPage } from 'next';
import styles from '@/styles/Auth.module.scss';
import Head from 'next/head';
import React, { useState } from 'react';

type AuthType = 'Login' | 'Register';

const AuthPage: NextPage = () => {
    const [authSwitch, setAuthSwitch] = useState<AuthType>('Register');
    return (
        <>
            <Head>
                <title>Deeds / Авторизация</title>
            </Head>
            <main>
                <div className={styles.auth}>
                    <div className={styles.auth__header}>
                        <h1 className={styles.auth__title}>Авторизация</h1>
                        <ul className={styles.auth__switch}>
                            <button
                                className={
                                    authSwitch == 'Login'
                                        ? `${styles.auth__switch_item} ${styles.auth__switch_item_active}`
                                        : `${styles.auth__switch_item}`
                                }
                                onClick={() => {
                                    setAuthSwitch('Login');
                                }}
                            >
                                Вход
                            </button>
                            <button
                                className={
                                    authSwitch == 'Register'
                                        ? `${styles.auth__switch_item} ${styles.auth__switch_item_active}`
                                        : `${styles.auth__switch_item}`
                                }
                                onClick={() => {
                                    setAuthSwitch('Register');
                                }}
                            >
                                Регистрация
                            </button>
                        </ul>
                    </div>
                    <div className={styles.auth__body}>
                        {authSwitch == 'Login' ? (
                            <LoginForm />
                        ) : (
                            <RegisterForm />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default AuthPage;
