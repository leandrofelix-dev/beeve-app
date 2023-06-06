import { ScrollView, Text, View } from "react-native"
import { LoginForm } from "../../components/LoginForm"

export default function Login() {
  return (
    <View className="bg-black flex-1 pt-20 px-6">
      <View>
        <Text className="text-white text-4xl font-bold">Login</Text>
        <Text className="text-gray200 text-lg">Bem-vindo(a) de volta!</Text>
      </View>
      <View className="mt-6">
        <ScrollView>
          <View className="w-full flex-row mb-4">
        <View className="mr-2 h-full w-1 bg-blue"></View>
          <Text className="text-xl font-bold text-white">Suas informações</Text>
        </View>
          <LoginForm />
        </ScrollView>
      </View>
    </View>
  )
}
