import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
    //contador = valor actual, setContador = función para cambiarlo
    const [contador, setContador] = useState(0);

    return (
        <View>
            <Text style={styles.numero}>Clics: {contador}</Text>
            <View style={styles.fila}>
                <Button title="Sumar" onPress={() => setContador(contador + 1)} />
                <Button title="Restar" onPress={() => setContador(contador - 1)} />
                <Button title="Reiniciar" color="#D7001D" onPress={() => setContador(0)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    numero: { 
        fontSize: 32, 
        fontWeight: '700', 
        marginBottom: 16 
    },

    fila: { 
        flexDirection: 'row', 
        gap: 8 
    },
});