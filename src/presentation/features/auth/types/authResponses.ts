// Tipagem das respostas da API
export interface UserResponse {
    id: string;
    fullName: string;
    cpf: string;
    birthDate: string;
    phoneNumber: string;
    email: string;
    createdAt: string;
    isActive: boolean;
}

export interface AuthResponseData {
    token: string;
    expiresAt: string;
    user: UserResponse;
}