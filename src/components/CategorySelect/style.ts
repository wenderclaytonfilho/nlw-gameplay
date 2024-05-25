import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { SvgProps } from "react-native-svg";
import React from 'react';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps &{
    title:string;
    icon: React.FC<SvgProps>;
    checked?:boolean;
}

export const styles = StyleSheet.create({
    container:{
        minHeight:120,
        maxHeight:120,
        paddingLeft:24,
    }
})