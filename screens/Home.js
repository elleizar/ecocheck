import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3, justifyContent: 'flex-end' }}>
        <Text style={{ color: 'green', fontSize: 65 }}>
          ecocheck.
      </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ color: '#485', fontSize: 15 }}>
          making lives more sustainable.
      </Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 200 }}>
        <View style={{ width: 150 }}>
          <Button style={styles.buttonStyle}
            title="Login"
            onPress={() => navigation.navigate('Login')}
            color='green'
          />
        </View>
        <Text>{'      '}</Text>
        <View style={{ width: 150}}>
          <Button style={styles.buttonStyle}
            title="Register"
            onPress={() => navigation.navigate('Register')}
            color='green'
          />
        </View>
      </View>

    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'green',
    width: 150,
    height: 100,
  }
});

