import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';




const WindowToSight = (props) => {
    
const navigation = useNavigation(); 
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Пам'ятка", {name: "name"})}>
        <View style={styles.window}>
            <Image  style={styles.image} source={props.image}/>
            <Text style={styles.text}>{props.name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    window: {
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'flex-start',
        height: 100,
        backgroundColor: 'snow',
        
    },
    image:{
        margin: 10,
        flex:1,
        width:60,
        height: 80,
    },
    text:{
        marginTop: 20 ,
        flex: 2,
        fontSize: 25,
    }

})

export default WindowToSight;