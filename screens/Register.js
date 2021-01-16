import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ marginBottom: 50, fontSize: 50, color: '#485' }}>
          Register
      </Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 20 }}
          label="Email"
        // onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 60 }}
          secureTextEntry
        // onChangeText={(text) => setPassword(text)}
        />
        <Button style={styles.buttonStyle}
          title="Register"
          onPress={() => navigation.navigate('ProfileStack')}
          color='green'
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'green'
  }
});

