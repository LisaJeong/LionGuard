import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';

export default function ReportScreen(props) {
    const { navigation, onPress, title = 'SUBMIT' } = props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Report A User</Text>
        <Text style={styles.description}>We want you to feel safe when you use our app. As accurately as you can, please tell us what happened with this user. Choose reporting categories:</Text>
        <TextInput style={styles.txtInput}{...props}
          editable
          maxLength={40}>
        </TextInput>
        <Pressable style={styles.btn} onPress={ ()=> navigation.navigate('Home')}>
          <Text style={styles.txt}>{title}</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 20
    },
    title: {
      color: '#000000',
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 80,
      marginBottom: 10
    },
    description: {
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      lineHeight: 30
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
    },
    txtInput: {
      borderWidth: 2,
      borderRadius: 16,
      borderColor: "#C4D8E2",
      height: 150
    }
  });
  