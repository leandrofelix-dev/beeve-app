/* eslint-disable no-undef */
import { View, Text } from 'react-native'
import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message'

export const toastConfig = {
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#31cf67' }}
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
        fontSize: 14,
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
        fontSize: 14,
      }}
    />
  ),
  tomatoToast: ({ text1, props }: any) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
}
