/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'expo-image'
import { View, Text } from 'react-native'

export function EventsNotFound() {
  return (
    <View className="mt-10 flex-1 items-center justify-center">
      <Image
        source={require('../../../assets/no-events-illustration.svg')}
        contentFit="fill"
        className="h-64 w-64"
      />
      <View className="mt-6">
        <Text className="color-gray100 text-center text-2xl font-bold">
          Nenhum evento encontrado
        </Text>
        <Text className="color-gray200 font-regular text-md mt-1 text-center">
          O operário responsável foi
          <Text className="font-bold"> raptado pelos aliens</Text>. Estamos
          tentando resgatá-lo! Volte mais tarde.
        </Text>
      </View>
    </View>
  )
}
