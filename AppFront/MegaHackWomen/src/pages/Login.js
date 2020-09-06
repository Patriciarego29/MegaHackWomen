/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../img/BME-_LOGO.png';

export default function Login({ navigation }) {
    async function redirecionaPCadastro() {
        navigation.navigate('Pcadastro');
    }

    return (
    <>
        <View style={styles.containerLogo}>
            <Image style={styles.image} source={logo} />
        </View>
        <View style={styles.containerButton}>
            <TouchableOpacity
                style={styles.buttonConta}
                onPress={redirecionaPCadastro}
            >
                <Text style={styles.textConta}>Abra sua conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonEntrar}
            >
                <Text style={styles.textEntrar}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    containerLogo: {
        backgroundColor: '#FF6300',
        height: 530,
        paddingTop: 85,
        alignItems: 'center',
    },

    image: {
        resizeMode: 'contain',
        width: 380,
        height: 380,
    },

    containerButton:{
        marginTop: 50,
        justifyContent: 'center',
        marginHorizontal: 40,
    },

    buttonConta: {
        alignItems: 'center',
        backgroundColor: '#FF6300',
        padding: 10,
        borderRadius: 8,
    },

    textConta: {
        color: 'white',
        fontSize: 20,
    },

    buttonEntrar: {
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FF6300',
        borderRadius: 8,
    },

    textEntrar: {
        fontSize: 20,
    },
});
