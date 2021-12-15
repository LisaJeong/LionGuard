import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class RegistrationScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.title}>What is your name?</Text>
      <StatusBar style="auto" />
    </View>
    );
  }
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

export default RegistrationScreen;
