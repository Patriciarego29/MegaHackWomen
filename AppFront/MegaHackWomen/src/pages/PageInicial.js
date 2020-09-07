/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import menu from '../icones/menu.png';
import user from '../icones/user.png';
import video from '../icones/video.png';

import maria from '../img/MARIA_-_BME_1.png';

const DATA = [
    {
        id: '01',
        title: 'Fase 1',
    },
    {
        id: '02',
        title: 'Modulo 01',
    },
    {
        id: '03',
        title: 'Modulo 02',
    },
    {
        id: '04',
        title: 'Fase 2',
    },
    {
        id: '05',
        title: 'Mentoria',
    },
    {
        id: '06',
        title: 'Fase 3',
    },
    {
        id: '07',
        title: 'Solicitacao',
    },
    {
        id: '08',
        title: 'Fase 4',
    },
    {
        id: '09',
        title: 'Modulo extra',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.titleItem}>{title}</Text>
    </View>
);

export default function PageInicial({ navigation }) {
    async function redirecionaMenu() {
        navigation.navigate('Menu');
    }

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={redirecionaMenu}>
                    <Image style={styles.imageMenu} source={menu}/>
                </TouchableOpacity>
                <View style={styles.containerUser}>
                    <Image style={styles.imageUser} source={user} />
                </View>
                <Text style={styles.nome}>Isabel Souza</Text>
                <View style={styles.card}>
                    <Text style={styles.titulo}>Continuar de onde paramos</Text>
                    <Text style={styles.modulo}>Módulo 1 - Propósito</Text>
                    <View style={styles.conteudo}>
                        <Image style={styles.video} source={video} />
                        <Text style={styles.infoModulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerJornada}>
                <FlatList
                    style={styles.containerJornada}
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.containerMaria}>
                <Image style={styles.image} source={maria} />
                <View style={styles.containertexto}>
                    <Text style={styles.textoMaria}>
                        Parabéns Isabel, você já está cadastrada.
                        Vamos começar nossa jornada?
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c1d1f5',
    },

    header: {
        flex: 0.6,
        backgroundColor: '#462B72',
        height: 280,
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 180,
    },

    imageMenu: {
        resizeMode: 'contain',
        width: 60,
        height: 30,
        marginTop: 15,
    },

    containerUser: {
        width: 75,
        height: 75,
        backgroundColor: 'white',
        borderRadius: 50,
        alignSelf: 'center',
    },

    imageUser: {
        resizeMode: 'contain',
        width: 75,
        height: 75,
    },

    nome: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 300,
        height: 240,
        alignSelf: 'center',
        padding: 10,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    modulo: {
        fontSize: 18,
    },

    conteudo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    video: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
        marginRight: 10,
    },

    infoModulo: {
        fontSize: 15,
        textAlign: 'justify',
        width: 190,
        marginLeft: 10,
    },

    containerJornada: {
        flex: 0.3,
        marginTop: 20,
    },

    item: {
        borderRadius: 10,
        padding: 5,
        height: 50,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 10,
        backgroundColor: 'white',
    },

    containerMaria: {
        flex: 0.1,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    image: {
        resizeMode: 'contain',
        width: 90,
        height: 90,
    },

    containertexto: {
        backgroundColor: '#FF6300',
        width: 200,
        height: 70,
        padding: 5,
        marginLeft: 10,
        justifyContent: 'center',
    },

    textoMaria: {
        color: 'white',
    },
});

