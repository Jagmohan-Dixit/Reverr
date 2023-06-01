import { View, Text } from 'react-native';
import React from 'react';

export default function Profile({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation?.openDrawer()}>This is Profile Page</Text>
    </View>
  )
}