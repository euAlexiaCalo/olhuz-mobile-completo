// Função para truncar o texto se ele ultrapassar o limite de caracteres
export const truncateText = (str: string, maxLength: number) => {
    if (!str) return '';
    return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
  };