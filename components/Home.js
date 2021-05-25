import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>

            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
})

export default Home;