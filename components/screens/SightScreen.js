import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Sight from '../Sight';

const SightScreen = (props, {name}) => {
    const newName = name;
    return(
        <SafeAreaView forceInset={{ top: "always" }}>
            <Sight name={newName}/>
        </SafeAreaView>     
    )
}

export default SightScreen;