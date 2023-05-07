import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../../components/EventCard';


export function Home() {
  return (
    <View className='flex-1 px-4 bg-black'>

      <View className='mt-16'>
        <View className='flex-row justify-between'>
          <View className='flex-col justify-between mx-4'>
          <Text className='text-4xl font-extrabold text-white'>I'm Here</Text>
          <Text className='text-xl text-gray100'>Bem vindo(a) de volta!</Text>
        </View>

        <View className='items-center justify-center -mt-4'>
          <Ionicons
            name="notifications"
            size={28}
              color="#6B6B6B"
            />
          <View className='w-2 h-2 -mr-3 rounded-full -mt-7 bg-purple'></View>
        </View>
        </View>
        <View className='justify-center mt-6'>
          <Text className='font-bold text-gray100'>Inserir código personalizado</Text>
          <View className='flex-row items-center justify-between'>
            <TextInput
              placeholder="ex.: YA1S5C"
              placeholderTextColor={'#6B6B6B'}
            className='px-4 py-3 my-2 text-xl font-bold text-white rounded-lg w-100 bg-gray300 w-80'
            />
            <TouchableOpacity
              activeOpacity={.7}>
                <Ionicons
                  name="add-circle-outline"
                  size={32}
                  color="#6B6B6B"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Card
          name='E.N.A.T.I. IFCE Cedro'
          date='26 de abril de 2023'
          location='Cedro/CE'
          image_url='https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        />

        <Card
          name='FliSol 2023.1'
          date='14 de abril de 2023'
          location='Cedro/CE'
          image_url='https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        />

        <Card
          name='III Robotech'
          date='20 de junho de 2023'
          location='Várzea Alegre/CE'
          image_url='https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80'
        />

        <Card
          name='Dia da informática'
          date='20 de junho de 2023'
          location='Cedro/CE'
          image_url='https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        />

      </ScrollView>
      <StatusBar style="inverted" />
    </View>
  )
}
