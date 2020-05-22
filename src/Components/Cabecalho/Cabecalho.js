import React, { Fragment } from 'react';
import {
    Text,
    Image,
    View
} from "react-native";
import style from './style'

const Cabecalho = ({ urlImg,nomeUsuario}) => {
    return (
        <View style={style.cabecalho}>
            <Image
                source={{uri:urlImg}}
                style={style.image}
            />
            <Text>{nomeUsuario}</Text>
        </View>
    )
}

export default Cabecalho;