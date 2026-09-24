// Contém as tipagens de respostas da API
export interface ApiResponse<T = unknown> {
    error: boolean;
    message: string;
    data: T | null;
    statusCode: number;
}

export interface ApiError {
    error: true;
    message: string;
    statusCode: number;
}

// Verifica se um erro foi retornado pela API
export const isApiError = (
    error: unknown

): error is ApiError => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'error' in error &&
        'message' in error &&
        'statusCode' in error
    );
};
