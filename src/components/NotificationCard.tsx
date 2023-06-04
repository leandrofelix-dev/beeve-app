import { View, Text } from 'react-native'

interface INotificationCardProps {
  msg: string
  readed: boolean
}

export function NotificationCard({ readed, msg }: INotificationCardProps) {
  return (
    <>
      {readed
        ?
        <View className="mb-1 rounded-lg bg-gray300 p-4">
          <Text className="text-md text-gray100 opacity-80">{msg}</Text>
        </View>
        :
        <View className="mb-1 rounded-lg bg-gray200 p-4 opacity-80">
          <Text className="text-md text-white">{msg}</Text>
        </View>}

    </>
  )
}
