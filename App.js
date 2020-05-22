/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useState, useEffect } from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';
import {Cabecalho} from './src/Components/Cabecalho'
import {Foto} from './src/Components/Foto'
import { Comentarios } from "./src/Components/Comentarios";
import lerfotos from './src/API/feed'


const App: () => React$Node = () => {
const [fotos,setFotos] = useState([])
useEffect(()=>{
  lerfotos(setFotos);
},[])
  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Fragment >
            <Cabecalho 
            nomeUsuario = {item.userName}
            urlImg = {item.userURL}
            />
            <Foto 
            urlImg={item.url} 
            description={item.description}
            qntLike={item.likes}
            />
            <Comentarios comentarios={item.comentarios} />
          </Fragment>
        )}
      />

    </ScrollView>
  );
};


export default App;
