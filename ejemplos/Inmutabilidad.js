import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Inmutabilidad() {
    const [nombres, setNombres] = useState(['Ana']);

    //MAL: modifica (muta) el MISMO arreglo. React no ve un cambio y no redibuja
    const agregarMal = () => {
        nombres.push('Mutado');
        setNombres(nombres);
        console.log('[MAL] arreglo en memoria:', nombres);
    };

    //BIEN: crea un arreglo NUEVO con "..." (spread). React sí redibuja
    const agregarBien = () => {
        const nuevo = [...nombres, 'Copia'];
        setNombres(nuevo);
        console.log('[BIEN] arreglo nuevo:', nuevo);
    };

    return (
        <View>
            <Text style={styles.titulo}>En pantalla ({nombres.length}):</Text>
            <Text style={styles.lista}>{nombres.join(', ')}</Text>
            <View style={styles.fila}>
                <Button title="Agregar (mal)" color="#C62828" onPress={agregarMal} />
                <Button title="Agregar (bien)" color="#1E8E3E" onPress={agregarBien} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: { 
        fontSize: 18, 
        fontWeight: '700' 
    },

    lista: { 
        fontSize: 16, 
        marginVertical: 12 
    },

    fila: { 
        flexDirection: 'row', 
        gap: 8 
    },
});