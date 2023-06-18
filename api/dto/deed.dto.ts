export interface DeedDto {
    _id: string;
    title: string;
    description: string;
    createdBy: string;
}

export interface CreateDeedDto {
    title: string;
    description: string;
}
export type EditDeedDto = CreateDeedDto;
