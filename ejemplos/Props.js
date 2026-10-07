import { StyleSheet, Text, View } from 'react-native';

//Componente hijo: recibe datos por props (como parámetros de una función)
function Tarjeta({nombre, carrera}) {
    return (
        <View style={styles.tarjeta}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.carrera}>{carrera}</Text>
        </View>
    );
}

//Componente padre: usa el mismo hijo dos veces con datos distintos
//Entrega los valores al escribir <Tarjeta nombre="..." carrera="..." />
export default function Props() {
    return (
        <View>
            <Tarjeta nombre="Ana" carrera="Ingeniería de Software" />
            <Tarjeta nombre="Luis" carrera="Ingeniería de Sistemas" />
            <Tarjeta nombre="Alonso" carrera="Ingeniería de Software" />
        </View>
    );
}

const styles = StyleSheet.create({
    tarjeta: { 
        padding: 14, 
        marginBottom: 10, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#D5DBE1' 
    },

    nombre: { 
        fontSize: 18, 
        fontWeight: '700' 
    },

    carrera: { 
        fontSize: 14, 
        color: '#5F6B7A' 
    },
});