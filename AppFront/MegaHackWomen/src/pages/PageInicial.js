/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import menu from '../icones/menu.png';
import user from '../icones/user.png';
import video from '../icones/video.png';

export default function PageInicial({ navigation }) {
    async function redirecionaMenu() {
        navigation.navigate('Menu');
    }

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
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

});

