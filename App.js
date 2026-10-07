import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Hola from './ejemplos/Hola';
import Props from './ejemplos/Props';
import Contador from './ejemplos/Contador';
import Inmutabilidad from './ejemplos/Inmutabilidad';
import Efectos from './ejemplos/Efectos';
import EjemploAsyncStorage from './ejemplos/AsyncStorage';
import EjemploJSON from './ejemplos/JSON';
import EjemploFlatList from './ejemplos/FlatList';

export default function App() {
  return (
    <View style={styles.pantalla}>
      <StatusBar style="dark" />
      <EjemploFlatList></EjemploFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF'
  },
});
