import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Map screen</Text>
      {/* <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}>
        <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
      </MapView> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

