import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SignUpScreen from './CustomerSignup';


import { useNavigation } from '@react-navigation/native';








const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // Here, you can add your logic for authentication
    console.log(`Email: ${email}, Password: ${password}`);
    // Replace the console.log with your authentication logic (e.g., API calls)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleLogin} />
 <Text style={styles.compuser1}>New User..?</Text>
      <Button
      style={styles.page1}
      title="Sign Up"
      onPress={() => navigation.navigate('SignUpPage')}
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
  page1:{
    
    position:'relative',
    left:100,

  },
  compuser1:{
    fontSize:15,
    fontWeight:'bold',
  
    }
   
});

export default LoginScreen;
