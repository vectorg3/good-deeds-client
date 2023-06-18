import axios from '@/core/axios';
import { EditUserDto } from './dto/user.dto';

export const edit = async (
    values: EditUserDto
): Promise<{ message: string }> => {
    return (await axios.patch('/users/me', values)).data;
};
