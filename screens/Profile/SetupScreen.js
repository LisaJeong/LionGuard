import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import Ionicons from '@expo/vector-icons/Ionicons';

import GenderRegistration from './GenderRegistration'; 
import BuddyPref from './BuddyPref';
import Commute from './Commute';
import Address from './Address';
import PhotoUpload from './PhotoUpload';

//used this for styleguide
//https://www.npmjs.com/package/react-native-progress-steps
const buttonTextStyle = {
  color: '#000d74',
  fontSize: 24,
  marginBottom: 30,
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
          topOffset={80}
          marginBottom={70}
          disabledStepIconColor='#C4D8E2'
          disabledStepNumColor='#C4D8E2'
          progressBarColor='#C4D8E2'
        >
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <GenderRegistration />
          </ProgressStep>
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <BuddyPref />
          </ProgressStep>
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <Commute />
          </ProgressStep>
          <ProgressStep nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
            <Address />
          </ProgressStep>
          <ProgressStep 
            nextBtnTextStyle={buttonTextStyle} 
            previousBtnTextStyle={buttonTextStyle}
            onSubmit={ ()=> navigation.navigate('HomeTab')}
          >
            <PhotoUpload />
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
  });
  