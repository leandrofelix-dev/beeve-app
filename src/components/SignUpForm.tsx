import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { http } from '../api/axios'

export function SignUpForm() {
  const [isChecked, setChecked] = useState(false)

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    passwordConfirmation: '',
    isLinkedToIfce: false,
    course: null,
    semester: null,
  })

  function handleFormSubmit() {
    // isChecked ? user.isLinkedToIfce = true : user.isLinkedToIfce = false
    try {
      console.log(user)
      http.post('/user', user)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View>
      <View className="flex-row">
        <TextInput
          placeholder="Nome"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="default"
          className="mb-2 mr-2 h-12 w-1/2 rounded bg-gray300 px-4 text-white"
          onChangeText={(text) => setUser({ ...user, firstName: text })}
        />
        <TextInput
          placeholder="Sobrenome"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="default"
          className="mb-2 h-12 w-1/2 rounded bg-gray300 px-4 text-white"
          onChangeText={(text) => setUser({ ...user, lastName: text })}
        />
      </View>
      <View className="flex-row">
        <TextInput
          placeholder="E-mail"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="email-address"
          className="mb-2 mr-2 h-12 w-4/6 rounded bg-gray300 px-4 text-white"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />

        <TextInput
          placeholder="Idade"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="number-pad"
          className="mb-2 h-12 w-2/6 rounded bg-gray300 px-4 text-white"
          onChangeText={(text) => setUser({ ...user, age: Number(text) })}
        />
      </View>
      <TextInput
        placeholder="Senha"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="default"
        className="mb-2 h-12 w-full rounded bg-gray300 px-4 text-white"
        onChangeText={(text) => setUser({ ...user, password: text })}
      />
      <TextInput
        placeholder="Confirmar senha"
        placeholderTextColor={'#6B6B6B'}
        keyboardType="default"
        className="mb-2 h-12 w-full rounded bg-gray300 px-4 text-white"
        onChangeText={(text) =>
          setUser({ ...user, passwordConfirmation: text })
        }
      />
      <View className="mb-4 ml-2 mt-3 flex-row items-center">
        <Checkbox
          className="mr-2 h-4 w-4 border-0 bg-gray200 opacity-60"
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text className="text-gray200">Sou aluno(a) do IFCE</Text>
      </View>
      {isChecked && (
        <>
          <View className="flex-row">
            <TextInput
              placeholder="Matrícula"
              placeholderTextColor={'#6B6B6B'}
              keyboardType="number-pad"
              className="mb-2 mr-2 h-12 w-4/6 rounded bg-gray300 px-4 text-white"
            />

            <TextInput
              placeholder="Semestre"
              placeholderTextColor={'#6B6B6B'}
              keyboardType="number-pad"
              className="mb-2 h-12 w-2/6 rounded bg-gray300 px-4 text-white"
            />
          </View>
          <View>
            <TextInput
              placeholder="Curso"
              placeholderTextColor={'#6B6B6B'}
              keyboardType="default"
              className="mb-2 h-12 w-full rounded bg-gray300 px-4 text-white"
            />
          </View>
        </>
      )}

      <TouchableOpacity
        className="mt-2 flex-row items-center justify-center rounded-md bg-purple py-4"
        activeOpacity={0.7}
        onPress={() => {
          handleFormSubmit()
        }}
      >
        <Ionicons name="person-add" size={20} color="#fff" />
        <Text className="text-md ml-3 font-bold text-white">REGISTRAR-SE</Text>
      </TouchableOpacity>
      <Text className="my-2 items-center text-center font-bold text-gray100">
        OU
      </Text>
      <TouchableOpacity
        className="flex-row items-center justify-center rounded-md border-2 border-purple py-4"
        activeOpacity={0.7}
      >
        <Ionicons name="person" size={20} color="#fff" />
        <Text className="text-md ml-3 font-bold text-white">FAZER LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}
