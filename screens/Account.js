import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      {/* <Button
        title="Login"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// // added code below
// // CSS design part
// const styles = StyleSheet.create({
//   container: {
//     top: 200,
//     right: -60,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   buttonStyleContainer: {
//     flex: 5,
//     flexDirection: 'row',
//     marginHorizontal: 18,
//     marginTop: 700, 
//     elevation: 30,
//     backgroundColor: "#485",
//     borderRadius: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 110
//    },

//    appButtonText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase"
//   },

