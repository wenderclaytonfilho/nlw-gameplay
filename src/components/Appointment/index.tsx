import { View, Text } from "react-native";
import { styles } from "./style";
import { RectButton,RectButtonProps } from "react-native-gesture-handler";

export type GuildProps = {

}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButton & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
    return (
        <RectButton {...rest}
        >
            <View style={styles.container}>
                <GuildIcon/>
            </View>
        </RectButton>
    )
}