import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from './screens/Homescreen/Home';
import About from './screens/AboutScreen/About';
import Profile from './screens/ProfileScreen/Profile';
import Login from './screens/LoginScreen/Login';
import Register from './screens/RegisterScreen/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const Bottom = () => {
      return (
        <Tab.Navigator screenOptions={({ route }) => ({
          headerShown : false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      )
}

const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer >

      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen key='Home' name='Home' component={StackNavigate} />
        <Drawer.Screen key='About' name='About' component={About} />
        <Drawer.Screen key='Profile' name='Profile' component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
