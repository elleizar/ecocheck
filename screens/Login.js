import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Profile')}
      />

      {/* added code below */}

      {/* text page container */}
      <SafeAreaView style={styles.container}>
          <View>
            <View style={{backgroundColor:'red'}}>
            <View style={{color:'transparent'}}>
          {/* <Image source={require('./logo.png')} /> */}
              <Text style={{color:'white', fontSize:65}}> 
              ecocheck. {"\n"}
              {"\n"}
              {"\n"}
            </Text>
            <Text style={{color: '#485', fontSize:15}}> 
            {"\n"}
            {"\n"}
            making lives more sustainable.
            </Text>
            <StatusBar style="auto" />
            <Separator/>
            </View>
          </View> 
          </View>
        </SafeAreaView>

        {/* button container */}
        <View style={styles.buttonStyleContainer}>
          <Button 
            title="Login" 
            // style={styles.appButtonText}  
            // onPress={() => Alert.alert('Simple Button pressed')}
          />
          
          <Button
            title="Register"
            // style={color = '#485', styles.buttonStyle}
            // onPress={() => Alert.alert('Simple Button pressed')}    
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


// added code below
// CSS design part
const styles = StyleSheet.create({
  container: {
    top: 200,
    right: -60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyleContainer: {
    flex: 5,
    flexDirection: 'row',
    marginHorizontal: 18,
    marginTop: 700, 
    elevation: 30,
    backgroundColor: "#485",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 110
   },

   appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

});