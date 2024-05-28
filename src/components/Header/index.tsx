import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { style } from './style';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;
    return (
        <LinearGradient
            colors={[secondary100, secondary40]}
            style={style.container}
        >
            <BorderlessButton>
                <Feather
                    name='arrow-left'
                    size={24}
                    color={heading}
                />
            </BorderlessButton>
            <Text style={style.title}>
                    {title}
                </Text>
                {action &&
                    <View>
                        {action}
                    </View>
                }
        </LinearGradient>
    );
}
