import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import estilo from './estilo';
import Logo from '../../assets/images/logoHeader.png'



export default function Topo() {
    return (
        <View style={estilo.principal}>
        <Text style={estilo.texto}>
            Finanças
            Prebelli's
                    </Text>
               
        <Image source={Logo} style={estilo.image}/>
        </View>
    );
    }
