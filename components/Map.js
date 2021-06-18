import React from 'react';
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, Dimensions, View, Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const height = Dimensions.get('window').height;

const Map = () => {
    const navigation = useNavigation();
    return(
        <MapView 
            style={style.map}
            loadingEnable={true}
            region={{
                latitude: 49.589603,
                longitude: 34.550665,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}>
                <MapView.Marker 
                coordinate={{
                    latitude: 49.5816582922676,
                    longitude:  34.56960695260657
                }}
                title='Біла Альтанка'
                description="Oригінальна пам'ятка у формі альтанки " onPress={() => navigation.navigate("Пам'ятка", {name: "Test name from map"})}/>
        </MapView>
    )
};

const style = StyleSheet.create({
    map: {
        height
    },
    window:{
       flexDirection: 'row',
       alignSelf: 'flex-start',
       backgroundColor: '#fff',
       borderColor: '#ccc',
       borderWidth: 0.5, 
       padding: 15,
       width: 100,
       height: 100
    },
    image:{
        margin: 10,
        height: 80,
        width: 80
    }
});

export default Map;
