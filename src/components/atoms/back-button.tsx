import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

export function BackButton() {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Feather name="arrow-left" size={28} color={'#fff'} />
    </TouchableOpacity>
  )
}
