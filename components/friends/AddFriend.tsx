import { useRouter } from 'next/router';
import styles from '@/styles/Form.module.scss';
import * as Api from '@/api';
import { Toast } from '../toasts/toast';
import { MdTitle } from 'react-icons/md';
import { useState } from 'react';

const AddFriend: React.FC = () => {
    const router = useRouter();
    const [id, setId] = useState<string>('');
    const handleAdd = async (id: string) => {
        try {
            const res = await Api.friends.addOne(id);

            Toast.fire({
                icon: 'success',
                title: `${res.message}`,
            });
            router.push('/');
        } catch (err: any) {
            Toast.fire({
                icon: 'error',
                title: 'Ошибка',
                text: `${err.response.data.message}`,
            });
        }
    };

    return (
        <form className={styles.form}>
            <div className={styles.form__field}>
                <label>
                    <MdTitle />
                </label>
                <input
                    type='text'
                    className={styles.form__input}
                    placeholder='ID Друга'
                    value={id}
                    onChange={(event) => {
                        setId(event.target.value);
                    }}
                />
            </div>
            <button
                onClick={() => handleAdd(id)}
                type='button'
                className={styles.form__button}
                disabled={!id}
            >
                Добавить
            </button>
        </form>
    );
};

export default AddFriend;
