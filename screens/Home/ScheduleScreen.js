import React from 'react';
import { StatusBar } from 'expo-status-bar';
// Import required components
import { StyleSheet,View,Text } from 'react-native';
import WeeklyList from '../Expandable';

export default function ScheduleScreen(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Schedule</Text>
        <Text style={styles.txt}>You can adjust your schedule here.</Text>
        <WeeklyList />
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 20
    },
    title: {
      color: '#000000',
      fontSize: 50,
      fontWeight: 'bold',
      marginTop: 80
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
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#000000',
    }
  });
  