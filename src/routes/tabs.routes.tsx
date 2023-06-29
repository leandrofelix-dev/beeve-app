import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { Home } from '../screens/Home'

import { Profile } from '../screens/Profile'
import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import { Notification } from '../screens/Notification'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#6B6B6B',
        tabBarStyle: {
          height: 60,
          paddingTop: 4,
          paddingBottom: 8,
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
        name="eventScreen"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
          tabBarLabel: 'Eventos',
          tabBarBadge: undefined, //notificationCounter
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
          tabBarBadge: undefined, //notificationCounter
        }}
      />

      <Tab.Screen
        name="loginScreen"
        component={Login}
      />

      <Tab.Screen
        name="signScreen"
        component={SignIn}
      />

      <Tab.Screen
        name="notificationScreen"
        component={Notification}
      />

    </Tab.Navigator>
  )
}
