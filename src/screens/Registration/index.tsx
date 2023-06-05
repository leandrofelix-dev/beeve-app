import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import React from 'react'
import ProgressBar from '../../components/progressBar'

export function Registration() {

  return (
    <View className="h-screen w-screen flex-1 bg-black">
      <View className="absolute left-4 top-8 z-10"></View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://storage.googleapis.com/imhere-firebase.appspot.com/1685912753125.jpeg',
          }}
          borderRadius={6}
          className="h-56 w-screen opacity-60"
        ></ImageBackground>
      </View>
      <ScrollView className="mx-4">
        <View className="mt-4">
          <Text className="text-2xl font-bold text-white">
            E.N.A.T.I. IFCE Cedro
          </Text>
          <View className='flex-row mt-1 items-center'>
            <View className="mr-2 h-full w-1 bg-purple rounded"></View>
            <Ionicons
            name="person"
            size={20}
            color="#6C6C6C"
            className="absolute right-4 top-4"
            />
          <Text className=" ml-1 text-gray100 text-lg">IFCE Campus Cedro</Text>
          </View>

          <View className="mt-2 rounded bg-gray300 p-4">
            <Text className="text-md text-gray100">
              O E.N.A.T.I. é um evento anual que reúne especialistas e entusiastas da tecnologia de todo o mundo para compartilhar ideias e discutir as tendências mais recentes no setor.
            </Text>
          </View>
        </View>
        <View className='mx-2'>
          <View className='mt-4'>
            <View className='flex-row items-center'>
              <Ionicons
              name="compass"
              size={18}
              color="white"
              />
              <Text className="text-xl font-bold text-white ml-1">Localização</Text>
            </View>
            <Text className='text-gray100 text-md ml-5'>Alameda José Quintino, 300, Prado, Cedro/CE</Text>
          </View>
          <View className='mt-2'>
            <View className='flex-row items-center'>
              <Ionicons
              name="time"
              size={18}
              color="white"
              />
              <Text className="text-xl font-bold text-white ml-1">Horário</Text>
            </View>
            <Text className='text-gray100 text-md ml-5'>A partir das 18:00hrs</Text>
          </View>
          <View className='mt-3 mb-8'>
            <View className='flex-row items-center mb-2'>
              <Ionicons
              name="people"
              size={18}
              color="white"
              />
              <Text className="text-xl font-bold text-white ml-1">Inscritos</Text>
            </View>
            <ProgressBar
              progress={33}
            />
            <Text className='text-gray100 text-md ml-5 mt-1'><Text className='font-bold'>10/30</Text> | 33% das vagas preenchidas</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <View className='bg-purple w-full h-14 rounded-lg flex-row items-center justify-center'>
              <Ionicons
                name="calendar"
                size={18}
                color="white"
            />
            <Text className='font-bold text-md text-white ml-3'>GARANTIR VAGA</Text>
            </View>
          </TouchableOpacity>
        </View>



      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}
