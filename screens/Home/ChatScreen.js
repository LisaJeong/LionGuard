import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
export default function ProfileScreen(props) {

const { navigation, onPress, title = '< Back' } = props;
const [input, setInput] = React.useState("")

console.log(input)

    return (
      <View style={styles.container}>
        <Pressable onPress={ ()=> navigation.navigate('Home')}>
            <Text style={styles.back_txt}>{title}</Text>
        </Pressable>
        <Text style={styles.title}>Your{"\n"}Commuting{"\n"}Buddies</Text>
        <View style={styles.profiles}>
            <View>
              <Image
                source={require('../../assets/profilePic.jpeg')}
                style={styles.profile_pic}
              />
              <Text style={styles.buddy_name}>Vincent</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/profilePic.jpeg')}
                style={styles.profile_pic}
              />
              <Text style={styles.buddy_name}>Sarah</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/profilePic.jpeg')}
                style={styles.profile_pic}
              />
              <Text style={styles.buddy_name}>David</Text>
            </View>
          </View>
          <View style={styles.chat_container}>
            <View style={{marginBottom: 10}}>
              <Text>Sarah</Text>
              <View style={styles.indiv_chat}>
                <Text>Hello everyone!</Text>
              </View>
            </View>
            <View style={{marginBottom: 10}}>
              <Text>David</Text>
              <View style={styles.indiv_chat1}>
                <Text>Hey I'm at the Broadway gate</Text>
              </View>
            </View>
            <View>
              <View style={styles.reply}>
                <Text>Hey I'm on my way!</Text>
              </View>
            </View>
            <View style={{marginBottom: 10}}>
              <Text>Vincent</Text>
              <View style={styles.indiv_chat1}>
                <Text>No worreis. Take your time</Text>
              </View>
            </View>
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
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      padding: 20
    },
    back_txt: {
        color: '#000d74',
        fontSize: 20,
    },
    title: {
      color: '#000000',
      fontSize: 50,
      letterSpacing: 0.25,
      fontWeight: 'bold',
      marginTop: 10,
    },
    profile_pic: {
      width: 100,
      height: 100,
      borderRadius: 16,
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    btn_container: {
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 8
    },
    profiles: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buddy_name: {
      color: '#000d74',
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    chat_container: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C4D8E2',
      padding: 10,
      marginTop: 20,
    },
    indiv_chat: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#84A4B4',
      padding: 10,
      width: 130,
    },
    indiv_chat1: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#84A4B4',
      padding: 10,
      width: 200,
    },
    indiv_chat1: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#84A4B4',
      padding: 10,
      width: 200,
    },
    reply: {
      borderRadius: 10,
      backgroundColor: '#84A4B4',
      padding: 10,
      width: 120,
      alignSelf: 'flex-end'
    },
    txtInput: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#C4D8E2",
      height: 35
    }
  });
  