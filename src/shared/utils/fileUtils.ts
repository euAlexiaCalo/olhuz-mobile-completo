import { BASE_URL } from "../../core/api/endpoints";

// Retorna a URL completa para exibir imagens ou arquivos vindos do servidor C#, lidando tanto com caminhos relativos quanto com URLs completas.
export const getFileUrl = (fileUri?: string): string | null => {
  if (!fileUri) return null;

  // Se a URI já estiver completa (começa com http ou https), retorna como está
  if (fileUri.startsWith("http://") || fileUri.startsWith("https://")) {
    return fileUri;
  }

  // Remove o "/api" do final da BASE_URL para apontar para a raiz do servidor
  const serverBaseUrl = BASE_URL.replace("/api", "");
  
  // Garante que não haja duplicidade de barras se o fileUri já começar com "/"
  const cleanUri = fileUri.startsWith("/") ? fileUri : `/${fileUri}`;

  return `${serverBaseUrl}${cleanUri}`;
};