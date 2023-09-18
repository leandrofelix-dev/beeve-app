/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
  const haveNotification = true
  const { navigate } = useNavigation()
  return (
    <View className="mt-16">
      <View className="mx-4 flex-row items-center justify-between">
        <View>
          <View className="pb-1">
            <Image
              source={require('../../../assets/horizontal-logo.svg')}
              contentFit="fill"
              className="h-12 w-40"
            />
          </View>
          <Text className="text-lg text-gray100">{`Bem vindo(a) de volta!`}</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigate('notificationScreen')}
            activeOpacity={0.7}
          >
            <Ionicons name="notifications" size={28} color="#6B6B6B" />
            {haveNotification && (
              <View className="absolute right-0 h-2 w-2 rounded-full bg-purple"></View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-2 mt-6 justify-center">
        <Text className="font-bold text-gray100">
          {`Inserir código personalizado`}
        </Text>
        <View className="flex-row items-center justify-between">
          <TextInput
            placeholder="ex.: YA1S5C"
            placeholderTextColor={'#6B6B6B'}
            className="my-2 mr-2 w-full rounded-lg bg-gray300 px-4 py-3 text-xl font-bold text-white"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            className="absolute right-0 h-12 w-12 items-center justify-center"
          >
            <Ionicons name="add-circle-outline" size={32} color="#6B6B6B" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
