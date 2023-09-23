import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { TabConfig } from '../config/routes.config'
import { Home } from '../components/pages/Home'
import { Profile } from '../components/pages/Profile'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={TabConfig}>
      <Tab.Screen
        name="eventScreen"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
          tabBarLabel: 'Eventos',
          tabBarBadge: undefined,
        }}
      />
      <Tab.Screen
        name="profileScreen"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Perfil',
          tabBarBadge: undefined,
        }}
      />
    </Tab.Navigator>
  )
}
