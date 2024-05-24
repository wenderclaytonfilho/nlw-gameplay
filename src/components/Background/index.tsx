import { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./style"; 
import { LinearGradient } from "expo-linear-gradient";

type Props ={
    children:ReactNode;
}

export function Background({children}: Props){
    const{secondary80,secondary90} = theme.colors;

    
    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary80,secondary90]}
        >
        {children}
        </LinearGradient>
    )
}