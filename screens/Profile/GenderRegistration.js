import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import RadioButtonContainer from './js/RadioButtonContainer';

const data = [
    {
      text: "Male",
    },
    {
      text: "Female",
    },
  ];

const onRadioButtonPress = (itemIdx) => {
    console.log("Clicked", itemIdx);
};
  

export default function GenderRegistration() {
  const GenderRegistration = () => {
      return (
        <View style={styles.view}>
            <Text style={styles.title}>Which of the following most accurately describe(s) you?</Text>
            <View>
            <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
            </View>
            <View style={styles.infobox}>
              <Ionicons name={'alert-circle'} size={40}color={"#000000"}/>
              <Text style={styles.info}>
                  This information will be shared with other members of the community.
              </Text>
            </View>
            <View>
              <Text style={styles.disclaimer}>
                Why do you need to share this information?
                LionSafe matches users based on their preferences.
                Our users report they feel much more comfortable by knowing more about their walking companions!
              </Text>
            </View>
      </View>
      );
  };
  return <View>{GenderRegistration()}</View>;
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
        marginLeft: 5,
      },
      disclaimer: {      
        color:"#979797"
      },
})