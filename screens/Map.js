import React, { useState } from "react";
import { Platform, StyleSheet, TextInput, View, SafeAreaView, Text, Alert, Modal, TouchableHighlight } from 'react-native';

let MapView, Marker;

export default function Map() {
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);

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
        <View style={{ position: 'absolute', zIndex: 100, alignSelf: 'center', bottom: 80, left: 350, width: 50, height: 50 }}>
          <TouchableHighlight
            style={{ ...styles.addButton, backgroundColor: "blue" }}
            onPress={() => {
              setAddModalVisible(!addModalVisible);
            }}
          >
            <Text style={styles.textStyle}>+</Text>
          </TouchableHighlight>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={addModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput style={styles.textInput}
                label="Store Name"
                placeholder="Store Name">
              </TextInput>
              <TextInput style={styles.textInput}
                label="Item Category"
                placeholder="Item Category">
              </TextInput>
              <TextInput style={styles.textInput}
                label="Price"
                placeholder="Price">
              </TextInput>
              <TextInput style={styles.textInput}
                label="Rating"
                placeholder="Rating">
              </TextInput>
              <TouchableHighlight
                style={{ ...styles.addButton, backgroundColor: "blue" }}
                onPress={() => {
                  setAddModalVisible(!addModalVisible);
                  console.log("here");
                  // <MapView>
                  //   <Marker
                  //     coordinate={{ latitude: 37.78825, longitude: -122.4323 }}>
                  //   </Marker>;
                  // </MapView>
                }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalA}>45 Pine Street</Text>
              <Text style={styles.modalS}>Value Village</Text>
              <Text style={styles.modalC}>Clothes</Text>
              <Text style={styles.modalP}>$30</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            onPress={() => setModalVisible(true)} />
          <Marker coordinate={{ latitude: 37.78824, longitude: -122.4328 }} />
          <Marker coordinate={{ latitude: 37.78873, longitude: -122.4328 }} />
          <Marker coordinate={{ latitude: 37.78822, longitude: -122.4353 }} />
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  addButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    // borderColor: 'black'
  },
  modalA: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: "center"
  },
  modalS: {
    fontSize: 25,
    marginBottom: 25,
    textAlign: "center"
  },
  modalC: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: "center"
  },
  modalP: {
    fontSize: 15,
    marginBottom: 50,
    textAlign: "center"
  },
});

