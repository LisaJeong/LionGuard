import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function LoginScreen(props) {
    const { navigation, onPress, title = 'UNI Login' } = props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LionGuard</Text>
        <Pressable style={styles.btn} onPress={ ()=> navigation.navigate('Setup')}>
          <Text style={styles.txt}>{title}</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000d74',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#ffffff',
      fontSize: 50,
      fontWeight: 'bold',
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#ffffff',
      marginTop: 30,
    },
  
    txt: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#000d74',
    }
  });
  