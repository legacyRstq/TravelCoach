import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './components/screens/MapScreen';
import MapListScreen from './components/screens/MapListScreen';
import { setNavigator } from './components/navigationRef';

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    MapList: MapListScreen,
    Карта: MapScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <App 
      ref= {navigator => {
        setNavigator(navigator)
      }}
    />
  );
}

  