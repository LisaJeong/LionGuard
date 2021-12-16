import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { ListItem } from 'react-native-elements'

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import RadioButtonContainer from './RadioButtonContainer';

//used this for styleguide
//https://www.npmjs.com/package/react-native-progress-steps
const buttonTextStyle = {
  color: '#000d74',
  fontSize: 24,
  marginBottom: 30,
};

const data = [
  {
    text: "Male",
  },
  {
    text: "Female",
  },
];

const pref = [
  {
    text: "Same sex",
  },
  {
    text: "I'm okay with anyone!",
  },
]

const week = [
  {
    day: "Monday",
  },
  {
    day: "Tuesday",
  },
  {
    day: "Wednesday",
  },
  {
    day: "Thursday",
  },
  {
    day: "Friday",
  },
  {
    day: "Saturday",
  },
  {
    day: "Sunday",
  },
]
const onRadioButtonPress = (itemIdx) => {
  console.log("Clicked", itemIdx);
};


export default function SetupScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ProgressSteps
          activeStepIconBorderColor='#979797'
          activeStepIconColor='#000d74'
          completedStepIconColor='#000d74'
          completedProgressBarColor='#000d74'
          topOffset={70}
          marginBottom={100}
          disabledStepIconColor='#C4D8E2'
          disabledStepNumColor='#C4D8E2'
          progressBarColor='#C4D8E2'
        >
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <View style={styles.view}>
              <Text style={styles.title}>Which of the following most accurately describe(s) you?</Text>
                <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
              <View style={styles.infobox}>
                <Text style={styles.info}>
                  This information will be shared with other members of the community.
                </Text>
              </View>
              <View stye={styles.disclaimer}>
                <Text styles={styles.info}>
                  Why do you need to share this information?
                  LionSafe matches users based on their preferences.
                  Our users report they feel much more comfortable by knowing more about their walking companions!
                </Text>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <View style={styles.view}>
              <Text style={styles.title}>Are you comfortable walking with _____?</Text>
              <RadioButtonContainer values={pref} onPress={onRadioButtonPress} />
              <View style={styles.infobox}>
                <Text style={styles.info}>
                  This information will be shared with other members of the community.
                </Text>
              </View>
              <View stye={styles.disclaimer}>
                <Text styles={styles.info}>
                  Why do you need to share this information?
                  LionSafe matches users based on their preferences.
                  Our users report they feel much more comfortable by knowing more about their walking companions!
                </Text>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <View style={styles.view}>
              <Text style={styles.title}>When do you usually commute?</Text>
            </View>
            <View style={{marginBottom: 20}}>
            {
              week.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content style={styles.week}>
                    <ListItem.Title>{l.day}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
          <View stye={styles.disclaimer}>
                <Text styles={styles.info}>
                  Why do you need to share this information?
                  LionSafe matches users based on their preferences.
                  Our users report they feel much more comfortable by knowing more about their walking companions!
                </Text>
              </View>
          </ProgressStep>
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <View style={styles.view}>
              <Text style={styles.title}>Where do you live?</Text>
            </View>
            <TextInput style={styles.txtInput}{...props}
              editable
              maxLength={40}>
            </TextInput>
            <View stye={styles.disclaimer}>
                <Text styles={styles.info}>
                  Why do you need to share this information?
                  LionSafe matches users who live close by.
                  Don't worry! Your private information is safe with us. This information will not get shared with other users.
                </Text>
              </View>
          </ProgressStep>
          <ProgressStep 
            nextBtnTextStyle={buttonTextStyle} 
            previousBtnTextStyle={buttonTextStyle}
            onSubmit={ ()=> navigation.navigate('HomeTab')}
          >
            <View style={styles.view}>
              <Text style={styles.title}>Smile!</Text>
              <Text style={styles.description}>Upload or take a picture</Text>
              <Image style={styles.photo} source={require('../../assets/picFrame.png')} />
              <View style={styles.infobox}>
                <Text style={styles.info}>
                  This information will be shared with other members of the community.
                </Text>
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
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
    title: {
      color: '#000000',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      letterSpacing: 0.25
    },
    description: {
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 40,
      letterSpacing: 0.25
    },
    view: {
      alignItems: 'flex-start',
      margin: 20,
    },
    txt: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#000000',
    },
    photo: {
      width: 250,
      height: 250,
      alignSelf: 'center',
    },
    infobox: {
      marginTop: 30,
      padding: 20,
      width: 345,
      height: 80,
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: 20,
    },
    disclaimer: {      
      marginTop: 30,
      padding: 20,
      width: 370,
      height: 80,
      borderWidth: 1,
      borderRadius: 6,
    },
    week: {
      color: "#000d74"
    },
    txtInput: {
      borderWidth: 2,
      borderRadius: 16,
      borderColor: "#C4D8E2",
      height: 50,
      marginBottom: 20
    }
  });
  