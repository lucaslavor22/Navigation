import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Página Princial do nosso APP</Text>
        <Button
          title="Clique aqui para saber mais sobre o APP"
          onPress={() => navigation.navigate('About')}/>
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