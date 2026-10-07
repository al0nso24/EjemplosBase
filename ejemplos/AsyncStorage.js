import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLAVE = 'nombreUsuario';

export default function EjemploAsyncStorage() {
    const [texto, setTexto] = useState(''); //lo que se escribe
    const [guardado, setGuardado] = useState(null); //lo que hay en el disco

    //Al abrir: leer lo que haya guardado
    useEffect(() => {
        const leer = async () => {
            const valor = await AsyncStorage.getItem(CLAVE);
            console.log('[LEER al abrir]', valor);
            setGuardado(valor);
        };
        leer();
    }, []);

    const guardar = async () => {
        await AsyncStorage.setItem(CLAVE, texto);
        console.log('[GUARDAR]', texto);
        setGuardado(texto);
        setTexto('');
    };

    const borrar = async () => {
        await AsyncStorage.removeItem(CLAVE);
        console.log('[BORRAR] clave eliminada');
        setGuardado(null);
    };

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                value={texto}
                onChangeText={setTexto}
            />
            <View style={styles.fila}>
                <Button title="Guardar" onPress={guardar} />
                <Button title="Borrar" color="#C62828" onPress={borrar} />
            </View>
            <Text style={styles.resultado}>
                En el disco: {guardado === null ? '(nada guardado)' : guardado}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: { 
        borderWidth: 1, 
        borderColor: '#D5DBE1', 
        borderRadius: 8, 
        padding: 10, 
        fontSize: 16, 
        marginBottom: 10 
    },
    
    fila: { 
        flexDirection: 'row', 
        gap: 8, 
        marginBottom: 12 
    },

    resultado: { 
        fontSize: 18, 
        fontWeight: '600' 
    },
});