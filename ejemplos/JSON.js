import { StyleSheet, Text, View } from 'react-native';

export default function EjemploJSON() {
    const lista = [
        //done = marcado como completado
        { id: '1', title: 'Leche', done: false },
        { id: '2', title: 'Pan', done: true },
    ];

    const texto = JSON.stringify(lista); //arreglo -> texto
    const deVuelta = JSON.parse(texto); //texto -> arreglo
    console.log('[JSON] tipo de texto:', typeof texto);
    console.log('[JSON] texto:', texto);
    console.log('[JSON] primer título:', deVuelta[0].title);

    return (
        <View>
            <Text style={styles.etiqueta}>
                1. JSON.stringify(lista) devuelve un {typeof texto}:
            </Text>
            <Text style={styles.codigo}>
                {texto}
            </Text>
            <Text style={styles.etiqueta}>
                2. JSON.parse(texto) devuelve un arreglo de {deVuelta.length} elementos:
            </Text>
            <Text style={styles.codigo}>
                deVuelta[0].title = {deVuelta[0].title}
            </Text>
            <Text style={styles.codigo}>
                deVuelta[1].done = {String(deVuelta[1].done)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    etiqueta: { 
        fontSize: 16, 
        fontWeight: '700', 
        marginTop: 12 
    },
    
    codigo: {
        fontFamily: 'monospace', 
        fontSize: 14, 
        backgroundColor: '#F4F6F8', 
        padding: 8, 
        marginTop: 6,
        borderRadius: 6
    },
});