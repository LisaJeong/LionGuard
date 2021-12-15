import * as React from 'react';
import { Text, Image } from 'react-native-elements'
import picFrame from '../../assets/picFrame.png'
import ProfileMagic from './ProfileMagic';

export default function ProfileSetup4(props) {
  const { navigation } = props;
  return (
    <ProfileMagic step='3' back='Profile Setup 3' next='Home' navigation={props.navigation}>
      <Text h3 style={{ paddingBottom: 30 }}>Profile Picture</Text>
      <Image
        source={{ uri: picFrame }}
        style={{ width: 300, height: 300 }}
      />
    </ProfileMagic>
  );
}