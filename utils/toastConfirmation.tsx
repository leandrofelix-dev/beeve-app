import { Toast } from 'react-native-toast-message/lib/src/Toast'

export function showToastConfirmation() {
  Toast.show({
    type: 'success',
    text1: 'Registrado com Sucesso!',
    text2: 'Uhul! Nos vemos lá! 👋',
    position: 'top',
    visibilityTime: 3000,
    autoHide: true,
  })
}
