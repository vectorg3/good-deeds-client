import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import * as Api from '@/api';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const { token } = nookies.get(ctx);

    axios.defaults.headers.Authorization = 'Bearer ' + token;

    try {
        await Api.auth.getMe();
        return {
            props: {},
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }
};
