import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

import Logo from '../assets/logo.png'
import { SourceMapConsumer } from 'source-map';

export default function  Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={Logo}/>

            <View style={styles.cardsContainer}> 
                <View style={[styles.cards, {zIndex: 3}]}>
                    <Image style={styles.avatar} source={{uri: 'https://avatars1.githubusercontent.com/u/23061616?v=4'}} />
                    <View style={styles.footer}>
                        <Text style={styles.name}> Daniel Munhoz </Text>
                        <Text style={styles.bio}> Web Developer </Text>
                    </View>
                </View>
            </View>

            <View />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    logo: {
        marginTop: 100
    },

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    cardsContainer:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500

    },

    cards: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },

    avatar:{
        flex:1,
        height:300

    },

    footer:{
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 15

    },

    name: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'

    },

    bio: {

        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18

    }

});