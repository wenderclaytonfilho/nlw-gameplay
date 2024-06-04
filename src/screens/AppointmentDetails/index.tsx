import { Fontisto } from '@expo/vector-icons'
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from '../../global/styles/theme';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import BannerImage from '../../assets/banner.png'
import { styles } from './style';
import { ListHeader } from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';

export function AppointmentDetails() {
    const codbanner = 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/home/hero/jpt-hero-desktop.jpg'

    const members =[
        {
            id:'1',
            username:'Wender',
            avatar_url:'https://github.com/wenderclaytonfilho.png',
            status:'online'
        },
        {
            id:'2',
            username:'Tobias',
            avatar_url:'https://github.com/tobiasalvz.png',
            status:'offline'
        }
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImage}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        Se LOL fosse bom, se chamaria "Coca Ponto" da boa
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
                title='Jogadores'
                subtitle= {members.length.toString()}
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />
        </Background>
    )
}