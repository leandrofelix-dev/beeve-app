import { Toast } from 'react-native-toast-message/lib/src/Toast'

interface IToastProps {
  type: 'success' | 'error'
  text1: string
  text2: string
}
export function showToast({ type, text1, text2 }: IToastProps) {
  Toast.show({
    type,
    text1,
    text2,

    position: 'top',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 50,
  })
}
