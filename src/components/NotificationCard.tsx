import { View, Text } from 'react-native'

interface INotificationCardProps {
  msg: string
}

export function NotificationCard({ msg }: INotificationCardProps) {
  return (
    <View className="mb-2 rounded-lg bg-gray300 p-4">
      <Text className="text-lg text-gray100">{msg}</Text>
    </View>
  )
}
