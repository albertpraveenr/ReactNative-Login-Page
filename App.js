import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './customers/customerLogin';
import SignUpScreen from './customers/CustomerSignup';

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
     
        <Stack.Screen name="LoginPage" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUpPage" component={SignUpScreen} options={{headerShown: false}} />
       
   
      </Stack.Navigator>
    </NavigationContainer>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
  },
});
