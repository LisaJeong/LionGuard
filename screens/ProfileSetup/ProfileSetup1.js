import * as React from 'react';
import { Text, Input } from 'react-native-elements'
import { Radio, NativeBaseProvider } from "native-base"
import ProfileStepper from './ProfileStepper';
import ProfileMagic from './ProfileMagic';

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

export default function ProfileSetup1(props) {
  const { navigation } = props;
  return (
    <ProfileMagic step='0' next='Profile Setup 2' navigation={props.navigation}>
      <Text h3 style={{ paddingBottom: 30 }}>Which of the following most accurately describe(s) you?</Text>
      <NativeBaseProvider>
        <GenderRadios style={{ borderWidth: 2, borderColor: 'white', }} />
      </NativeBaseProvider>
    </ProfileMagic>
  );
}