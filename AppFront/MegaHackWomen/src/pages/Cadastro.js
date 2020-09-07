/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';

import maria from '../img/MARIA_-_BME_1.png';

export default function Cadastro({ navigation }) {
    async function redirecionaPageInicial() {
        navigation.navigate('Navegacao');
    }

    const [selectedValue, setSelectedValue] = React.useState(" ");

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.paginacao}>02|02</Text>
                        <View style={styles.nomeHeader}>
                            <Text style={styles.titulo}>SEUS DADOS</Text>
                        </View>
                    </View>
                    <View style={styles.containerFormulario}>
                        <Text style={styles.label}>Nome completo</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                        />
                        <Text style={styles.label}>Data de nascimento</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        <Text style={styles.label}>CPF/CNPJ</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        <Text style={styles.label}>Endereço</Text>
                        <View style={styles.coluna}>
                            <TextInput
                                style={styles.inputColuna}
                                placeholder="CEP"
                                placeholderTextColor="#999"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.inputColuna}
                                placeholder="Bairro"
                                placeholderTextColor="#999"
                                keyboardType="default"
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Rua"
                            placeholderTextColor="#999"
                            keyboardType="default"
                        />
                        <View style={styles.coluna}>
                            <TextInput
                                style={styles.inputColuna}
                                placeholder="Nº"
                                placeholderTextColor="#999"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.inputColuna}
                                placeholder="Complemento"
                                placeholderTextColor="#999"
                                keyboardType="default"
                            />
                        </View>
                        <Text style={styles.label}>Estado civil</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        <Text style={styles.label}>Segmento do seu negócio</Text>
                        <View style={styles.input}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Selecione" value=" " />
                            <Picker.Item label="Alimenticio" value="alimenticio" />
                        </Picker>
                        </View>
                    </View>
                    <View style={styles.containerMaria}>
                        <Image style={styles.image} source={maria} />
                        <View style={styles.containertexto}>
                            <Text style={styles.textoMaria}>
                                Aqui precisarei saber alguns dados seus e do seu negócio.
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonContinuar}
                        onPress={redirecionaPageInicial}
                    >
                        <Text style={styles.textContinuar}>Começar!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#FF6300',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    paginacao: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white',
        alignSelf: 'center',
    },

    nomeHeader: {
        height: 160,
        justifyContent: 'flex-end',
    },

    titulo: {
        fontSize: 23,
        color: 'white',
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        marginRight: 20,
        marginBottom: 10,
    },

    containerFormulario: {
        marginTop: 10,
        marginHorizontal: 20,
    },

    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 40,
        marginBottom: 5,
        justifyContent: 'center',
    },

    coluna: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputColuna: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 40,
        marginBottom: 5,
        width: 170,
    },

    containerMaria: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
    },

    image: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },

    containertexto: {
        backgroundColor: '#FF6300',
        width: 190,
        padding: 8,
        marginLeft: 10,
        justifyContent: 'center',
    },

    textoMaria: {
        color: 'white',
    },

    buttonContinuar: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FF6300',
        borderRadius: 8,
        marginHorizontal: 40,
        marginBottom: 20,
    },

    textContinuar: {
        color: 'white',
        fontSize: 20,
    },
});
