// DTOs das telas de autenticação
export interface RegisterDto {
    fullName: string;
    cpf: string;
    birthDate: string; // Formato yyyy-MM-dd
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginDto {
    email: string;
    password: string;
}

export interface ForgotPasswordDto {
    email: string;
}

export interface VerifyTokenDto {
    token: string;
    email: string;
}

export interface ResetPasswordDto {
    token: string;
    email: string;
    newPassword: string;
    confirmPassword: string;
}