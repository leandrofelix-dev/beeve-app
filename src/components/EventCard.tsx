import { Ionicons } from '@expo/vector-icons'
import { Text, View, TouchableOpacity,ImageBackground} from 'react-native';

interface ICardProps {
  name: string
  date: string
  location: string
  image_url: string
}

export function Card({name, date, location, image_url}: ICardProps) {
  const image = { uri: image_url }

  return (
    <TouchableOpacity
      activeOpacity={.6}>
        <View className='justify-end h-48 mt-4 bg-gray300'>
        <ImageBackground
          source={image}
          style={{ width: '100%', height: '100%'}}
          borderRadius={6}
        >
          <View className='h-48 p-4 bg-gradient-to-r from-gray100'>
            <Text className='my-1 text-xl font-bold text-white drop-shadow-md'>{name}</Text>
            <Text className='my-1/2 text-md text-gray100'>{date}</Text>
            <View className='flex-row items-center my-1'>
              <Ionicons
                name="compass-sharp"
                size={12}
                color="#6B6B6B" />
              <Text className='text-md text-gray100'>{location}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}
