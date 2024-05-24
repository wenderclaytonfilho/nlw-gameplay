import { View } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";

export function Home() {

    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                </View>
            </View>
        </Background>
    );
}