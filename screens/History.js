import React, { Component, useEffect } from "react";
import { StyleSheet, Button, FlatList, TouchableOpacity, View, SafeAreaView, Text, TextInput } from 'react-native';
import { viewAllTransactionEntries } from "../api/api";

const Card = ({ business_name, item_type, location, amount }) => (
  <View
    style={{
      backgroundColor: "#F4F1DE",
      width: "90%",
      alignSelf: "center",
      borderRadius: 20,
      marginVertical: 15,
      padding: 20,
      paddingTop: 30,
      shadowColor: "black",
      shadowRadius: 4,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
    }}
  >
    <Text
      style={{
        fontSize: 15,
        fontFamily: "RobotoMono-Regular",
        fontWeight: "600",
        alignItems: "center",
      }}
    >
      {" "}
      {business_name}{" "}
    </Text>

    <Text
      style={{
        fontSize: 12,
        color: "#575632",
        fontFamily: "RobotoMono-Regular",
        alignItems: "center",
        margin: 2,
        marginTop: 10,
      }}
    >
      {" "}
      {item_type}{" "}
    </Text>
    <Text
        style={{
          color: "black",
          fontSize: 12,
          margin: 2,
          fontFamily: "RobotoMono-Regular",
        }}
      >
        {" "}
        ${amount}{" "}
      </Text>
    <Text
      style={{
        fontSize: 12,
        color: "#575632",
        fontFamily: "RobotoMono-Regular",
        alignItems: "center",
        margin: 2,
        marginTop: 10,
      }}
    >
      {" "}
      {location}{" "}
    </Text>
  </View>
);

export default function History({ navigation }) {
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    viewAllTransactionEntries().then(res => {
      if (res) {
        setTransactions(res.data)
      }
    })
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.push("journal-detail", item)}>
      <Card
        business_name={item.business_name}
        item_type={item.item_type}
        location={item.address}
        amount={item.amount}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
            // style={styles.flatlist}
            data={transactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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

