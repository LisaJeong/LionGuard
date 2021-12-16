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
  const [prefButtons, setPrefButtons] = useState(radioButtonsPrefData);

  function onPressRadioButton(radioButtonsArray) {
    setPrefButtons(radioButtonsArray);
  }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>John Smith</Text>
        <Image
          source={require('../../assets/profilePic.jpeg')}
          style={styles.profile_pic}
        />
        <View style={styles.profile_container}>
          <Text style={styles.profile_txt}>Your Commute Preferences</Text>
          
          <RadioGroup
            radioButtons={prefButtons} 
            onPress={onPressRadioButton}
          />
          <Text style={styles.profile_txt}>Your Address</Text>
          <View style={styles.edit_container}>
            <Text style={styles.address}>8 W 108th St, NY</Text>
            <Button title="Edit" />
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
      justifyContent: 'space-around',
      marginBottom: 5
    },
    map: {
      width: 352,
      height: 180,
      borderRadius: 16,
    },
  });
  