import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [mensaje, setMensaje] = useState('');
  const [mostrar, setMostrar] = useState('');

  handleMensaje = (text) => {
    setMensaje(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.lilContainer}>
        <TextInput placeholder='Ingrese texto' onChangeText={handleMensaje} style={{ alignSelf: 'center'}}></TextInput>
        <Button title='PRESIONAME' style={styles.btn} onPress={() => setMostrar(mensaje)}></Button>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5, marginTop: 10, }} />
        <Text style={{ alignSelf: 'center', marginTop:10}}>{mostrar}</Text>
        <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  lilContainer: {
    backgroundColor: "pink",
    borderWidth: 1,
    width: 300,
    height: 200,
    padding: 20,
    margin: 10,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#4287f5',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
