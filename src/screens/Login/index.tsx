import { ScrollView, Text, View } from 'react-native'
import { LoginForm } from '../../components/LoginForm'

export default function Login() {
  return (
    <View className="flex-1 bg-black px-6 pt-20">
      <View>
        <Text className="text-4xl font-bold text-white">Login</Text>
        <Text className="text-lg text-gray200">Bem-vindo(a) de volta!</Text>
      </View>
      <View className="mt-6">
        <ScrollView>
          <View className="mb-4 w-full flex-row">
            <View className="mr-2 h-full w-1 bg-blue"></View>
            <Text className="text-xl font-bold text-white">
              Suas informações
            </Text>
          </View>
          <LoginForm />
        </ScrollView>
      </View>
    </View>
  )
}
