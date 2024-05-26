import { Image } from "react-native";
import { styles } from "./style";

export function GuildIcon(){

    const uri = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/3367fa99-0ba6-454c-b947-683f1a9f896d/ddwo1a4-babff564-1feb-4060-a6af-52193fb914ad.png';

    return(
        <Image
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
        />  
 
    )
}