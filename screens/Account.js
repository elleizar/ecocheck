import React, { useEffect } from "react";
import { viewProfile } from "../api/api";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Account({navigation}) {
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    viewProfile().then(res => {
      if (res) {
        setUser(res.data)
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <p>{user.name}</p>
      <p>{user.rewards}</p>
      <Button
        title="History"
        onPress={() => navigation.navigate('History')}
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

// // added code below
// // CSS design part
// const styles = StyleSheet.create({
//   container: {
//     top: 200,
//     right: -60,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   buttonStyleContainer: {
//     flex: 5,
//     flexDirection: 'row',
//     marginHorizontal: 18,
//     marginTop: 700, 
//     elevation: 30,
//     backgroundColor: "#485",
//     borderRadius: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 110
//    },

//    appButtonText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase"
//   },

