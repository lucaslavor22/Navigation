import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import imgGravitation from '../assets/image.png'

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Lei da gravidade</Text>
        <Image source={imgGravitation}/>
        <Button
          title="Clique para resolver qualquer cálculo desta lei"
          onPress={() => navigation.navigate('About')}/>
        <StatusBar style="auto"/>
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