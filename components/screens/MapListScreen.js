import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';

const MapListScreen = ({ navigation }) => {
    return(
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>MapListScreen</Text>
        </SafeAreaView>      
    );
};

export default MapListScreen;