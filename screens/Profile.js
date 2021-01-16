import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <Button
        title="Login"
        // onPress={() => navigation.navigate('Profile')}
      />
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