// Concentra a BASE_URL e todas as rotas mapeadas na API
import Constants from 'expo-constants';

// Captura o IP local da máquina e remove a porta do Expo
const debuggerHost = Constants.expoConfig?.hostUri;

const localIp = debuggerHost
    ? debuggerHost.split(':')[0]
    : '10.0.2.2';

export const BASE_URL = `http://${localIp}:5208/api`;

export const ENDPOINTS = {
    AUTH: {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        FORGOT_PASSWORD: '/auth/forgot-password',
        VERIFY_TOKEN: '/auth/verify-reset-token',
        RESET_PASSWORD: '/auth/reset-password',
    },
    USER: {
        GET_USER: '/user/profile',
        UPDATE_USER: '/user/profile',
        CHANGE_PASSWORD: '/user/profile/change-password',
        DEACTIVATE_ACCOUNT: '/user/profile',
    },
    PREFERENCES: {
        GET: '/user/preferences',
        UPDATE: '/user/preferences',
        RESET: '/user/preferences/reset',
    },
    READINGS: {
        GET_ALL: '/readings',
        CREATE: '/readings',
    },
};