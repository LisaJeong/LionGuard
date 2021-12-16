import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';

import WeeklyList from "../Expandable";

export default function Commute() {
  const Commute = () => {
      return (
        <View style={styles.view}>
            <Text style={styles.title}>When do you{"\n"}usually go home?</Text>
            <View>
                <Text style={styles.disclaimer}>
                    LionSafe matches users based on their weekly schedule.
                </Text>
              <WeeklyList />
            </View>
        </View>
      );
  };
  return <View>{Commute()}</View>;
}

const styles = StyleSheet.create({
    view: {
        padding: 20,
      },
      title: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25
      },
      disclaimer: {      
        color:"#000000",
        marginBottom: -15
      },
})