export interface UserModel {
    id: number;
    username: string;
    password?: string;
    roles: string;
    token?: string;
    status: string;
}
