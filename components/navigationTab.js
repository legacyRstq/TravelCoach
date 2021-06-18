
import React from 'react';
import SightListScreen from './screens/SightListScreen';
import MapScreen from './screens/MapScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function NavigateTab(){
  return (
      <Tab.Navigator>
        <Tab.Screen name="Пам'ятки" component={SightListScreen}  />
        <Tab.Screen name="Карта" component={MapScreen}  />
      </Tab.Navigator>
  );
}
