import { View } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";

export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>
                <View>
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
                    <View style={styles.content}>

                    </View>
                </View>
            </View>
        </Background>
    );
}