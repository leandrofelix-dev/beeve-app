import { Ionicons } from '@expo/vector-icons'
import { View, Text } from "react-native";

export function EventsNotFound() {
  return (
    <View className="flex-1 items-center justify-center">
      <Ionicons name="sad-outline" size={64} color="#3E3E3E" />
      <Text className='mt-2 text-center color-gray200 text-xl'>Não há eventos no momento!</Text>
    </View>
  )
}
