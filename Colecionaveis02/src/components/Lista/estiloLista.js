import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItem: {
        flex: 1,
        backgroundColor: '#92afd7',
    },
    itemTitulo: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },
    itemSubtitulo: {
        fontSize: 16,
        textAlign: 'center',
    },
    itemFoto: {
        width: '50%',
        height: 300,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 95,
        marginRight: 95
    },
});

export default estiloLista;