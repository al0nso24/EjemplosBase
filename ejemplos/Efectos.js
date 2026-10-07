import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Componente hijo con un efecto de montaje y su limpieza
function Mensaje() {
    useEffect(() => {
        console.log('[Mensaje] montado (apareció en pantalla)');
        return () => console.log('[Mensaje] desmontado (limpieza)');
    }, []); //[] = solo al aparecer y al desaparecer
    return <Text style={styles.mensaje}>Soy el componente Mensaje</Text>;
}

export default function Efectos() {
    const [contador, setContador] = useState(0);
    //Empieza con true porque el mensaje al principio sí se ve
    const [visible, setVisible] = useState(true);

    //Se ejecuta al inicio y cada vez que cambia "contador"
    useEffect(() => {
        console.log('[Efectos] contador cambió a', contador);
    }, [contador]);

    return (
        <View>
            <Text style={styles.numero}>Contador: {contador}</Text>
            <View style={styles.fila}>
                <Button title="Sumar" onPress={() => setContador(contador + 1)} />
                <Button title={visible ? 'Ocultar Mensaje' : 'Mostrar Mensaje'} onPress={() => setVisible(!visible)} />
            </View>
            {visible && <Mensaje />}
        </View>
    );
}

const styles = StyleSheet.create({
    numero: { 
        fontSize: 24, 
        fontWeight: '700', 
        marginBottom: 12 
    },

    fila: { 
        flexDirection: 'row', 
        gap: 8, 
        marginBottom: 12 
    },

    mensaje: { 
        fontSize: 16, 
        padding: 12, 
        backgroundColor: '#E6F4EA', 
        borderRadius: 8 
    },
});