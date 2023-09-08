import { ScrollView, Text, View } from 'react-native'
import { SignUpForm } from '../../components/molecules/SignUpForm'

export default function SignIn() {
  return (
    <View className="flex-1 bg-black px-6 pt-20">
      <View>
        <Text className="text-4xl font-bold text-white">Registrar-se</Text>
        <Text className="text-lg text-gray200">Bem-vindo(a) ao I am Here!</Text>
      </View>
      <View className="mt-6">
        <ScrollView>
          <View className="mb-4 w-full flex-row">
            <View className="mr-2 h-full w-1 bg-purple"></View>
            <Text className="text-xl font-bold text-white">
              Suas informações
            </Text>
          </View>
          <SignUpForm />
        </ScrollView>
      </View>
    </View>
  )
}
