/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import menu from '../icones/menu.png';
import user from '../icones/user.png';
import map from '../img/map.png';

export default function RedeBme({ navigation }) {
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
                <Text style={styles.titulo}>Rede BME</Text>
            </View>
            <Image style={styles.map} source={map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#462B72',
        height: 250,
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

    titulo: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 20,
    },

    map: {
        width: 400,
        height: 350,
    },
});

