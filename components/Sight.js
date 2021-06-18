import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Sight = (props, {navigation}) => {
    return(
        <ScrollView>
            <Text>{props.name}</Text>
        </ScrollView>     
    )
}

export default Sight;