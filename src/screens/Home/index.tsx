import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Link } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

import { Card } from '../../components/EventCard'
import { http } from '../../api/axios'
import { EventsNotFound } from '../../components/EventsNotFound'

export function Home() {
  const [events, setEvents]: any = useState()
  const [refreshing, setRefreshing] = useState(false)

  const fetchEvents = () => {
    setTimeout(() => {
      http
        .get('/events')
          .then((res) => {
            setEvents(res.data)
          })
        .catch((err) => {
          console.error(err.message)
          setEvents(null)
        })

      setRefreshing(false)
    }, 2000)
  }

  const onRefresh = () => { setRefreshing(true) }

  useEffect(() => { fetchEvents() }, [])
  useEffect(() => { if (refreshing) { fetchEvents() } }, [refreshing])

  return (
    <View className="flex-1 bg-black px-4">
      <View className="mt-16">
        <View className="flex-row justify-between">
          <View className="mx-4 flex-col justify-between">
            <Text className="text-4xl font-extrabold text-white">
              I am Here
            </Text>
            <Text className="text-xl text-gray100">Bem vindo(a) de volta!</Text>
          </View>

          <View className="-mt-4 items-center justify-center">
            <TouchableOpacity>
              <Link to={{ screen: 'notification' }}>
                <Ionicons name="notifications" size={28} color="#6B6B6B" />
              </Link>
            </TouchableOpacity>

            <View className="-mr-3 -mt-7 h-2 w-2 rounded-full bg-purple"></View>
          </View>
        </View>
        <View className="mt-6 justify-center">
          <Text className="font-bold text-gray100">
            Inserir código personalizado
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
      <ScrollView
        contentContainerStyle={{justifyContent: 'flex-start' }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {events !== null ?
          events?.map((event: {
          name: string;
          date: string;
          location: string;
          id: string,
          coverUrl: string }) => (
            <Card
              key={event.id}
              name={event.name}
              date={event.date}
              location={event.location}
              image_url={event.coverUrl}
            />
          ))
          :
          <EventsNotFound />
        }
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}
