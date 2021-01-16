import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Map from '../screens/Map.js'
import Search from '../screens/Search.js'
import Account from '../screens/Account.js'

const Tab = createBottomTabNavigator();
export function ProfileStack() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false}}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}