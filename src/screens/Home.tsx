import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../../src/styles/home';
import defaultStyles from '../styles/default';
import { Form } from '../components/Form';

export function Home() {
  function handleParticipantAdd() {
    console.log('Clicou no add button');
  }

  return(
    <View style={defaultStyles.screen}>
      <View style={defaultStyles.main}>
        <Image
          style={styles.cover}
          source={require('../../assets/cover.webp')}
        />
      <View style={styles.header}>
        <Text style={styles.eventName}>
          InfoDay [2023.1]
        </Text>
        <Text style={styles.eventDate}>
          Sexta, 4 de novembro de 2022
        </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.eventDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veniam nemo, nisi hic quam similique reprehenderit accusamus soluta minima dolorum nam reiciendis sint? Eligendi enim quisquam iste vero neque tenetur!
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.after}></View>
          <Text style={styles.title}>Cadastro:</Text>
        </View>
        <Form />
      </View>

      </View>
      <StatusBar style="inverted" />
    </View>
  )
}
