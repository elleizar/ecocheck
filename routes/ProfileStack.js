import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Map from '../screens/Map.js'
import Search from '../screens/Search.js'
import Account from '../screens/Account.js'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import History from '../screens/History.js';

const Tab = createBottomTabNavigator();
export function ProfileStack() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Map') { return <FontAwesome5 name="map-marked" size={24} color="black" /> }
        else if (route.name === 'Search') { return <FontAwesome name="search" size={24} color="black" /> }
        else if (route.name === 'Account') { return <MaterialIcons name="account-box" size={24} color="black" /> }
  
      },
    })}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}