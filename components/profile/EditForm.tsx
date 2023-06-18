import { EditUserDto } from '@/api/dto/user.dto';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Api from '@/api';
import { Toast } from '../toasts/toast';
import styles from '../auth/Form.module.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';

const EditForm: React.FC = () => {
    const router = useRouter();
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    useEffect(() => {
        const loadData = async () => {
            const data = await Api.auth.getMe();
            setUserName(data.userName);
            setEmail(data.email);
        };
        loadData();
    }, []);
    const handleEdit = async (user: EditUserDto) => {
        try {
            await Api.users.edit(user);
            Toast.fire({
                icon: 'success',
                title: 'Профиль успешно отредактирован',
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
                    <AiOutlineUser />
                </label>
                <input
                    type='text'
                    className={styles.form__input}
                    placeholder='Имя пользователя'
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
            </div>
            <div className={styles.form__field}>
                <label>
                    <HiOutlineMail />
                </label>
                <input
                    type='email'
                    className={styles.form__input}
                    placeholder='Почта'
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>
            <div className={styles.form__field}>
                <label>
                    <HiOutlineKey />
                </label>
                <input
                    type='password'
                    className={styles.form__input}
                    placeholder='Пароль'
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </div>
            <button
                onClick={() =>
                    handleEdit({
                        email: email,
                        password: password,
                        userName: userName,
                    })
                }
                type='button'
                className={styles.form__button}
                disabled={!userName || !email || !password}
            >
                Редактировать
            </button>
        </form>
    );
};

export default EditForm;
