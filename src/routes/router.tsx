import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default function Routes1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#6B6B6B',
        tabBarStyle: {
          height: 60,
          paddingTop: 4,
          paddingBottom: 4,
          backgroundColor: '#09090b',
          borderTopColor: 'transparent',
          paddingHorizontal: 16,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Eventos"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
