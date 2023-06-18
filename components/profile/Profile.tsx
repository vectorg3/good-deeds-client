import { fetchGetMe } from '@/redux/slices/userSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Profile.module.scss';
import { FiLogOut } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import * as Api from '@/api';
import { useRouter } from 'next/router';

const Profile: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const userData = useAppSelector((store) => store.userReducer.value.user);
    useEffect(() => {
        dispatch(fetchGetMe());
    }, [dispatch]);
    return (
        <>
            <div className={styles.userData}>
                <div className={styles.userData__field}>
                    <span style={{ fontWeight: 700 }}>ID: </span>
                    {userData._id}
                </div>
                <div className={styles.userData__field}>
                    <span style={{ fontWeight: 700 }}>Имя Пользователя: </span>
                    {userData.userName}
                </div>
                <div className={styles.userData__field}>
                    <span style={{ fontWeight: 700 }}>Почта: </span>
                    {userData.email}
                </div>
            </div>
            <div className={styles.buttons}>
                <button type='button' className={styles.button}>
                    <BiEdit
                        className={styles.icons}
                        onClick={() => router.push('/profile/edit')}
                    />
                </button>
                <button type='button' className={styles.button}>
                    <FiLogOut
                        className={styles.icons}
                        onClick={() => {
                            Api.auth.logout();
                            router.push('/');
                        }}
                    />
                </button>
            </div>
        </>
    );
};

export default Profile;
