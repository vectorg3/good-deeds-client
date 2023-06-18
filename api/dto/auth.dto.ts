export interface LoginFormDto {
    email: string;
    password: string;
}
export interface LoginResponseDto {
    token: string;
}

export type RegisterFormDto = LoginFormDto & { userName: string };
export type RegisterResponseDto = LoginResponseDto;

export interface USER {
    _id: string;
    email: string;
    userName: string;
    friends: [string];
}
