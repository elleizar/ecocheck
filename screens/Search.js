import React, { Component, useEffect } from "react";
import { StyleSheet, Button, FlatList, TouchableOpacity, View, SafeAreaView, Text, TextInput } from 'react-native';
import { viewAllBusinesses } from "../api/api";

const Card = ({ business_name, description, location, category }) => (
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
          color: "black",
          fontSize: 12,
        }}
      >
        {category}
      </Text>
    <Text
      style={{
        fontSize: 15,
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
        alignItems: "center",
        margin: 2,
        marginTop: 10,
      }}
    >
      {" "}
      {description}{" "}
    </Text>
  </View>
);

export default function Search({ navigation }) {
  const [businesses, setBusinesses] = React.useState([]);

  useEffect(() => {
    viewAllBusinesses().then(res => {
      if (res) {
        setBusinesses(res.data)
      }
    })
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.push("journal-detail", item)}>
      <Card
        business_name={item.business_name}
        description={item.description}
        location={item.address}
        category={item.category}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ marginBottom: 50, marginTop: 15, fontSize: 50, color: '#485' }}>
          Search
      </Text>
        <TextInput
          style={{ width: 300, height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 10, marginBottom: 20 }}
          label="Search_item"
          placeholder="I'm looking for..."
        />
        <Button style={styles.buttonStyle}
          title="Search"
          //onPress={() => navigation.navigate('ProfileStack')}
          color='green'
        />
        <FlatList
            // style={styles.flatlist}
            data={businesses}
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

