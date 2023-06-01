import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Home from './Home';
import About from '../AboutScreen/About';
import Profile from '../ProfileScreen/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Sidebar({navigation}) {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen key='Home' name='Home' component={Home} />
        {/* <Drawer.Screen key='About' name='About' component={About} />
        <Drawer.Screen key='Profile' name='Profile' component={Profile} /> */}
      </Drawer.Navigator>
  )
}