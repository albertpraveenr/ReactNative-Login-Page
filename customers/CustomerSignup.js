// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const SignUpScreen = ({ navigation} ) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navi= useNavigation();

  const handleSignUp = () => {
    
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // Replace the console.log with your sign-up logic (e.g., API calls)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button
       title="Sign Up" onPress={handleSignUp} 
       />
      <Text style={styles.compuser2}>Already a User..?</Text>
      <Button

      style={styles.page2}
      title="Login"
      onPress={() => navi.navigate('LoginPage')}
    />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight:'bold'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  page2: {
    position: 'relative',
    top:20,
  },
  compuser2:{
  fontSize:15,
  fontWeight:'bold',

  }
});

export default SignUpScreen;
