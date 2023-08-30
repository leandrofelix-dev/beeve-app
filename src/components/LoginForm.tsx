import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { showToast } from '../../utils/showToast'

export function LoginForm() {
  const [isChecked, setChecked] = useState(false)
  return (
    <View>
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="email-address"
        className="mb-2 mr-2 h-12 w-full rounded bg-gray300 px-4 text-white"
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="visible-password"
        className="mb-2 h-12 w-full rounded bg-gray300 px-4 text-white"
      />
      <View className="mb-4 ml-2 mt-3 flex-row items-center">
        <Checkbox
          className="mr-2 h-4 w-4 border-0 bg-gray200 opacity-60"
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#0284C7' : undefined}
        />
        <Text className="text-gray200">Lembrar-se de mim</Text>
      </View>

      <TouchableOpacity
        className="mt-2 flex-row items-center justify-center rounded-md bg-blue py-4"
        activeOpacity={0.7}
        onPress={() => {
          showToast({
            type: 'success',
            text1: 'Login realizado!',
            text2: 'Chega mais! Bem-vindo à festa! 🥳',
          })
        }}
      >
        <Ionicons name="person" size={20} color="#fff" />
        <Text className="text-md ml-3 font-bold text-white">FAZER LOGIN</Text>
      </TouchableOpacity>
      <Text className="my-2 items-center text-center font-bold text-gray100">
        OU
      </Text>
      <TouchableOpacity
        className="flex-row items-center justify-center rounded-md border-2 border-blue py-4"
        activeOpacity={0.7}
        onPress={() => {
          showToast({
            type: 'success',
            text1: 'Sucesso',
            text2: 'Cadastro realizado com sucesso',
          })
        }}
      >
        <Ionicons name="person-add" size={20} color="#fff" />
        <Text className="text-md ml-3 font-bold text-white">REGISTRAR-SE</Text>
      </TouchableOpacity>
    </View>
  )
}
