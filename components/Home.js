import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
        <Text> TEst text </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: 'center',
        justifyContent: 'center'
    },
})

export default Home;