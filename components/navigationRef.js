import { NavigationActions } from 'react-navigation';
import React from 'react';
import {View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SightScreen from '../components/screens/SightScreen';
import SightListScreen from './screens/SightListScreen';
import MapScreen from './screens/MapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigateTab from './navigationTab';


const Stack = createStackNavigator();

export default function Navigate(){
  return (
      <Stack.Navigator>
        <Stack.Screen name="Пам'ятки" component={NavigateTab} />
        <Stack.Screen name="Карта" component={MapScreen} />
        <Stack.Screen name="Пам'ятка" component={SightScreen} />
      </Stack.Navigator>
  );
}

