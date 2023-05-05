
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import Toast from 'react-native-toast-message';

export function Form() {
  function handleParticipantAdd() {
    Toast.show({
      type: 'success',
      text1: 'Registrado com Sucesso!',
      text2: 'Uhul! Nos vemos lá! 👋',
      position: 'top',
      visibilityTime: 40000,
      autoHide: true,
    });

  }
  return(
    <View>
      {/* e-mail */}
      <TextInput
        placeholder="E-mail"
        placeholderTextColor={'#fff'}
        keyboardType='email-address'
      />
      {/* senha */}
      <TextInput
        placeholder="Senha"
        placeholderTextColor={'#fff'}
        keyboardType='visible-password'
      />
      {/* nome completo */}
      <TextInput
        placeholder="Nome completo"
        placeholderTextColor={'#fff'}
        keyboardType='default'
      />
      {/* data de nascimento */}
      <TextInput
        placeholder="Data de nascimento (dd/mm/aaaa)"
        placeholderTextColor={'#fff'}
      />

      <TouchableOpacity
        activeOpacity={.7}
        onPress={() => {handleParticipantAdd()}}
      >
      <Ionicons
        name="calendar"
        size={28}
        color='#fff'
      />
      <Text>
        MARCAR PRESENÇA
      </Text>
      </TouchableOpacity>
    </View>
  )
}
