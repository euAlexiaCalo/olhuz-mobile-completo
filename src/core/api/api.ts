// Instancia a API base do Axios e aplica os interceptors configurados
import axios from 'axios';
import { BASE_URL } from './endpoints';
import { setupInterceptors } from './interceptors';

const api = axios.create({
    baseURL: BASE_URL,
    // Cancela a requisição se demorar mais de 30 segundos
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
    },
});

// Aplica os interceptors
setupInterceptors(api);

export default api;