import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        paddingTop: 50, // Garante espaço para a barra de status
    },
    // Estilos do Cabeçalho
    headerCard: {
        backgroundColor: '#EBF3FF',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    headerTextContainer: {
        flex: 1,
        paddingRight: 12,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 6,
    },
    headerSubTitle: {
        fontSize: 14,
        color: '#4B6B94',
        lineHeight: 18,
    },
    logoCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 40,
        height: 40,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D3D87', 
        marginBottom: 20,
    },
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0', 
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 10,
        backgroundColor: '#EEF3FF', 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 13,
        color: '#718096',
        marginBottom: 2,
    },
    valor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D3D87',
    },
    // Estilos do Botão Refatorados (sem margens negativas)
    editButton: {
        backgroundColor: '#1D3D87',
        paddingVertical: 14,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});