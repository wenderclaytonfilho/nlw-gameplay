import { Text, Image, View, TouchableOpacity, TouchableOpacityProps, ScrollView } from "react-native";
import { styles } from './style';
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
    categorySelected : string;
    setCategory:(categoryId:string) =>void;
    hasCheckbox?:boolean;
}

export function CategorySelect({
    categorySelected, 
    setCategory,
    hasCheckbox=false
}:Props) {

    return (
        <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight:40}}
        >
            {
                categories.map(category=>(
                    <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id===categorySelected}
                    onPress={()=> setCategory(category.id)}
                    hasCheckbox={false}
                    />
                ))
            }
        </ScrollView>
    )
}