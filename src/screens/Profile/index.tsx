import { Text, View, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Card } from '../../components/EventCard'

interface IProfileProps {
  name: string
  events_qts: number
  image_url: string
}

export function Profile({ name }: IProfileProps) {
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
              source="https://avatars.githubusercontent.com/u/58048297?s=400&u=388b43932a7a4d8f368cfba39719ca64e3d538b5&v=4"
              contentFit="cover"
              transition={300}
            />
          </View>
          <View className="flex-row items-center justify-center">
            <View className="flex-col justify-center">
              <Text className="mt-4 text-center text-3xl font-extrabold text-white">
                Leandro Felix
              </Text>
              <Text className="text-center text-lg text-gray100">
                Inscrito em 3 eventos
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
        <Card
          name="E.N.A.T.I. IFCE Cedro"
          date="26 de abril de 2023"
          location="Cedro/CE"
          image_url="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        />

        <Card
          name="FliSol 2023.1"
          date="14 de abril de 2023"
          location="Cedro/CE"
          image_url="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </ScrollView>
    </View>
  )
}
