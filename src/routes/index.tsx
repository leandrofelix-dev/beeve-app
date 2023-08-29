import { NavigationContainer } from '@react-navigation/native'

import React from 'react'
import MainAppNavigator from './main.routes'

export default function Routes() {
  return (
    <NavigationContainer>
      <MainAppNavigator />
    </NavigationContainer>
  )
}
