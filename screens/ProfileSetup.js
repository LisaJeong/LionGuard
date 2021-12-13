import * as React from 'react';
import { View, Text } from 'react-native';
import { Stepper, Step } from 'react-form-stepper';

const styleConfig = {
  "activeBgColor": "#C4D8E2"
};

export default function ProfileSetup() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Stepper  
        activeStep={0}
        connectorStateColors
      >
        <Step styleConfig={styleConfig}  label="Gender" />
        <Step styleConfig={styleConfig} label="Preference" />
        <Step styleConfig={styleConfig} label="Destination" />
        <Step styleConfig={styleConfig} label="Profile Pic" />
      </Stepper>
      <Text>ProfileSetup Screen</Text>
    </View>
  );
}