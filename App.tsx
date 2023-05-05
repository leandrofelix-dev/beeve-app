import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from '@expo-google-fonts/inter';

import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { useCallback } from 'react';
import { Registration } from './src/screens/Registration';

SplashScreen.preventAutoHideAsync();

const toastConfig = {
  success: (props: JSX.IntrinsicAttributes & BaseToastProps ) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#31cf67' }}
      contentContainerStyle={{
        height: 60,
        paddingHorizontal: 15,
        backgroundColor: '#171717'
       }}
      text1Style={{
        fontSize: 18,
        color: '#f5f5f5',
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 14
      }}
    />
  ),
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      contentContainerStyle={{
        height: 60,
        paddingHorizontal: 15,
        backgroundColor: '#171717',
       }}
      text1Style={{
        fontSize: 18,
        color: '#f5f5f5',
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 14
      }}
    />
  ),
  tomatoToast: ({ text1, props }: any) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  )
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) { await SplashScreen.hideAsync() }
  }, [fontsLoaded]);

  if (!fontsLoaded) { return null }

  return (
    <>
      <Home />
      <Toast config={toastConfig} />
      <View onLayout={onLayoutRootView}>
      </View>
    </>
  )
}
