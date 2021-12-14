import React from 'react';
import { Icon, Button } from 'react-native-elements'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Pressable, SafeAreaView, FlatList, Dimensions } from 'react-native';

export default function ReadyPage(props) {
  const { onPress, title = 'John' } = props;
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}> Welcome, {title}</Text> */}
      <View style={styles.card}>
        <Text style={styles.card_caption}>Group departs in:</Text>
        <Text style={styles.card_title}>10:00</Text>
      </View>
      <Text style={styles.subtitle}>Meet your team at:</Text>
      <Pressable style={styles.btn_location}>
          <Icon
            name="map-marker"
            type='font-awesome'
            size={18}
            color='#B9D9EB'
            marginHorizontal={4}
          />
          <Text style={styles.outline_btn_txt_underline}>116 St Broadway entrance</Text>
      </Pressable>
      <Pressable style={styles.outile_btn} onPress={onPress}>
        <Text style={styles.outline_btn_txt}>Review Your Preferences</Text>
      </Pressable>
      <View style={styles.card}>
        <View style={styles.card_header_container}>
          <Text style={styles.card_caption}>Your Columbia Team:</Text>
          <View style={styles.card_header_container}>
            <Icon name="map-marker"
              type='font-awesome'
              size={12}
              color='green'
              marginHorizontal={4} />
            <Text style={styles.card_caption_green}>2 new messages!</Text>
          </View>
        </View>
        <View style={styles.card_header_container} marginTop={8}>
          <FlatList
            horizontal={true}
            data={[
              { key: 'Temo' },
              { key: 'Lisa' },
              { key: 'Xinyang' },
              { key: 'Andreas' },
            ]}
            renderItem={({ item }) => <Button
              type='clear'
              icon={
                <Icon
                  name="user"
                  type='font-awesome'
                  size={40}
                  color='#B9D9EB'
                  marginHorizontal={4}
                />
              }
            />
            }
          />
        </View>
      </View>
      <Text style={styles.subtitle}>Todays' commute:</Text>
      <View style={styles.map_container}>
      <MapView style={styles.map} />
      </View>
      <Pressable style={styles.btn_leave} onPress={onPress}>
        <Text style={styles.txt}>Leave group</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'normal',
    alignSelf: 'flex-start',
    marginHorizontal: 8,
  },
  location_link: {
    color: '#000D74',
    fontSize: 18,
    fontWeight: 'normal',
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginHorizontal: 8,
  },

  btn_leave: {
    marginHorizontal: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderColor: 'red',
    borderWidth: 1,
    elevation: 3,
  },
  outile_btn: {
    marginHorizontal: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 1,
    elevation: 3,
  },

  txt: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
  },
  outline_btn_txt: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000D74',
  },
  outline_btn_txt_underline: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000D74',
    textDecorationLine: 'underline',
  },
  btn_location: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    padding: 8,
    direction: 'horizontal',
  },

  card: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    padding: 8,
    marginVertical: 20,
    marginHorizontal: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#afafaf'
  },
  card_header_container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card_caption: {
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: '#000D74',
  },
  card_caption_green: {
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'green',
  },
  card_title: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000D74',
    alignSelf: 'center'
  },

  map_container: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 4,
  },
  map: {
    borderRadius: 12,
    alignSelf: 'center',
    flex: 1,
    width: Dimensions.get('window').width - 16,
  },
});
