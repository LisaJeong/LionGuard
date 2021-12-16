import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";


export default function Address() {
    const [input, setInput] = React.useState("")
    console.log(input)

    const Address = (props) => {
      return (
        <View style={styles.view}>
            <Text style={styles.title}>Where do you live?</Text>
            <View>
            <TextInput 
                style={styles.txtInput}
                onChangeText={text => setInput(text)}
                onSubmitEditing={() => {
                    console.log(input);
                    setInput("");
                }}
                value={input}
                placeholder=' Type a message...'
                keyboardType='default'
            >
            </TextInput>
            </View>
            <View>
                <Image 
                    source={require('../../assets/cu_map.png')}
                    style={styles.map}>
                </Image>
            </View>
            <Text styles={styles.disclaimer}>
                Why do you need to share this information?{"\n"}
                LionSafe matches users who live close by.
                Don't worry! Your private information is safe with us. This information will not get shared with other users.
            </Text>
        
        </View>
      );
  };
  return <View>{Address()}</View>;
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'flex-start',
        padding: 20,
    },
    title: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        letterSpacing: 0.25
    },
    infobox: {
        marginTop: 30,
        padding: 10,
        width: 345,
        height: 80,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        letterSpacing: 0.25,
    },
    disclaimer: {      
        color:"#979797"
    },
    map: {
        height: 230,
        width: 335,
        borderRadius: 16,
        marginBottom: 20,
    },
    txtInput: {
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#C4D8E2",
        height: 50,
        width: 335,
        marginBottom: 20
      },
})