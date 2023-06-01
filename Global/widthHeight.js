import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions, PixelRatio } from 'react-native';

function widthTodp(x) {
  const { width } = Dimensions.get('window');
  return (width*x)/100;
}

function heightTodp(x) {
  const { height } = Dimensions.get('window');
  return (height*x)/100;
}

export {heightTodp, widthTodp};