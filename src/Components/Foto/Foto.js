
import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View

} from 'react-native';
import Style from './style'
import { ImgLike,curtirFoto } from "../../API/curtidas";



const Foto = ({ urlImg, description, qntLike }) => {
    const [curtiu, setCurtiu] = useState(false)
    const [likes,setLikes] = useState(qntLike)
    const clicouCurtiu = () => {
        const [novoEstCurtiu, qnt] = curtirFoto(curtiu,likes)
        setCurtiu(novoEstCurtiu)
        setLikes(qnt)
    }
    return (
        <Fragment>
            <Image
                source={{ uri: urlImg }}
                style={Style.image}
            />
            <Text>{description}</Text>
            <View style={Style.viewLike}>
                <TouchableOpacity onPress={clicouCurtiu}>
                    <Image
                        source={ImgLike(curtiu)}
                        style={Style.like} />
                </TouchableOpacity>
                <Text>curtidas: {likes}</Text>
            </View>

        </Fragment>
    );
};

export default Foto;
