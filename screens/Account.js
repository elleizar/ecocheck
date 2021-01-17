import React, { useEffect } from "react";
import { viewProfile } from "../api/api";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

export default function Account({ navigation }) {
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
     
      {/* <Button
        title="Login"
        onPress={() => navigation.navigate('Profile')}
      /> */}
       <Text style={{ marginBottom: 50, fontSize: 50, color: '#485',textAlign: "left" }}>
          My Rewards
        </Text>
        <Text style={{ marginBottom: 300, fontSize: 30, color: '#485', textAlign: "left" }}>
          My total Points:
        </Text>
        <p>{user.rewards}</p>
        <Text style={{ marginBottom: 5, fontSize: 20, color: '#485', textAlign: "left" }}>
          How It Works:
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 15, color: '#485',textAlign: "left" }}>
          1. Shop to earn
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 10, color: 'black',textAlign: "left" }}>
          The more you shop the more benefits you get, and who doesn't like shopping?
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 15, color: '#485',textAlign: "left" }}>
          2. The more points the better the benefits 
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 10, color: 'black',textAlign: "center" }}>
          Each time u log a purchace it gets put in {'\n'}
          our system which gives you 200 points each time. {'\n'}
           You get to redeem your benefits any time you want, {'\n'}
            but the minimum points u can redeem is 1600px.  {'\n'}
            The more points you save up the bigger the benefits, {'\n'}
          so start saving!
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 15, color: '#485',textAlign: "left", marginleft: 50 }}>
          3. Enjoy the benefits! 
        </Text>
        <Text style={{ marginBottom: 50, fontSize: 10, color: 'black',textAlign: "left" }}>
          We offer endless amounts of benefits to our users, from store discount 
          codes to cheaper bills, especially if your with RBC ;) 
        </Text>
      <Button style={styles.buttonStyle}
          title="View History"
          onPress={() => navigation.navigate('History')}
          color='green'
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

