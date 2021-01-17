import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home.js'
import Login from '../screens/Login.js';
import Register from '../screens/Register.js';
import History from '../screens/History.js';
import { ProfileStack } from './ProfileStack.js';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}