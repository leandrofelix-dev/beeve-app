import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainAppNavigator from './stack.routes'

export default function Routes() {
  return (
    <View className="bg-black" style={{ flex: 1, backgroundColor: '#000000' }}>
      <NavigationContainer>
        <MainAppNavigator />
      </NavigationContainer>
    </View>
  )
}
