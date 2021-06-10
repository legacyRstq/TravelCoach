import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get('window').height;

const Map = () => {
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
                    latitude: 49.58777803398511,
                    longitude:  34.543037135006365
                }}
                title={'Test title'}
                description={'Test decsription'}/>
        </MapView>
    )
};

const style = StyleSheet.create({
    map: {
        height
    }
});

export default Map;
