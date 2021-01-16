import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile.js'

const Stack = createStackNavigator();
export function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}