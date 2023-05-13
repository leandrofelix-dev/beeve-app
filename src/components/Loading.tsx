import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View className="bg-background flex-1 justify-center items-center">
      <ActivityIndicator color="#7C3AED"/>
    </View>
  )
}
