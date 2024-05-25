import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import { styles } from "./style";



export function ButtonAdd() {

    return (
        <TouchableOpacity
            style={styles.container}
        >
               <MaterialCommunityIcons
                    name='plus'
                    color={theme.colors.heading}
               />
        </TouchableOpacity>
    )
}