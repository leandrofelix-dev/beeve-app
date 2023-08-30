/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Card } from '../../components/EventCard'
import { http } from '../../api/axios'
import { login } from '../../../data/login'
import { showToast } from '../../../utils/showToast'

export function Profile() {
  const [userName, setUserName] = useState('carregando')
  const [events, setEvents] = useState([])

  useEffect(() => {
    http
      .get(`/auth/user/${login.id}`)
      .then((res) => {
        const { data } = res
        const { registeredEvents, user } = data

        setUserName('Leandro Felix')
        setEvents(registeredEvents)
      })
      .catch((err) => {
        console.error(err)
        showToast({
          type: 'error',
          text1: 'Ocorreu um erro.',
          text2: 'Aliens raptaram seus dados!! 🛸⚠️',
        })
      })
  }, [])

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        className="mb-8 h-2/5 w-screen items-center justify-center rounded"
        colors={['#2B0B71', '#03000A']}
      >
        <View className="px-8 pt-16">
          <View className="flex-row justify-center">
            <Image
              className="h-40 w-40 rounded-full"
              source={{
                uri: 'https://avatars.githubusercontent.com/u/58048297?s=400&u=388b43932a7a4d8f368cfba39719ca64e3d538b5&v=4',
              }}
            />
          </View>
          <View className="flex-row items-center justify-center">
            <View className="flex-col justify-center">
              <Text className="mt-4 text-center text-3xl font-extrabold text-white">
                {userName}
              </Text>
              <Text className="text-gray-100 text-center text-lg">
                Inscrito em X eventos
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View className="w-full flex-row px-8">
        <View className="mr-2 h-full w-1 bg-purple"></View>
        <Text className="text-xl font-bold text-white">Meus Ingressos</Text>
      </View>
      <ScrollView className="mx-8 mt-4">
        {events.map((event) => (
          <Card
            key={event.id}
            name={event.name}
            date={event.date}
            location={event.location}
            imageUrl={event.coverUrl}
          />
        ))}
      </ScrollView>
    </View>
  )
}
