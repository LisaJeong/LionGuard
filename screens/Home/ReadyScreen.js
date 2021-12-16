import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

export default function ReadyScreen(props) {
    const { navigation, onPress} = props;
    return (
      <View style={styles.container}>
        <View style={styles.departure}>
          <Text style={styles.txt}>Group Departs In</Text>
          <CountDown
            until={60 * 9 + 18}
            size={30}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: '#000d74'}}
            separatorStyle={{color: '#000d74'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
        </View>
        <Text style={styles.txt}>Meet Your Buddies At:</Text>
        <Text style={styles.gate}>116 St Broadway Gate</Text>
        <TouchableOpacity style={styles.chat} onPress={ ()=> navigation.navigate('Chat')}>
          <Text style={styles.txt}>Your Commuting Buddies</Text>
          <View style={styles.profiles}>
            <View>
              <Image
                source={require('../../assets/profilePic.jpeg')}
                style={styles.profile_btn}
              />
              <Text style={styles.buddy_name}>Vincent</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/profilePic.jpeg')}
                style={styles.profile_btn}
              />
              <Text style={styles.buddy_name}>Sarah</Text>
            </View>
            <View>
              <Image
                source={require('../../assets/profilePic.jpeg')}
                style={styles.profile_btn}
              />
              <Text style={styles.buddy_name}>David</Text>
            </View>
          </View>
        </TouchableOpacity >
        <Text style={styles.txt}>Your Commute</Text>
        <Image source={require('../../assets/cu_map.png')} style={styles.map} ></Image>
        <Pressable style={styles.leave_btn} onPress={ ()=> navigation.navigate('Home')}>
          <Text style={styles.leave_txt}>Leave Group</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 20,
    },
    departure: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C4D8E2',
      padding: 10,
      marginTop: 80,
      marginBottom: 20
    },
    time: {
      color: "#000d74",
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 40,
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'rgb(185, 217, 235)',
      marginTop: 30,
    },
    txt: {
      fontSize: 25,
      lineHeight: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#000d74',
    },
    gate: {
      color: '#000000',
      fontSize: 30,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      alignSelf: 'center'
    },
    chat: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C4D8E2',
      padding: 10,
      marginTop: 30,
      marginBottom: 20
    },
    profiles: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buddy_name: {
      color: '#000d74',
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    profile_btn: {
      width: 100,
      height: 100,
      borderRadius: 16,
    },
    map: {
      width: 372,
      height: 150,
      borderRadius: 16,
      marginTop: 10,
    },
    leave_btn: {
      alignSelf: 'flex-end',
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderRadius: 10,
      backgroundColor: '#B80000',
      marginTop: 20,
    },
    leave_txt: {
      color: '#ffffff',
      fontSize: 15,
      fontWeight: 'bold'
    },
  });
  