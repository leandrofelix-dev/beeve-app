import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';

import { Form } from '../../components/Form';

export function Registration() {

  return(
    <View>
      {/* <ScrollView>
        <View>
        <Image
          source={
            require('../../assets/cover.webp')}
        />
      <View>
        <Text>
          Encontro InovaTech
        </Text>
        <Text>
          Sexta, 4 de novembro de 2022
        </Text>
        <View>
          <Text>
            O InovaTech é um evento anual que reúne especialistas e entusiastas da tecnologia de todo o mundo para compartilhar ideias e discutir as tendências mais recentes no setor.
          </Text>
        </View>
      </View>

      <View>
        <View>
          <View></View>
          <Text>Cadastro:</Text>
        </View>
        <Form />
      </View>
        </View>
      </ScrollView> */}
      <StatusBar style="inverted" />
    </View>
  )
}
