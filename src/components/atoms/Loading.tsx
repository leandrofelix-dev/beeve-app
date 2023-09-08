import { ActivityIndicator, View } from 'react-native'

export function Loading() {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <ActivityIndicator color="#7C3AED" />
    </View>
  )
}
