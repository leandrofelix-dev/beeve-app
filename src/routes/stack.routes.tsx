import React from 'react'

import TabRoutes from './tabs.routes'

import { createStackNavigator } from '@react-navigation/stack'
import { StackConfig } from '../config/routes.config'
import { EventInfoScreen } from '../components/pages/Event'
import { NotificationScreen } from '../components/pages/Notification'

const Stack = createStackNavigator()

export default function MainAppNavigator() {
  return (
    <Stack.Navigator initialRouteName="tabs" screenOptions={StackConfig}>
      <Stack.Screen name="tabs" component={TabRoutes} />
      <Stack.Screen name="eventInfoScreen" component={EventInfoScreen} />
      <Stack.Screen name="notificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  )
}
