import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabRoutes from './tabs.routes'
import { Notification } from '../screens/Notification'

const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
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
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="notificationScreen" component={Notification} />
    </Stack.Navigator>
  )
}
