import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox'

import Toast from 'react-native-toast-message'

export function SignInForm() {
  const [isChecked, setChecked] = useState(false);
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
      <View className='flex-row'>
        <TextInput
        placeholder="Nome"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="default"
        className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-1/2 mr-2'
        />
        <TextInput
        placeholder="Sobrenome"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="default"
        className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-1/2'
      />
      </View>
      <View className='flex-row'>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="email-address"
          className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-4/6 mr-2'
        />

        <TextInput
          placeholder="Idade"
          placeholderTextColor={'#6B6B6B'}
          keyboardType='number-pad'
          className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-2/6'
          />
      </View>
      <View className='flex-row mt-3 mb-4 ml-2 items-center'>
          <Checkbox
          className='mr-2 border-0 bg-gray200 opacity-60 w-4 h-4'
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
          <Text className='text-gray200'>Sou aluno do IFCE</Text>
      </View>
      <View className='flex-row'>
        <TextInput
          placeholder="Matrícula"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="number-pad"
          className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-4/6 mr-2'
        />

        <TextInput
          placeholder="Semestre"
          placeholderTextColor={'#6B6B6B'}
          keyboardType='number-pad'
          className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-2/6'
          />
      </View>
      <View>
        <TextInput
          placeholder="Curso"
          placeholderTextColor={'#6B6B6B'}
          keyboardType='default'
          className='text-white bg-gray300 h-12 rounded px-4 mb-2 w-full'
          />
      </View>

      <TouchableOpacity
      className='bg-purple flex-row items-center justify-center py-4 rounded-md mt-2'
        activeOpacity={0.7}
        onPress={() => {
          handleParticipantAdd()
        }}
      >
        <Ionicons
          name="person-add"
          size={20}
          color="#fff"
          />
        <Text className='font-bold text-white text-md ml-3'>
          REGISTRAR-SE
        </Text>
      </TouchableOpacity>
      <Text className='text-gray100 font-bold items-center text-center my-2'>OU</Text>
      <TouchableOpacity
      className='flex-row items-center justify-center py-4 rounded-md border-2 border-purple'
        activeOpacity={0.7}
        onPress={() => {
          handleParticipantAdd()
        }}
      >
        <Ionicons
          name="person"
          size={20}
          color="#fff"
          />
        <Text className='font-bold text-white text-md ml-3'>
          FAZER LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  )
}
