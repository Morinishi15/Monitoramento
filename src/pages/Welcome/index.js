import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Welcome() {
 return (
   <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image 
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={{width: '100%'}}
        resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.tittle}>
          Monitore e organize sua equipe de forma simples e eficiente
        </Text>
        <Text style={styles.text}>
          Faça login para começar
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>


   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#191970',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: '5%',
    paddingEnd: '5%',
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',

  },
  button: {
    position: 'absolute',
    backgroundColor: '#191970',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
