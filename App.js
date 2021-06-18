import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './components/screens/MapScreen';
import SightListScreen from './components/screens/SightListScreen';
import { setNavigator } from './components/navigationRef';
import SightScreen from './components/screens/SightScreen';
import Navigate from './components/navigationRef';
import NavigateTab from './components/navigationRef';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <Navigate />
    </NavigationContainer>
  );
}