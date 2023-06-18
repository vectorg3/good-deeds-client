import React, { useState } from 'react';
import styles from './Form.module.scss';
import { RegisterFormDto } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { setCookie } from 'nookies';
import { Toast } from '../toasts/toast';
import { useRouter } from 'next/router';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';

const RegisterForm: React.FC = () => {
    const router = useRouter();
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegister = async (user: RegisterFormDto) => {
        try {
            const { token } = await Api.auth.register(user);
            setCookie(null, 'token', token, {
                path: '/',
            });
            Toast.fire({
                icon: 'success',
                title: 'Вы успешно авторизовались',
                text: 'Переходим на главную страницу...',
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
                    handleRegister({
                        email: email,
                        password: password,
                        userName: userName,
                    })
                }
                type='button'
                className={styles.form__button}
                disabled={!userName || !email || !password}
            >
                Зарегистрироваться
            </button>
        </form>
    );
};

export default RegisterForm;
