import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function Form() {
  const navigation = useNavigation();
 return (
    
   <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Avalie seu atendimento</Text>
      </Animatable.View>


        
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.tittle}>
            Nome do médico
        </Text>
        <TextInput style={styles.input}
                placeholder="Nome do profissional"
        />
          <Text style={styles.tittle}>Qual a sua nota de 0 a 10?</Text>
          <TextInput style={styles.input}
               placeholder="Nota"
          />
      
          <Text style={styles.tittle}>Você retornaria para se consultar mais uma vez?</Text>
          <TextInput style={styles.input}
               placeholder = "Sim ou não"
          />

          <TouchableOpacity style={styles.button}
          
            onPress={() => navigation.navigate('Welcome') & Alert.alert('Avaliação enviada com sucesso!', 'Obrigado por nos avaliar!')}
               
            >
            
            <Text style={styles.buttonText}>Enviar avaliação</Text>
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
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  containerForm: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  tittle: {
    fontSize: 20,
    marginTop: 28,

  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#191970',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
});