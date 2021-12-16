import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import SetupScreen from './screens/Profile/SetupScreen';
import HomeScreen from './screens/Home/HomeScreen';
import ScheduleScreen from './screens/Home/ScheduleScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import ReportScreen from './screens/Home/ReportScreen';
import ChatScreen from './screens/Home/ChatScreen';
import ReadyScreen from './screens/Home/ReadyScreen';
import OthersProfileScreen from './screens/Home/OthersProfileScreen';

const  Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Ready') {
            iconName = focused ? 'navigate' : 'navigate-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          else if (route.name === 'Others') {
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#AAA',
        tabBarStyle: { backgroundColor: '#000D74' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen name="Ready" component={ReadyScreen}
        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen name="Schedule" component={ScheduleScreen}
        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        screenOptions={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Setup" component={SetupScreen} />
        <Stack.Screen name="HomeTab" component={HomeStack} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Others" component={OthersProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

