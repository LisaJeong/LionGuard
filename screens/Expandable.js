// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import { Center } from 'native-base';
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
            <Text style={styles.text}>
              {key}. {item.val}
            </Text>
            <View/>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const WeeklyList = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
              }}>
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WeeklyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#000d74',
    padding: 10,
    height: 60,
    borderRadius: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 4
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Monday',
    subcategory: [
      { id: 1, val: '7:00 PM' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Tuesday',
    subcategory: [
      { id: 4, val: '5:25 PM' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Wednesday',
    subcategory: [
      { id: 7, val: 'N/A' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Thursday',
    subcategory: [
      { id: 10, val: '9:15 PM' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Friday',
    subcategory: [
      { id: 13, val: '2:00 PM' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Saturday',
    subcategory: [
      { id: 17, val: 'N/A' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Sunday',
    subcategory: [{ id: 20, val: 'N/A' }],
  },
];
