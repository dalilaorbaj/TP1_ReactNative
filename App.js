import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [mensaje, setMensaje] = useState('');
  const [mostrar, setMostrar] = useState('');
  const [counter, setCounter] = useState(0);


  handleMensaje = (text) => {
    setMensaje(text)
  }

  counterCaracteres = () =>{
    setCounter(counter+1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.lilContainer}>
        <TextInput placeholder='Ingrese texto' onChangeText={{handleMensaje, counterCaracteres}} style={{ alignSelf: 'center'}}></TextInput>
        <Text style={{ alignSelf: 'right', marginTop:5}}>{counter}</Text>
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
