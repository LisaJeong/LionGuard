import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import ReadyPage from './screens/Ready';
import LoginPage from './screens/Login';

export default function App(props) {
  const { onPress, title = 'UNI Login' } = props;
  return (
    <LoginPage></LoginPage>
  );
}
