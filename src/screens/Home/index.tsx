import { FlatList, View, Text } from "react-native";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Ghost',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'TheBoys',
                icon: null,
                owner: true
            },
            category: '1',
            date: '27/05 às 18:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Minecraft',
                icon: null,
                owner: false
            },
            category: '1',
            date: '27/05 às 18:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'TheBoys',
                icon: null,
                owner: true
            },
            category: '1',
            date: '27/05 às 18:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'TheBoys',
                icon: null,
                owner: true
            },
            category: '1',
            date: '27/05 às 18:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'TheBoys',
                icon: null,
                owner: true
            },
            category: '1',
            date: '27/05 às 18:00h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'TheBoys',
                icon: null,
                owner: true
            },
            category: '1',
            date: '27/05 às 18:00h',
            description: 'Carmesin'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }
    return (
        <Background>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckbox={true}
            />
                <ListHeader
                    title='Partidas Agendadas'
                    subtitle={appointments.length.toString()}
                />

            <FlatList
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                data={appointments}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider />}
                renderItem={({ item }) => (
                    <Appointment
                        data={item} 
                        onPress={handleAppointmentDetails}
                        />
                )}
            />
        </Background>
    );
}