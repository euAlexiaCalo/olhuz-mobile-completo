import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#1D3D87',
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#ddd',
        fontSize: 12,
        marginTop: 5,
    },
    iconPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        opacity: 0.9,
    },
    contentContainer: {
        padding: 20,
    },
    rowSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    sectionBlock: {
        marginVertical: 12,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        marginBottom: 10,
    },
    botoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        gap: 10,
    },
    buttonBadge: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 20,
    },
    buttonPill: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 20,
        flex: 1, 
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#1D3D87',
    },
    buttonText: {
        color: '#333',
        fontWeight: '500',
        fontSize: 15,
    },
    buttonTextActive: {
        color: '#fff',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 5,
    },
    sliderControl: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#666',
        paddingHorizontal: 5,
    },
    
    sliderComponent: {
        flex: 1,
        height: 40,
    },
    mainTitlee: {
        fontWeight: 'bold',
        color: '#000',
        marginTop: 25,
        marginBottom: 5,
        fontSize: 20,
    },                  
    RowSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12, 
    },
    sectionTitleNoMargin: {
        fontSize: 16,
        color: '#333', 
        fontWeight: '500',
    },
});