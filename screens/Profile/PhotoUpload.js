import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function PhotoUpload() {
  const PhotoUpload = (props) => {
      return (
        <View style={styles.view}>
            <Text style={styles.title}>Smile!</Text>
            <Text style={styles.description}>Upload or take a picture</Text>
            <Image style={styles.photo} source={require('../../assets/picFrame.png')} />
            <View style={styles.infobox}>
                <Ionicons name={'alert-circle'} size={40} color={"#000000"}/>
                <Text style={styles.info}>
                    This information will be shared with other members of the community.
                </Text>
            </View>
      </View>
      );
  };
  return <View>{PhotoUpload()}</View>;
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
    photo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20
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