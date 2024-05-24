import {
  Text,
  View,
  Image,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

import { styles } from './style';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';



export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={styles.container}>

        <Image source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas jogatinas!{'\n'}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos.
          </Text>
          <ButtonIcon title='Entre com o Discord' activeOpacity={.7} onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
