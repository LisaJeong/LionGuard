import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RadioButton({ isChecked, text, onRadioButtonPress }) {
  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={[styles.radioButtonIconInnerIcon]} />
    ) : null;
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
      <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
      <View style={[styles.radioButtonTextContainer]}>
        <Text style={styles.radioButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 30,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 10,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#000d74",
    height: 20,
    width: 20,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 15,
    width: 15,
    backgroundColor: "#000d74",
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
    backgroundColor: "#ffffff"
  },
  radioButtonText: {
    fontSize: 17,
    color: "#000000"
  },
});