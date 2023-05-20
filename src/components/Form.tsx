import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import React from 'react'
import Toast from 'react-native-toast-message'

export function Form() {
  function handleParticipantAdd() {
    Toast.show({
      type: 'success',
      text1: 'Registrado com Sucesso!',
      text2: 'Uhul! Nos vemos lá! 👋',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
    })
  }
  return (
    <View>
      {/* e-mail */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="email-address"
        className='bg-gray300 w-full h-12 rounded px-4 mb-2'
      />
      {/* nome completo */}
      <TextInput
        placeholder="Nome completo"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="default"
        className='bg-gray300 w-full h-12 rounded px-4 mb-2'
      />
      {/* data de nascimento */}
      <TextInput
        placeholder="Data de nascimento (dd/mm/aaaa)"
        placeholderTextColor={'#6B6B6B'}
        className='bg-gray300 w-full h-12 rounded px-4 mb-2'
      />

      <TouchableOpacity
      className='bg-purple flex-row items-center justify-center py-4 rounded-md mt-4'
        activeOpacity={0.7}
        onPress={() => {
          handleParticipantAdd()
        }}
      >
        <Ionicons 
          name="calendar" 
          size={28} 
          color="#fff"
          />
        <Text className='font-bold text-white text-md ml-3'>
          MARCAR PRESENÇA
        </Text>
      </TouchableOpacity>
      <Text className='text-gray200 font-bold items-center text-center my-2'>OU</Text>
      <TouchableOpacity
      className='bg-blue flex-row items-center justify-center py-4 rounded-md'
        activeOpacity={0.7}
        onPress={() => {
          handleParticipantAdd()
        }}
      >
        <Ionicons 
          name="logo-google" 
          size={28} 
          color="#fff"
          />
        <View className='justify-center items-center'>
        <Text className='font-bold text-white text-md ml-3'>
          MARCAR PRESENÇA
        </Text>
        <Text className='font-bold text-white text-md ml-3'>
          COM O GOOGLE
        </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
