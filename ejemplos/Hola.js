import { StyleSheet, Text, View } from 'react-native';

//Un componente es una función que devuelve lo que se dibuja (JSX)
export default function Hola() {
    const curso = 'Desarrollo de Aplicaciones Móviles';
    return (
        <View style={styles.caja}>
            <Text style={styles.titulo}>Hola UTP</Text>
            <Text style={styles.texto}>2 + 3 = {2 + 3}</Text>
            <Text style={styles.texto}>Curso: {curso}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    caja: { 
        padding: 16, 
        borderRadius: 10, 
        backgroundColor: '#F4F6F8'
    },

    titulo: { 
        fontSize: 24, 
        fontWeight: '700', 
        marginBottom: 8
    },

    texto: { 
        fontSize: 16, 
        marginBottom: 4 
    },
});