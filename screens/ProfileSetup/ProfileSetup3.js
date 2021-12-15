import * as React from 'react';
import { Text, Input } from 'react-native-elements'
import ProfileStepper from './ProfileStepper';
import ProfileMagic from './ProfileMagic';

export default function ProfileSetup3(props) {
  const { navigation } = props;
  return (
    <ProfileMagic step='2' back='Profile Setup 2' next='Profile Setup 4' navigation={props.navigation}>
      <Text h3 style={{ paddingBottom: 30 }}>Where do you live?</Text>
      <Text style={{ paddingBottom: 30 }}>You only have to provide a very rough location, like a street number.</Text>
      <Input></Input>
    </ProfileMagic>
  );
}