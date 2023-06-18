import { DeedDto } from '@/api/dto/deed.dto';
import { fetchGetFriendDeeds } from '@/redux/slices/deedsSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toast } from '../toasts/toast';
import styles from '@/styles/Section.module.scss';

const FriendsDeeds: React.FC = () => {
    const router = useRouter();
    const friendDeeds: DeedDto[] = useAppSelector(
        (store) => store.deedsReducer.value.friendDeeds
    );
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        try {
            if (typeof router.query.id == 'string') {
                dispatch(fetchGetFriendDeeds(router.query.id));
            }
        } catch (err: any) {
            Toast.fire({
                icon: 'error',
                text: err.message,
            });
        }
    }, [dispatch]);
    return (
        <div className={styles.section__list}>
            {friendDeeds.map((item) => (
                <div key={item._id} className={styles.section__item}>
                    <div className={styles.section__info}>
                        <div className={styles.section__item_field}>
                            <span style={{ fontWeight: 700 }}>
                                {item.title}
                            </span>
                        </div>
                        <div className={styles.section__item_field}>
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendsDeeds;
