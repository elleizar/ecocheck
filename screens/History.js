import React, { Component,useEffect } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function History({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 50, fontSize: 50, color: '#485',textAlign: "left" }}>
          Purchase History
        </Text>

        <Button style={styles.buttonStyle}
          title="Open in Bank App"
          onPress={() => onHistory()}
          color='green'
        />
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
  