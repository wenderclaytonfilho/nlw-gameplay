import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import DiscorImg from '../../assets/discord.png';
import { styles } from './style';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {

    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscorImg} style={styles.icon}></Image>
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}