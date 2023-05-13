import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}>
      <Feather
        name="arrow-left"
        size={28}
        onPress={goBack}
        />

    </TouchableOpacity>
  )
}
