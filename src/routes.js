import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './screens/Home'
import { Notification } from './screens/Notification'
import { Profile } from './screens/Profile'
import { Registration } from './screens/Registration'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}
