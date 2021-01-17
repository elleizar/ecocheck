import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import { login } from "../api/auth";


export default function Login({ navigation }) {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = async () => {
    login(email, password)
      .then(() => navigation.navigate('ProfileStack'))
      .catch((err) => console.log(err.error));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ marginBottom: 50, fontSize: 50, color: '#485' }}>
          Login
        </Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 20 }}
          label="Email"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 60 }}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button style={styles.buttonStyle}
          title="Login"
          onPress={onLogin}
          color='green'
        />
      </View>
    </SafeAreaView>
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
  }
});
