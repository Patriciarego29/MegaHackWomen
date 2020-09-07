/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import menu from '../icones/menu.png';
import user from '../icones/user.png';
import map from '../img/map.png';
import amigo from '../icones/user(1).png';
import lupa from '../icones/search.png';
import mais from '../icones/plus.png';
import camera from '../icones/photograph.png';

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
            <View style={styles.icones}>
                <View style={styles.elementosIcone}>
                    <View style={styles.containerIcone}>
                        <Image source={lupa} style={styles.icone} />
                    </View>
                    <Text style={styles.textoIcone}>Pesquisar</Text>
                </View>
                <View style={styles.elementosIcone}>
                    <View style={styles.containerIcone}>
                        <Image source={camera} style={styles.icone} />
                    </View>
                    <Text style={styles.textoIcone}>Fotos</Text>
                </View>
                <View style={styles.elementosIcone}>
                    <View style={styles.containerIcone}>
                        <Image source={mais} style={styles.icone} />
                    </View>
                    <Text style={styles.textoIcone}>Create</Text>
                </View>
                <View style={styles.elementosIcone}>
                    <View style={styles.containerIcone}>
                        <Image source={amigo} style={styles.icone} />
                    </View>
                    <Text style={styles.textoIcone}>Amigos</Text>
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

    icones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
    },

    elementosIcone: {
        flexDirection: 'column',
    },

    containerIcone: {
        borderWidth: 2,
        borderColor: '#462B72',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icone: {
        width: 30,
        height: 30,
    },

    textoIcone: {
        fontSize: 15,
        alignSelf: 'center',
    },

});

