import { Ionicons } from '@expo/vector-icons'
import { Text, View, TouchableOpacity,ImageBackground} from 'react-native';

interface ICardProps {
  name: string
  date: string
  location: string
  image_url: string
}

export function Card({name, date, location, image_url}: ICardProps) {

  return (
    <TouchableOpacity
      activeOpacity={.6}>
        <View className='justify-end h-48 mt-4 bg-gray300 mx-1'>
        <ImageBackground
          source={{ uri: image_url }}
          borderRadius={6}
        >
          <View className='h-48 justify-end'>
            <View className='bg-black flex-1 opacity-75 items-end'></View>
            <View className='p-4 absolute'>
              <Text className='my-1 text-xl font-bold text-white drop-shadow-md'>{name}</Text>
              <Text className='text-md text-gray100'>{date}</Text>
              <View className='flex-row items-center my-1'>
                <Ionicons
                  name="compass-sharp"
                  size={12}
                  color="#6B6B6B" />
                <Text className='text-md text-gray100'>{location}</Text>
              </View>
              </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}
