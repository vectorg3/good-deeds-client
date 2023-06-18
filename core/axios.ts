import axios from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = 'http://localhost:5000';
axios.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const { token } = parseCookies();

        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
});
export default axios;
