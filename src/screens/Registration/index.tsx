import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, ImageBackground, TextInput } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { Form } from '../../components/Form'


export function Registration() {
  return (
    <View className='w-screen h-screen bg-black flex-1'>
      <View className='absolute z-10 top-8 left-4'>
      <BackButton/>
      </View>
        <View className='bg-blue w-full'>
          <ImageBackground 
          source={{ uri: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' }} 
          borderRadius={6}
          className='w-screen h-40'>
          </ImageBackground>
        </View>
      <ScrollView className='mx-4'>
        <View className='mt-4'>
          <Text className='text-white font-bold text-2xl'>E.N.A.T. IFCE Cedro</Text>
          <Text className='text-gray200'>Quarta, 26 de abril de 2023</Text>
          <View className='bg-gray300 p-4 rounded mt-4'>
            <Text className='text-gray200 text-md'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa animi aut sunt harum quae laudantium a, alias nesciunt error rerum possimus tempore, incidunt optio repudiandae aspernatur sit deleniti. Ipsa, dicta.
            </Text>
          </View>
        </View>
        <View className="w-full flex-row mt-8 mb-4">
          <View className="mr-2 h-full w-1 bg-purple"></View>
          <Text className="text-xl font-bold text-white">Cadastro</Text>
        </View>

        <Form/>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}
