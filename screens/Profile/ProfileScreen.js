import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

import RadioButtonContainer from './js/RadioButtonContainer';

const pref = [
  {
    text: "Same sex",
  },
  {
    text: "I'm okay with anyone!",
  },
]

const onRadioButtonPress = (itemIdx) => {
  console.log("Clicked", itemIdx);
};

export default function ProfileScreen(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>John Smith</Text>
        <Image
          source={require('../../assets/profilePic.jpeg')}
          style={styles.profile_pic}
        />
        <View style={styles.profile_container}>
          <Text style={styles.profile_txt}>Your Commute Preferences</Text>
          <RadioButtonContainer values={pref} onPress={onRadioButtonPress} />
          <Text style={styles.profile_txt}>Your Address</Text>
          <View style={styles.edit_container}>
            <Text style={styles.address}>8 W 108th St, NY</Text>
            <Pressable style={styles.edit_btn}>
              <Text style={styles.edit_btn_txt}>Edit</Text>
            </Pressable>
          </View>
          <Image 
            source={require('../../assets/cu_map.png')}
            style={styles.map}
          ></Image>
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
    title: {
      color: '#000000',
      fontSize: 50,
      letterSpacing: 0.25,
      fontWeight: 'bold',
      marginTop: 80,
    },
    profile_pic: {
      width: 200,
      height: 200,
      borderRadius: 16,
      alignSelf: 'center',
      marginTop: 10,
    },
    profile_container: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C4D8E2',
      padding: 10,
      marginTop: 20,
    },
    profile_txt: {
      color: '#000d74',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    address: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    edit_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 20,
      marginBottom: 10
    },
    edit_btn: {
      width: 50,
      height: 25,
      backgroundColor: '#000d74',
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center'
    },
    edit_btn_txt: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    map: {
      width: 352,
      height: 180,
      borderRadius: 16,
    },
  });
  