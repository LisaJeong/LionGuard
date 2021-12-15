import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function LoginPage(props) {
  const { navigation, onPress, title = 'UNI Login' } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> LionGuard</Text>
      <Pressable style={styles.btn} onPress={ ()=> navigation.navigate('Profile Setup 1')}>
        <Text style={styles.txt}>{title}</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(185, 217, 235)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000d74',
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
    backgroundColor: '#000d74',
    marginTop: 30,
  },

  txt: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
  }
});
