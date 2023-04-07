import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../src/styles/home';
import React from 'react';

export function Form() {
  function handleParticipantAdd() {
    console.log('Clicou no add button');
  }
  return(
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor={styles.placeholder.color}
        keyboardType='default'
      />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={.7}
          onPress={() => {handleParticipantAdd()}}
        >
        <Ionicons
          name="calendar"
          size={28}
          color='#fff'
        />
        <Text style={styles.buttonText}>
          MARCAR PRESENÇA
        </Text>
        </TouchableOpacity>
    </View>
  )
}
