import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';


export default function About({ navigation }) {

  const [massa, setMassa] = useState('');
  const [resultado, setResultado] = useState(null)

  const calcularGravidade = () => {
    const g = 10;
    const m = parseFloat(setMassa)
  }
    return (
      <View style={styles.container}>
        <Text>Calcular a lei gravitacional</Text>
        <Text>Digite a massa do objeto: </Text>
        <Input></Input>
        
        <Button
          title="Sair"
          onPress={() => navigation.goBack()}/>
        <StatusBar style="auto" />
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
  });