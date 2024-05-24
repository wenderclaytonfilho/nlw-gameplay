import {
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

import { styles } from './style';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
        />
      <Image source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas{`\n`}
          facilmente!
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos.
        </Text>
        <ButtonIcon title='Entre com o Discord' activeOpacity={.7}/>
      </View>

    </View>
  );
}
