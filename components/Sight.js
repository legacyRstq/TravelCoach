import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Sight = () => {
    return (
        <View style = {styles.container}>
            <Image source={require('../assets/london.png')} style = {styles.imageOfSight}/>
            <Text style = {styles.descOfSight}> Big Ben is a tower clock known for its accuracy and for its massive hour bell. Strictly speaking, the name refers only to the bell, which weighs 15.1 tons (13.7 metric tons), but it is commonly associated with the whole clock tower at the northern end of the Houses of Parliament, in the London borough of Westminster. 
            The clock was designed by Edmund Beckett Denison (later Sir Edmund Beckett and Lord Grimthorpe) in association with Sir George Airy (then astronomer royal) and the clockmaker Edward Dent. Denison’s principal contribution was a novel gravity escapement that imparted unprecedented accuracy to the clock. In a pendulum clock an escape wheel is allowed to rotate through the pitch of one tooth for each double swing of the pendulum and to transmit an impulse to the pendulum to keep it swinging. 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nameOfSight:{

    },
    container:{
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    imageOfSight:{
        marginTop: 25,
        marginLeft: 20,
    },
    descOfSight: {
        marginTop: 30,
        marginLeft: 15,
        marginRight:15,
        alignSelf: 'stretch',
        fontSize: 15,
        marginBottom: 200
    }
})

export default Sight;