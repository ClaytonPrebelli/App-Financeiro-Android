import React, {useState} from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";


import estilo from "./estilo";
import Receitas from '../../assets/images/receitas.png'
import Despesas from '../../assets/images/despesas.png'
import Credito from '../../assets/images/credito.png'
import Relatorio from '../../assets/images/relatorio.png'

import AddDespesa from "../AddDespesa";





const Home = ({navigation}) => {
    const [eye, setEye] = useState('eye-slash');
    const [saldoTela, setSaldoTela] = useState('0,00');
    
    const handleClick = () => {
        if(eye === 'eye-slash'){
            setEye('eye');
            setSaldoTela('****');
        }else{
            setEye('eye-slash');
            setSaldoTela('0,00');
        }
    }
  
    return (
        
        <View style={estilo.principal}>
            <View style={estilo.saldoBox}>
                <Text style={estilo.saldoTxt}>
            Saldo :  
                </Text>
                <View style={estilo.valoresBox}>
                <Text style={estilo.saldo} id="saldo">
                   <Icon name="money" style={estilo.iconMoney} />  R$ {saldoTela}
                </Text>
                <Text style={estilo.saldo} id="saldo">
                    <Icon name="credit-card" style={estilo.iconCard} />  R$ {saldoTela}
                </Text>
                </View>
            <Icon name={eye} onPress={handleClick} style={estilo.icon} />
            </View>
            <View style={estilo.menu}>
                <View style={estilo.card}>
                    <Text style={estilo.cardTitle}>Despesas</Text>
                    <Image source={Despesas} style={estilo.cardImage}/>
                    <View style={estilo.cardFooter}> 
                    <Button buttonStyle={estilo.btnAdd}
                     icon={ <Icon name="plus-square" style={{fontSize:23,}} color="#000" />}type="solid" raised='true' onPress={()=> navigation.navigate("AddDespesa")}/>
                     <Button buttonStyle={estilo.btnView}
                     icon={ <Icon name="list-alt" color="#000" style={{fontSize:23,}} />}type="solid" raised='true' />
                    </View>
                </View>
                <View style={estilo.card} >
                    <Text style={estilo.cardTitle}>Receitas</Text>
                    <Image source={Receitas} style={estilo.cardImage}/>
                    <View style={estilo.cardFooter}> 
                    <Button buttonStyle={estilo.btnAdd}
                     icon={ <Icon name="plus-square" style={{fontSize:23,}} color="#000" />}type="solid" raised='true' />
                     <Button buttonStyle={estilo.btnView}
                     icon={ <Icon name="list-alt" color="#000" style={{fontSize:23,}} />}type="solid" raised='true' />
                    </View>
                </View>
                <View style={estilo.cardDown} >
                    <Text style={estilo.cardTitle}>Crédito</Text>
                    <Image source={Credito} style={estilo.cardImage}/>
                    <View style={estilo.cardFooter}> 
                    <Button buttonStyle={estilo.btnAdd}
                     icon={ <Icon name="plus-square" style={{fontSize:23,}} color="#000" />}type="solid" raised='true' />
                     <Button buttonStyle={estilo.btnView}
                     icon={ <Icon name="list-alt" color="#000" style={{fontSize:23,}} />}type="solid" raised='true' />
                    </View>
                </View>
                <View style={estilo.cardDown} >
                    <Text style={estilo.cardTitle}>Relatório</Text>
                    <Image source={Relatorio} style={estilo.cardImage}/>
                    <View style={estilo.cardFooter}> 
                    <Button buttonStyle={estilo.btnAdd}
                     icon={ <Icon name="plus-square" style={{fontSize:23,}} color="#000" />}type="solid" raised='true' />
                     <Button buttonStyle={estilo.btnView}
                     icon={ <Icon name="list-alt" color="#000" style={{fontSize:23,}} />}type="solid" raised='true' />
                    </View>
                </View>
            </View>
        </View>
    );
    

   
    }
    export default Home;
   