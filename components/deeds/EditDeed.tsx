import { useRouter } from 'next/router';
import styles from '@/styles/Form.module.scss';
import { useEffect, useState } from 'react';
import * as Api from '@/api';
import { Toast } from '../toasts/toast';
import { EditDeedDto } from '@/api/dto/deed.dto';
import { MdTitle } from 'react-icons/md';
import { RiText } from 'react-icons/ri';

const EditDeed: React.FC = () => {
    const router = useRouter();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    useEffect(() => {
        const loadData = async () => {
            try {
                if (typeof router.query.id == 'string') {
                    const data = await Api.deeds.getOneDeed(router.query.id);
                    setTitle(data.title);
                    setDescription(data.description);
                }
            } catch (err: any) {
                Toast.fire({
                    icon: 'error',
                    title: err.message,
                });
                router.push('/');
            }
        };
        loadData();
    }, []);
    const handleEdit = async (deed: EditDeedDto) => {
        try {
            if (typeof router.query.id == 'string') {
                await Api.deeds.editDeed(router.query.id, deed);
            }
            Toast.fire({
                icon: 'success',
                title: 'Запись успешно отредактирована',
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
                    placeholder='Заголовок'
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
            </div>
            <div className={styles.form__field}>
                <label>
                    <RiText />
                </label>
                <input
                    className={styles.form__input}
                    placeholder='Описание'
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
            </div>
            <button
                onClick={() =>
                    handleEdit({
                        title: title,
                        description: description,
                    })
                }
                type='button'
                className={styles.form__button}
                disabled={!title || !description}
            >
                Редактировать
            </button>
        </form>
    );
};

export default EditDeed;
