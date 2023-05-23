/* eslint-disable no-undef */
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from '@expo-google-fonts/inter'
import { View } from 'react-native'
import { useCallback } from 'react'
import { toastConfig } from './utils/toastConfig'
import Toast from 'react-native-toast-message'
import Routes from './src/routes/routes'
import axios from 'axios'

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

  const baseUrl = 'http://localhost:3333/api/'
  axios
    .get(`${baseUrl}event/62RIX4`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      if (error.response) {
        // Erro de resposta do servidor (status code fora do intervalo 2xx)
        console.log(error.response.data)
        console.log(error.response.status)
      } else if (error.request) {
        // Requisição feita, mas não houve resposta do servidor
        console.log('Sem resposta do servidor')
      } else {
        // Erro ao configurar a requisição
        console.log('Erro ao fazer a requisição', error.message)
      }
    })

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
