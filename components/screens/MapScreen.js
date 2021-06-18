import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../Map';

const MapScreen = () => {
    return(
        <SafeAreaView forceInset={{ top: "always" }}>
            <Map />
        </SafeAreaView>      
    );
};

export default MapScreen;