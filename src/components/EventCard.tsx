import { Ionicons } from '@expo/vector-icons'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'

interface ICardProps {
  name: string
  date: string
  location: string
  image_url: string
}

export function Card({ name, date, location, image_url }: ICardProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View className="mx-1 mt-4 h-48 justify-end bg-gray300">
        <ImageBackground source={{ uri: image_url }} borderRadius={6}>
          <View className="h-48 justify-end">
            <View className="flex-1 items-end bg-black opacity-75"></View>
            <View className="absolute p-4">
              <Text className="my-1 text-xl font-bold text-white drop-shadow-md">
                {name}
              </Text>
              <Text className="text-md text-gray100">{date}</Text>
              <View className="my-1 flex-row items-center">
                <Ionicons name="compass-sharp" size={12} color="#6B6B6B" />
                <Text className="text-md text-gray100">{location}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}
