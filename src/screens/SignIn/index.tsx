import { ScrollView, Text, View } from "react-native"
import { SignInForm } from "../../components/SignInForm"

export default function SignIn() {
  return (
    <View className="bg-black flex-1 pt-20 px-6">
      <View>
        <Text className="text-white text-4xl font-bold">Registrar-se</Text>
        <Text className="text-gray200 text-lg">Bem-vindo(a) ao I am Here!</Text>
      </View>
      <View className="mt-6">
        <ScrollView>
          <View className="w-full flex-row mb-4">
        <View className="mr-2 h-full w-1 bg-purple"></View>
          <Text className="text-xl font-bold text-white">Suas informações</Text>
        </View>
          <SignInForm />
        </ScrollView>
      </View>
    </View>
  )
}
