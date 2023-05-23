import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, ImageBackground } from 'react-native'

import { Form } from '../../components/Form'

export function Registration() {
  return (
    <View className="h-screen w-screen flex-1 bg-black">
      <View className="absolute left-4 top-8 z-10"></View>
      <View className="w-full bg-blue">
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          }}
          borderRadius={6}
          className="h-40 w-screen"
        ></ImageBackground>
      </View>
      <ScrollView className="mx-4">
        <View className="mt-4">
          <Text className="text-2xl font-bold text-white">
            E.N.A.T. IFCE Cedro
          </Text>
          <Text className="text-gray200">Quarta, 26 de abril de 2023</Text>
          <View className="mt-4 rounded bg-gray300 p-4">
            <Text className="text-md text-gray200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              animi aut sunt harum quae laudantium a, alias nesciunt error rerum
              possimus tempore, incidunt optio repudiandae aspernatur sit
              deleniti. Ipsa, dicta.
            </Text>
          </View>
        </View>
        <View className="mb-4 mt-8 w-full flex-row">
          <View className="mr-2 h-full w-1 bg-purple"></View>
          <Text className="text-xl font-bold text-white">Cadastro</Text>
        </View>

        <Form />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}
