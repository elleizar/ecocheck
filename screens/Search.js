import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';

export default function Search({ navigation }) {

  const [search_item, setName] = React.useState("");
  
  const onSearch = async () => {
    let info = {
      name: search_item,
   };
    search(search_item)
  }

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

