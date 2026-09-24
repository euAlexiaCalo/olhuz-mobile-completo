import api from '../../../../core/api/api';
import { ENDPOINTS } from '../../../../core/api/endpoints';
import { ApiResponse } from '../../../../core/api/types';
import { UpdateUserPreferencesDto } from '../types/preferencesModels';
import { UserPreferencesResponse } from '../types/preferencesResponses';

export const preferencesService = {
    async getPreferences(): Promise<ApiResponse<UserPreferencesResponse>> {
        const response = await api.get<ApiResponse<UserPreferencesResponse>>(
            ENDPOINTS.PREFERENCES.GET
        );
        return response.data;
    },

    async updatePreferences(data: UpdateUserPreferencesDto): Promise<ApiResponse<UserPreferencesResponse>> {
        const response = await api.put<ApiResponse<UserPreferencesResponse>>(
            ENDPOINTS.PREFERENCES.UPDATE,
            data
        );
        return response.data;
    }
};