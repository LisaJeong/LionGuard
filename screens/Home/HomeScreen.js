import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button, Pressable, Image } from 'react-native';

import Modal from "react-native-modal";
import QRCode from 'react-native-qrcode-svg';
import CountDown from 'react-native-countdown-component';

export default function HomeScreen(props) {
    const { navigation, onPress, title = 'CHECK IN' } = props;
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Welcome, John!</Text>
        <View style={styles.ready}>
          <Text style={styles.scheduled}>
            Ready to {"\n"}
            head home?
          </Text>
        </View>
        <View style={styles.commute_container}>
          <Text style={styles.commute_buddies}>Meet your commuting buddies</Text>
          <View style={styles.profiles}>
            <TouchableOpacity
              style={styles.profile_btn}
              activeOpacity={0.5}
              onPress={ ()=> navigation.navigate('Others')}
            >
            <Image
              source={require('../../assets/profilePic.jpeg')}
              style={styles.profile_btn}
            />
              <Text style={styles.buddy_name}>Vincent</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_btn}
              activeOpacity={0.5}
            >
            <Image
              source={require('../../assets/profilePic.jpeg')}
              style={styles.profile_btn}
            />
              <Text style={styles.buddy_name}>Sarah</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_btn}
              activeOpacity={0.5}
            >
            <Image
              source={require('../../assets/profilePic.jpeg')}
              style={styles.profile_btn}
            />
              <Text style={styles.buddy_name}>David</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.commute_buddies}>Group departs in</Text>
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
          <Image 
            source={require('../../assets/cu_map.png')}
            style={styles.map}
          ></Image>
          <View style={styles.btn_container}>
            <Pressable style={styles.btn} onPress={toggleModal}>
              <Text style={styles.btn_txt}>{title}</Text>
            </Pressable>
            <Modal isVisible={isModalVisible}>
              <View style={styles.modal}>
                <Text style={styles.modal_txt}>Your QR Code</Text>
                <QRCode
                  size={250}
                  value="http://awesome.link.qr"
                />
                <Button title="Close" onPress={toggleModal} />
              </View>
            </Modal>
          </View>
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
      padding: 20,
    },
    greeting: {
      color: '#000000',
      fontSize: 50,
      letterSpacing: 0.25,
      fontWeight: 'bold',
      marginTop: 80,
    },
    ready: {
      alignItems: 'flex-start',
      marginTop: 10,
      marginLeft: 10,
      letterSpacing: 0.25,
    },
    scheduled: {
      color: '#000000',
      fontSize: 40,
      fontWeight: 'bold',
    },
    commute_container: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C4D8E2',
      padding: 10,
      marginTop: 20
    },
    profiles: {
      marginTop: 10,
      marginBottom: 30,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buddy_name: {
      color: '#000d74',
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    commute_buddies: {
      color: '#000d74',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    map: {
      width: 350,
      height: 170,
      borderRadius: 16,
    },
    profile_btn: {
      width: 100,
      height: 100,
      borderRadius: 16,
    },
    commute_time: {
      fontSize: 30,
    },
    btn_container: {
      alignItems: 'center',
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#000d74',
      marginTop: 15,
    },
    btn_txt: {
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#ffffff',
    },
    modal: {
      alignItems: 'center'
    },
    modal_txt: {
      fontSize: 40,
      marginBottom: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#ffffff',
    },
  });
  