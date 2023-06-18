import React, { useState } from 'react';
import styles from '@/styles/Form.module.scss';
import { LoginFormDto } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { setCookie } from 'nookies';
import { Toast } from '../toasts/toast';
import { useRouter } from 'next/router';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleLogin = async (user: LoginFormDto) => {
        try {
            const { token } = await Api.auth.login(user);
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
                    <HiOutlineMail />
                </label>
                <input
                    type='email'
                    className={styles.form__input}
                    placeholder='Почта'
                    name='email'
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
                    handleLogin({
                        email: email,
                        password: password,
                    })
                }
                disabled={!email || !password}
                type='button'
                className={styles.form__button}
            >
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
