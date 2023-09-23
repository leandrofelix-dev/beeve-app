/* eslint-disable no-undef */
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from '@expo-google-fonts/inter'
import { useCallback } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'
import Routes from './src/routes'
import { toastConfig } from './src/config/toast.config'

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
      <Routes />
      <Toast config={toastConfig} />
      <View onLayout={onLayoutRootView}></View>
    </>
  )
}
