import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Registration';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  


