import api from '../../../../core/api/api';
import { ENDPOINTS } from '../../../../core/api/endpoints';
import { ApiResponse } from '../../../../core/api/types';
import { UpdateUserProfileDto } from '../types/userModels';
import { UserResponse } from '../types/userResponses';

export const userServices = {
    // BUSCA OS DADOS ATUALIZADOS DO USUÁRIO LOGADO
    async getProfile(): Promise<ApiResponse<UserResponse>> {
        const response = await api.get<ApiResponse<UserResponse>>(ENDPOINTS.USER.GET_USER);
        return response.data;
    },

    // ATUALIZA OS DADOS DO PERFIL
    async updateProfile(data: UpdateUserProfileDto): Promise<ApiResponse<UserResponse>> {
        const response = await api.put<ApiResponse<UserResponse>>(
            ENDPOINTS.USER.UPDATE_USER, 
            data
        );
        return response.data;
    },

    // DESATIVA A CONTA DO USUÁRIO
    async deactivateAccount(): Promise<ApiResponse<null>> {
        const response = await api.patch<ApiResponse<null>>(ENDPOINTS.USER.DEACTIVATE_ACCOUNT);
        return response.data;
    }
};