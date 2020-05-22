import React, { Fragment, useState } from "react";
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from "react-native";
import style from './style'

const Comentarios = ({ comentarios }) => {
    const [estComentario, SetComentario] = useState(comentarios)
    const adcionarComentario = () => {
        console.warn(conteudoCampoInput)
        campoInput.clear()
        const novoComentario = {
            date: Date.now,
            text: conteudoCampoInput,
            userName: "Guilherme"
        }
        SetComentario([...estComentario, novoComentario])
    }
    let campoInput
    let conteudoCampoInput = '';
    return (
        <Fragment>
            <FlatList
                data={estComentario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={style.naMesmaLinha}>
                        <Text>{item.userName}</Text>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
            <View style={style.naMesmaLinha}>
                <TextInput
                    ref={TextInput => campoInput = TextInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    style={{ flex: 1 }}
                    placeholder={"Deixe seu Comentario"} />
                <TouchableOpacity onPress={adcionarComentario}>
                    <Image style={style.image} source={require('../../../res/img/send.png')} />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
};

export default Comentarios;