import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>FIAP Corporation</Text>
        <Text>Aplicativo de exemplo com duas telas.</Text>
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