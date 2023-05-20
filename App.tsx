/* eslint-disable no-undef */
import { NavigationContainer } from '@react-navigation/native'

import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from '@expo-google-fonts/inter'

import Toast from 'react-native-toast-message'

import { View } from 'react-native'

import { useCallback } from 'react'

import Routes from './src/routes/routes'

import { toastConfig } from './utils/toastConfig'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <Toast config={toastConfig} />
      <View onLayout={onLayoutRootView}></View>
    </>
  )
}
