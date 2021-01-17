import React, { Component } from "react";
import { Platform, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

let MapView, Marker;

export default function Map() {
  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Can't view map</Text>
      </SafeAreaView>
    )
  }
  else {
    MapView = require('react-native-maps').default;
    Marker = require('react-native-maps').Marker;
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
        </MapView>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

