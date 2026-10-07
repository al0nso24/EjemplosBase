import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

//Arreglo de frutas
const frutas = [
    { id: 'a1', nombre: 'Manzana' },
    { id: 'b2', nombre: 'Plátano' },
    { id: 'c3', nombre: 'Mango' },
    { id: 'd4', nombre: 'Fresa' },
    { id: "e5", nombre: "Sandía"}
];

export default function EjemploFlatList() {
    const [datos, setDatos] = useState(frutas); //guarda la lista de frutas

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.fila}>
                {/*setDatos([]) = lista vacía*/}
                <Button title="Vaciar" color="#C62828" onPress={() => setDatos([])} />
                {/*setDatos(frutas) = devuelve la lista de las frutas*/}
                <Button title="Restaurar" onPress={() => setDatos(frutas)} />
            </View>
            <FlatList
                data={datos} //el arreglo de frutas
                keyExtractor={(item) => item.id} //clave única
                //item = cada objeto de la lista
                //index  = la posición del elemento
                renderItem={({ item, index }) => (
                    <Text style={styles.item}>{index + 1}. {item.nombre}</Text>
                )}
                //Por si la lista está vacía
                ListEmptyComponent={<Text style={styles.vacio}>No hay frutas.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fila: { 
        flexDirection: 'row', //los botones se ponen en fila
        gap: 8, 
        marginBottom: 12 
    },

    item: {
        fontSize: 18, 
        padding: 12, 
        marginBottom: 6, 
        backgroundColor: '#F4F6F8',
        borderRadius: 8
    },

    vacio: { 
        fontSize: 16, 
        color: '#5F6B7A', 
        textAlign: 'center', 
        marginTop: 24
    },
});