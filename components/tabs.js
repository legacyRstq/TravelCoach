import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Sight from './Sight'; 

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel: false, 
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: 'white',
                borderRadius: 15,
                height: 90,
                ...style.shadow
                }
        }}>
            <Tab.Screen name="Sight" component={Sight} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source={require('../assets/map.png')}

                        style={{
                            resizeMode: 'contain',
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>SIGHT</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Map" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                        source={require('../assets/map.png')}

                        style={{
                            resizeMode: 'contain',
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}/>
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize:12}}>MAP</Text>
                    </View>
                ),
            }}/>

        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;