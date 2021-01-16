import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Register screen</Text>
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

