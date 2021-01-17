import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';

export default function Register({ navigation }) {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onRegister = async () => {
    let info = {
      name: name,
      email: email,
      password: password,
    };
    register(name, email, password)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ marginBottom: 50, fontSize: 50, color: '#485' }}>
          Register
      </Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 20 }}
          label="Name"
          placeholder="Name"
        // onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 20 }}
          label="Email"
          placeholder="Email"
        // onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          placeholder="Password"
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

