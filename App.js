import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import LoginPage from './screens/Login';
import Home from './screens/Home';
import ReadyPage from './screens/Ready';
import ChatPage from './screens/Chat';
import SchduleCommute from './screens/SchduleCommute'; 
import ProfileSetup1 from './screens/ProfileSetup/ProfileSetup1';
import ProfileSetup2 from './screens/ProfileSetup/ProfileSetup2';
import ProfileSetup3 from './screens/ProfileSetup/ProfileSetup3';
import ProfileSetup4 from './screens/ProfileSetup/ProfileSetup4';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Ready') {
            iconName = focused ? 'navigate' : 'navigate-outline';
          } else if (route.name === 'Schdule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schdule" component={SchduleCommute} />
      <Tab.Screen name="Ready" component={ReadyPage} />
    </Tab.Navigator>
  );
}

export default function App(props) {
  const { onPress, title = 'UNI Login' } = props;
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Profile Setup 1" component={ProfileSetup1} />
        <Stack.Screen name="Profile Setup 2" component={ProfileSetup2} />
        <Stack.Screen name="Profile Setup 3" component={ProfileSetup3} />
        <Stack.Screen name="Profile Setup 4" component={ProfileSetup4} />
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Chat" component={ChatPage} options={{ title: 'Team', headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
