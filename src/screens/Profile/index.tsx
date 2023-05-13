import { Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Card } from '../../components/EventCard';

interface IProfileProps {
  name: string;
  events_qts: number;
  image_url: string;
}

export function Profile({name, events_qts, image_url}: IProfileProps) {
  return (
  <View className='flex-1 bg-black'>
    <LinearGradient
      className='rounded w-screen h-2/5 items-center justify-center mb-8'
      colors={['#2B0B71', '#03000A']}>
        <View className='pt-16 px-8'>
          <View className='flex-row justify-center'>
            <Image
              className='rounded-full w-40 h-40'
              source="https://avatars.githubusercontent.com/u/58048297?s=400&u=388b43932a7a4d8f368cfba39719ca64e3d538b5&v=4"
              contentFit="cover"
              transition={300}
            />
          </View>
          <View className='flex-row justify-center items-center'>
            <View className='flex-col justify-center'>
              <Text className='text-3xl font-extrabold text-white text-center mt-4'>Leandro Felix</Text>
              <Text className='text-lg text-gray100 text-center'>Inscrito em 3 eventos</Text>
            </View>
          </View>
        </View>
    </LinearGradient>

      <View className='w-full flex-row px-8'>
        <View className='bg-purple w-1 h-full mr-2'></View>
        <Text className='text-white text-xl font-bold'>Meus Ingressos</Text>
      </View>
      <ScrollView className='mx-8 mt-4'>
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
      </ScrollView>


  </View>
  )
}
