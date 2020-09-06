/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

import maria from '../img/MARIA_-_BME_1.png';

export default function Pcadastro({ navigation }) {
    const [checked, setChecked] = React.useState('first');

    async function redirecionaCadastro() {
        navigation.navigate('Cadastro');
    }

    return (
        <>
            <View  style={ styles.container}>
                <View style={ styles.containerPaginacao}>
                    <Text style={styles.paginacao}>01|02</Text>
                </View>
                <View style= {styles.containerInteracao}>
                    <View style={styles.containerMaria}>
                        <Image style={styles.image} source={maria} />
                        <View style={styles.containertexto}>
                            <Text style={styles.textoMaria}>
                                Olá, meu nome é Maria e vou te ajudar em toda a sua jornada.
                                Me conta, você já iniciou seu negócio ou vamos começar juntas?
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerSelecao}>
                        <View style={styles.primeiraSelecao}>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                color="#FF6300"
                                onPress={() => setChecked('first')}
                            />
                            <Text style={styles.textoPselecao}>Já tenho um negócio</Text>
                        </View>
                        <View style={styles.segundaSelecao}>
                            <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                color="#FF6300"
                                onPress={() => setChecked('second')}
                            />
                            <Text style={styles.textoSselecao}>Vamos começar juntas</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttonContinuar}
                    onPress={redirecionaCadastro}
                >
                    <Text style={styles.textContinuar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerPaginacao: {
        alignItems: 'center',
        marginTop: 10,
        flex: 0.1,
    },

    paginacao: {
        fontWeight: 'bold',
        fontSize: 23,
    },

    containerInteracao: {
        flex: 0.8,
        justifyContent: 'center',
    },

    containerMaria: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        resizeMode: 'contain',
        width: 115,
        height: 120,
    },

    containertexto: {
        backgroundColor: '#FF6300',
        width: 200,
        height: 120,
        padding: 5,
        marginLeft: 10,
        justifyContent: 'center',
    },

    textoMaria: {
        color: 'white',
    },

    containerSelecao: {
        borderWidth: 2,
        borderColor: '#FF6300',
        padding: 30,
        height: 200,
        justifyContent: 'center',
    },

    primeiraSelecao: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },

    textoPselecao: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    segundaSelecao: {
        display: 'flex',
        flexDirection: 'row',
    },

    textoSselecao: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonContinuar: {
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        backgroundColor: '#FF6300',
        borderRadius: 8,
        marginHorizontal: 40,
    },

    textContinuar: {
        color: 'white',
        fontSize: 20,
    },
});
