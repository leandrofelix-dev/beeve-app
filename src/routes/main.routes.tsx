import React from 'react'

import TabRoutes from './tabs.routes'

import { createStackNavigator } from '@react-navigation/stack'
import { Notification } from '../screens/Notification'
import { EventInfoScreen } from '../screens/Event'

const Stack = createStackNavigator()

export default function MainAppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => ({
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
        }),
      }}
    >
      <Stack.Screen name="tabs" component={TabRoutes} />
      <Stack.Screen name="eventInfoScreen" component={EventInfoScreen} />
      <Stack.Screen name="notificationScreen" component={Notification} />
    </Stack.Navigator>
  )
}
