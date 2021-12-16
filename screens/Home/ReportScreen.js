import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';

import RadioButtonContainer from '../Profile/js/RadioButtonContainer';

const report_case = [
  {
    text: "This user didn't show up",
  },
  {
    text: "This user made me feel uncomfortable",
  },
  {
    text: "This user provided a wrong profile photo",
  },
  {
    text: "Others; please specify your case"
  }
]

const onRadioButtonPress = (itemIdx) => {
  console.log("Clicked", itemIdx);
};

export default function ReportScreen(props) {
    const { navigation, onPress, title = 'SUBMIT' } = props;
    const [input, setInput] = React.useState("")
    console.log(input)

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Report A User</Text>
        <Text style={styles.description}>We want you to feel safe when you use our app. As accurately as you can, please tell us what happened with this user. Choose reporting categories:</Text>
        <RadioButtonContainer values={report_case} onPress={onRadioButtonPress} />
        <TextInput 
          style={styles.txtInput}
          onChangeText={text => setInput(text)}
          onSubmitEditing={() => {
            setInput("");
          }}
          value={input}
          placeholder=' Type a message...'
          keyboardType='default'
        ></TextInput>
        <Pressable 
          style={styles.btn} 
          onPress={ ()=> {
            navigation.navigate('Home')
            alert("Report successfully submitted.\nThank you for keeping our community safer.")
          }}>
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
  