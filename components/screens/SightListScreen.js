import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import WindowToSight from '../WindowToSight';

const SightListScreen = () => {
    return(
        <SafeAreaView style={styles.WTS} forceInset={{ top: "always" }}>
            <ScrollView > 
                <WindowToSight name="Біла альтанка" image={{uri: 'https://photos.drymba.com/drb/001/016/26670_296_ht8oj1.jpg'}} />
                <WindowToSight name="Пам'ятник Шевченко Т.Г." image={{uri: 'https://uk.yonik.me/images/0/347/monument-to-taras-shevchenko-01.jpg'}}/>
                <WindowToSight name="Краэзнавчий музей" image={{uri: 'https://photos.drymba.com/drb/001/002/25226_d86_ht8o44.jpg'}}/>
            </ScrollView>
        </SafeAreaView>      
    );
};

const styles = StyleSheet.create({
    WTS: {
        flex: 1,
        alignItems: "stretch",
    },
})

export default SightListScreen;