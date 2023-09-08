import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { http } from '../../api/axios'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { showToast } from '../../utils/showToast'
import { login } from '../../../data/login'
import { ProgressBar } from '../../components/atoms/ProgressBar'

export function EventInfoScreen() {
  const { navigate } = useNavigation()
  const route = useRoute()
  const { eventId } = route.params

  const [name, setName] = useState('carregando...')
  const [description, setDescription] = useState('carregando...')
  const [location, setLocation] = useState('carregando...')
  const [coverUrl, setCoverUrl] = useState(
    'https://firebasestorage.googleapis.com/v0/b/imhere-firebase.appspot.com/o/1689118036677.png?alt=media&token=64f82e2a-2b90-40bf-b640-b7f7d8f26a3e',
  )
  useEffect(() => {
    http.get(`/event/${eventId}`).then((res) => {
      const { name, description, location, coverUrl } = res.data[0]
      setName(name)
      setDescription(description)
      setLocation(location)
      setCoverUrl(coverUrl)
    })
  })
  function handleSubmitRegistration() {
    const registrationData = {
      idEvent: eventId,
      idUser: login.id,
    }
    http
      .post('/registration', registrationData)
      .then((res) => {
        showToast({
          type: 'success',
          text1: 'Inscrição realizada!',
          text2: 'Uhul! Mais um humano recrutado! 👽👋',
        })
      })
      .catch((err) => {
        console.error(err)
        showToast({
          type: 'error',
          text1: 'Ocorreu um erro.',
          text2: 'Malditos Aliens!! 🛸🚫',
        })
      })
    setTimeout(() => {
      navigate('tabs')
    }, 1000)
  }
  return (
    <View className="h-screen w-screen flex-1 bg-black">
      <View className="absolute left-4 top-8 z-10"></View>
      <View>
        <ImageBackground
          source={{
            uri: coverUrl,
          }}
          borderRadius={6}
          className="h-56 w-screen opacity-60"
        ></ImageBackground>
      </View>
      <ScrollView className="mx-4">
        <View className="mt-4">
          <Text className="text-2xl font-bold text-white">{name}</Text>
          <View className="mt-1 flex-row items-center">
            <View className="mr-2 h-full w-1 rounded bg-purple"></View>
            <Ionicons
              name="person"
              size={20}
              color="#6C6C6C"
              className="absolute right-4 top-4"
            />
            <Text className=" ml-1 text-lg text-gray100">
              IFCE Campus Cedro
            </Text>
          </View>

          <View className="mt-2 rounded bg-gray300 p-4">
            <Text className="text-md text-gray100">{description}</Text>
          </View>
        </View>
        <View className="mx-2">
          <View className="mt-4">
            <View className="flex-row items-center">
              <Ionicons name="compass" size={18} color="white" />
              <Text className="ml-1 text-xl font-bold text-white">
                Localização
              </Text>
            </View>
            <Text className="text-md ml-5 text-gray100">{location}</Text>
          </View>
          <View className="mt-2">
            <View className="flex-row items-center">
              <Ionicons name="time" size={18} color="white" />
              <Text className="ml-1 text-xl font-bold text-white">Horário</Text>
            </View>
            <Text className="text-md ml-5 text-gray100">
              A partir das 18:00hrs
            </Text>
          </View>
          <View className="mb-8 mt-3">
            <View className="mb-2 flex-row items-center">
              <Ionicons name="people" size={18} color="white" />
              <Text className="ml-1 text-xl font-bold text-white">
                Inscritos
              </Text>
            </View>
            <ProgressBar progress={33} />
            <Text className="text-md ml-5 mt-1 text-gray100">
              <Text className="font-bold">10/30</Text> | 33% das vagas
              preenchidas
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSubmitRegistration}
          >
            <View className="h-14 w-full flex-row items-center justify-center rounded-lg bg-purple">
              <Ionicons name="calendar" size={18} color="white" />
              <Text className="text-md ml-3 font-bold text-white">
                GARANTIR VAGA
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}
