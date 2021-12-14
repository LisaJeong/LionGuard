import * as React from 'react';
import { View } from 'react-native';
import { Stepper, Step } from 'react-form-stepper';
import { ThemeProvider, Button, Text, Input } from 'react-native-elements'
import { Radio, NativeBaseProvider } from "native-base"

const styleConfig = {
  "activeBgColor": "#C4D8E2",
  "completedBgColor": "#000D74"
};

const theme = {
  Button: {
    type: "outline",
    titleStyle:{
      color: "#000D74",
    },
    buttonStyle:{
      borderColor: '#000D74',
      backgroundColor: "alpha(0,0,0,255)",
      flex: 1,
      width: "30vw",
      maxWidth: "300px"
    }
  },
  Radio: {
    flex: 1,
    border: "1em red solid"
  }
};

export function ProfileStepper(props) {
  return (
    <Stepper
      style={{ flex: 1 }}
      activeStep={props.activeStep}
      completed={props.completed}
      connectorStateColors
      connectorStyleConfig={{
        stepSize: 10,
        nonLinear: true,
        size: 3,
        activeColor: "#C4D8E2",
        completedColor: "#000D74"
      }}
    >
      {/* This package is so weird. The connecting lines between the steps depend on the label lengths... */}
      {/* This is a disgusting woraround, TODO: find an alternative*/}

      <Step styleConfig={styleConfig} label="&nbsp;&nbsp;Gender&nbsp;&nbsp;" />
      <Step styleConfig={styleConfig} label="&nbsp;Peference&nbsp;" />
      <Step styleConfig={styleConfig} label="Destination" />
      <Step styleConfig={styleConfig} label="&nbsp;&nbsp;Picture&nbsp;&nbsp;" />
    </Stepper>
  );
}

export function GenderInput(){
  return(
    <Input></Input>
  );
}

export const GenderRadios = () => {
  const [value, setValue] = React.useState("female")
  const [status, setStatus] = React.useState(0)
  const radioHandler = (status) => {
    setStatus(status);
  };
  return (
    <Radio.Group
      name="genderRadioGroup"
      accessibilityLabel="your gender"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
      style={{
        justifyContent: "space-between"
      }}
    >
      <Radio value="female" my={5} onClick={(e) => radioHandler(0)} >
        Female
      </Radio>
      <Radio value="male" my={5} onClick={(e) => radioHandler(0)}>
        Male
      </Radio>
      <Radio value="custom" my={5} onClick={(e) => radioHandler(1)}>
      <Input placeholder="custom" />
      </Radio>
      
    </Radio.Group>
  )
}

export default function ProfileSetup(props) {
  const { navigation } = props;
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: "1em" }}>

        <ProfileStepper activeStep='0' completed='0' />

        <View style={{ flex: 10 }}>
          <Text h3 style={{paddingBottom: 30}}>Which of the following most accurately describe(s) you?</Text>
          <NativeBaseProvider>
            <GenderRadios style={{ borderWidth: 2, borderColor: 'white', }}/>
          </NativeBaseProvider>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontWeight: 'bold' }}>Why do you need to share this information?</Text>
          <Text style={{ color: 'green' }}>Our users generally feel more comfortable knowing more about their walking companions!</Text>
        </View>
        <View style={{ width: "100%", flex: 2, alignItems: 'center', justifyContent: "space-evenly", flexDirection: "row" }}>
          <Button
            title="Back"
            disabled
          />
          <Button
            title="Next"
            onPress={ ()=> navigation.navigate('Home')}
          />
        </View>
      </View>
    </ThemeProvider>
  );
}