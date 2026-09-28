// ================================================
// FORMATAÇÃO DE CPF (000.000.000-00)
// ================================================
export const formatCPF = (text?: string): string => {
    if (!text) return "";
    
    // Remove tudo que não é número e limita a 11 caracteres
    const cleaned = text.replace(/\D/g, "").slice(0, 11);
    
    if (cleaned.length === 0) return "";
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
    if (cleaned.length <= 9) return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;
    
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9)}`;
};

// ================================================
// FORMATAÇÃO DE TELEFONE PROGRESSIVA ((00) 00000-0000)
// ================================================
export const formatPhone = (text?: string): string => {
    if (!text) return "";
    
    const cleaned = text.replace(/\D/g, "").slice(0, 11);
    
    if (cleaned.length === 0) return "";
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
};

// ================================================
// FORMATAÇÃO DE DATA (De YYYY-MM-DD para DD/MM/YYYY)
// ================================================
export const formatDateBR = (dateString?: string): string => {
    if (!dateString) return "";

    // Pega apenas a parte da data (caso venha "2000-01-01T00:00:00")
    const datePart = dateString.split("T")[0];
    const parts = datePart.split("-");

    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString;
};