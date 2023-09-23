/* eslint-disable no-undef */
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
        backgroundColor: '#171717',
      }}
      text1Style={{
        fontSize: 20,
        color: '#f5f5f5',
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#dc2626' }}
      contentContainerStyle={{
        elevation: 200,
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
}
