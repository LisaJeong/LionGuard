import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';



const radioButtonsPrefData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Same Gender',
  value: 'Same Gender'
},
{
  id: '2',
  label: 'I’m okay with anyone!',
  value: 'I’m okay with anyone!'
},
]

export default function ProfileScreen(props) {
const { navigation, onPress, title = '< Back' } = props;

    return (
      <View style={styles.container}>
        <Pressable onPress={ ()=> navigation.navigate('Home')}>
            <Text style={styles.back_txt}>{title}</Text>
        </Pressable>
        <Text style={styles.title}>Vincent{"\n"}Van Gogh</Text>
        <Image
          source={require('../../assets/profilePic.jpeg')}
          style={styles.profile_pic}
        />
        <View style={styles.btn_container}>
            <Pressable style={styles.btn}>
                <Text style={styles.txt}>Add Freind</Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text style={styles.txt} onPress={ ()=> navigation.navigate('Report')}>Report</Text>
            </Pressable>
        </View>
        <View style={styles.profile_container}>
            <Text style={styles.profile_txt}>LionGuard member since 10/28</Text>
            <Text style={styles.profile_txt}>3 commutes together recently</Text>
            <Text style={styles.profile_txt}>42 Commutes with LionGuard</Text>
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
      marginTop: 80,
    },
    profile_pic: {
      width: 200,
      height: 200,
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
    profile_container: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C4D8E2',
      padding: 10,
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: 120,
      borderRadius: 6,
      backgroundColor: '#000d74',
    },
    txt: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#ffffff',
    },
    profile_txt: {
      color: '#000d74',
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      lineHeight: 30,
      marginBottom: 5,
    },
    address: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    edit_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    map: {
      width: 352,
      height: 100,
      borderRadius: 16,
    },
  });
  