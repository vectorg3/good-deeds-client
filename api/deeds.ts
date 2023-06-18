import axios from '../core/axios';
import { CreateDeedDto, DeedDto, EditDeedDto } from './dto/deed.dto';

export const getDeeds = async (): Promise<DeedDto[]> => {
    return (await axios.get('/deeds')).data;
};

export const getOneDeed = async (id: string): Promise<DeedDto> => {
    return (await axios.get(`/deeds/${id}`)).data;
};
export const createDeed = async (
    values: CreateDeedDto
): Promise<{ message: string }> => {
    return (await axios.post(`/deeds`, values)).data;
};
export const editDeed = async (
    id: string,
    values: EditDeedDto
): Promise<{ message: string }> => {
    return (await axios.patch(`/deeds/${id}`, values)).data;
};
export const deleteDeed = async (
    id: string
): Promise<{ message: string }> => {
    return (await axios.delete(`/deeds/${id}`)).data;
};

export const getFriendsDeeds = async(id: string): Promise<DeedDto[]> => {
    return (await axios.get(`/deeds/friend/${id}`)).data
}
