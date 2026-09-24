// Camada de segurança e conveniência que abstrai o armazenamento local do dispositivo
import * as SecureStore from 'expo-secure-store';

export const secureStorage = Object.freeze({

    // SALVA UM ITEM SOBRE A CHAVE PASSADA
    async setItem(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error: unknown) {
      console.error(`Erro ao salvar no SecureStore [${key}]:`, error);
      throw error;
    }
  },

  // RECUPERA UM ITEM SOBRE A CHAVE PASSADA
  async getItem(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error: unknown) {
      console.error(`Erro ao recuperar do SecureStore [${key}]:`, error);
      return null;
    }
  },

  // REMOVE UM ITEM SOBRE A CHAVE PASSADA
  async removeItem(key: string): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error: unknown) {
      console.error(`Erro ao remover do SecureStore [${key}]:`, error);
      throw error;
    }
  },

  // SALVA UM OBJETO, ARRAYS E ETC SOBRE A CHAVE PASSADA
  async setObject<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await this.setItem(key, jsonValue);
    } catch (error: unknown) {
      console.error(`Erro ao serializar objeto para SecureStore [${key}]:`, error);
      throw error;
    }
  },

  // RECUPERA UM OBJETO, ARRAYS E ETC SOBRE A CHAVE PASSADA
  async getObject<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await this.getItem(key);
      return jsonValue ? (JSON.parse(jsonValue) as T) : null;
    } catch (error: unknown) {
      console.error(`Erro ao desserializar objeto do SecureStore [${key}]:`, error);
      return null;
    }
  },
});