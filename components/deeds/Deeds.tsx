import { DeedDto } from '@/api/dto/deed.dto';
import { fetchGetDeeds } from '@/redux/slices/deedsSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Deeds.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/router';
import * as Api from '@/api';
import { Toast } from '../toasts/toast';

const Deeds: React.FC = () => {
    const router = useRouter();
    const deeds: DeedDto[] = useAppSelector(
        (store) => store.deedsReducer.value.deeds
    );
    const handleRemove = async(id:string) => {
        try {
            const res = await Api.deeds.deleteDeed(id);
            Toast.fire({
                icon: 'success',
                title: res.message,
            });
            dispatch(fetchGetDeeds());
        } catch (err: any) {
            Toast.fire({
                icon: 'error',
                title: err.message,
            });
        }
    }
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchGetDeeds());
    }, [dispatch]);
    return (
        <div className={styles.deeds__list}>
            {deeds.map((item) => (
                <div
                    key={item._id}
                    className={styles.deeds__item}
                >
                    <div className={styles.deeds__info}>
                        <div className={styles.deeds__item_field}>
                            <span style={{ fontWeight: 700 }}>
                                {item.title}
                            </span>
                        </div>
                        <div className={styles.deeds__item_field}>
                            {item.description}
                        </div>
                    </div>
                    <div className={styles.deeds__btns}>
                        <div className={styles.deeds__btn} onClick={() => router.push(`/deeds/${item._id}`)}>
                            <FaEdit />
                        </div>
                        <div className={styles.deeds__btn} onClick={() => handleRemove(item._id)}>
                            <FaTrash />
                        </div>
                    </div>
                </div>
            ))}
            <div
                className={`${styles.deeds__item} ${styles.deeds__item_add}`}
                onClick={() => router.push('/deeds/new')}
            >
                <AiOutlinePlus />
            </div>
        </div>
    );
};

export default Deeds;
