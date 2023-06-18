import axios from '@/core/axios';
import { USER } from './dto/auth.dto';
import { DeedDto } from './dto/deed.dto';

export const getAll = async (): Promise<USER[]> => {
    return (await axios.get('/friends')).data;
};

export const deleteOne = async (id: string): Promise<{ message: string }> => {
    return (await axios.delete(`/friends/${id}`)).data;
};

export const addOne = async (id: string): Promise<{ message: string }> => {
    return (await axios.post(`/friends/${id}`)).data;
};
