import { AppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '@/styles/Section.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import * as Api from '@/api';
import { Toast } from '../toasts/toast';
import { USER } from '@/api/dto/auth.dto';
import { fetchGetFriends } from '@/redux/slices/friendsSlice';

const Friends: React.FC = () => {
    const router = useRouter();
    const friends: USER[] = useAppSelector(
        (store) => store.friendsReducer.value.friends
    );
    const handleRemove = async (id: string) => {
        try {
            const res = await Api.friends.deleteOne(id);
            Toast.fire({
                icon: 'success',
                title: res.message,
            });
            dispatch(fetchGetFriends());
        } catch (err: any) {
            Toast.fire({
                icon: 'error',
                title: err.message,
            });
        }
    };
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchGetFriends());
    }, [dispatch]);
    return (
        <div className={styles.section__list}>
            {friends.map((item) => (
                <div key={item._id} className={styles.section__item}>
                    <div className={styles.section__info}>
                        <div className={styles.section__item_field} onClick={() => router.push(`/friends/${item._id}`)}>
                            <span style={{ fontWeight: 700 }}>
                                {item.userName}
                            </span>
                        </div>
                        <div className={styles.section__item_field}>
                            {item.email}
                        </div>
                    </div>
                    <div className={styles.section__btns}>
                        <div
                            className={styles.section__btn}
                            onClick={() => handleRemove(item._id)}
                        >
                            <FaTrash />
                        </div>
                    </div>
                </div>
            ))}
            <div
                className={`${styles.section__item} ${styles.section__item_add}`}
                onClick={() => router.push('/friends/add')}
            >
                <AiOutlinePlus />
            </div>
        </div>
    );
};

export default Friends;
