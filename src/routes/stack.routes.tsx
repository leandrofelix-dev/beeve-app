import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' // Importe o TabRoutes que você já definiu
import TabRoutes from './tabs.routes'
import { Notification } from '../screens/Notification'

const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="notificationScreen" component={Notification} />
    </Stack.Navigator>
  )
}
