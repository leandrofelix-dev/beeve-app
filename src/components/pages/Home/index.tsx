/* eslint-disable jsx-a11y/alt-text */
import {
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'

import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'

import { http } from '../../../api/axios'
import { useNavigation } from '@react-navigation/native'
import Header from '../../molecules/header'
import { Card } from '../../atoms/event-card'
import { EventsNotFound } from '../../atoms/events-not-founf'

export function Home() {
  const { navigate } = useNavigation()

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

  const onRefresh = () => {
    setRefreshing(true)
  }

  useEffect(() => {
    fetchEvents()
  }, [])
  useEffect(() => {
    if (refreshing) {
      fetchEvents()
    }
  }, [refreshing])
  return (
    <View className="flex-1 bg-black px-4">
      <Header />
      <ScrollView
        contentContainerStyle={{ justifyContent: 'flex-start' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {events !== null ? (
          events?.map(
            (event: {
              name: string
              date: string
              location: string
              id: string
              coverUrl: string
            }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={event.id}
                onPress={() => {
                  return navigate('eventInfoScreen', { eventId: event.id })
                }}
              >
                <Card
                  name={event.name}
                  date={event.date}
                  location={event.location}
                  imageUrl={event.coverUrl}
                />
              </TouchableOpacity>
            ),
          )
        ) : (
          <EventsNotFound />
        )}
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}
