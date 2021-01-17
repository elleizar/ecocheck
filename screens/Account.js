import React, { useEffect } from "react";
import { viewProfile } from "../api/api";
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={{
          padding: 20,
          paddingTop: 30,
        }}> 
        {/* <View style={{
          padding: 20,
          paddingTop: 30,
        }}> */}
          <Text style={{ marginBottom: 50, fontSize: 50, color: '#485', textAlign: "center" }}>
            Profile
      </Text>
          <Text style={{
            fontSize: 18,
            color: "#575632",
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            {user.name}</Text>
          <Text style={{
            fontSize: 18,
            color: '#485',
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            My Rewards
        </Text>
          <Text style={{
            fontSize: 14,
            color: '#485',
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            My total Points:
        </Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            {user.rewards}
          </Text>
          <Text style={{
            fontSize: 18,
            color: "#485",
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            How It Works:
        </Text>
          <Text style={{
            fontSize: 14,
            color: "#485",
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            1. Shop to earn
        </Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            The more you shop the more benefits you get, and who doesn't like shopping?
        </Text>
          <Text style={{
            fontSize: 14,
            color: "#485",
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            2. The more points the better the benefits
        </Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            Each time you log a purchace it gets put in {'\n'}
          our system which gives you 180 points each time. {'\n'}
           You get to redeem your benefits any time you want, {'\n'}
            but the minimum points you can redeem is 1600px.  {'\n'}
            The more points you save up the bigger the benefits, {'\n'}
          so start saving!
        </Text>
          <Text style={{
            fontSize: 14,
            color: "#485",
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            3. Enjoy the benefits!
        </Text>
          <Text style={{
            fontSize: 14,
            color: 'black',
            alignItems: "center",
            margin: 2,
            marginTop: 10
          }}>
            We offer endless amounts of benefits to our users, from store discount
            codes to cheaper bills, especially if your with RBC ;)
        </Text>
          <Button style={styles.buttonStyle}
            title="View History"
            onPress={() => navigation.navigate('History')}
            color='green'
          />
        {/* </View> */}
      </ScrollView>
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
    backgroundColor: 'green'
  }
});

