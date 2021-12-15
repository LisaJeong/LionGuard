import * as React from 'react';
import { Text, Input } from 'react-native-elements'
import { Radio, NativeBaseProvider } from "native-base"
import ProfileMagic from './ProfileMagic';

const GenderRadios = () => {
  const [value, setValue] = React.useState("ok")
  return (
    <Radio.Group
      name="genderRadioGroup"
      accessibilityLabel="your preferred walking companion"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
      style={{
        justifyContent: "space-between"
      }}
    >
      <Radio value="ok" my={5} onClick={(e) => radioHandler(0)}>
        I'm okay with anyone!
      </Radio>
      <Radio value="same" my={5} onClick={(e) => radioHandler(0)} >
        Same Gender
      </Radio>

    </Radio.Group>
  )
}

export default function ProfileSetup2(props) {
  const { navigation } = props;
  return (
    <ProfileMagic step='1' back='Profile Setup 1' next='Profile Setup 3' navigation={props.navigation}>
      <Text h3 style={{ paddingBottom: 30 }}>Are you comfortable walking with _____?</Text>
      <NativeBaseProvider>
        <GenderRadios style={{ borderWidth: 2, borderColor: 'white', }} />
      </NativeBaseProvider>
    </ProfileMagic>
  );
}