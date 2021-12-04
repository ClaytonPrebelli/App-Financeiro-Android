import React, { useState,useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Switch} from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import axios from "axios";

import estilo from './estilo';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  

var mesAtual = (new Date().getMonth())+1;
var listaTemp = [];


const formataValor = (despesas) => {
    for(let i = 0; i < despesas.length; i++){
        despesas[i].valor = despesas[i].valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1');
        despesas[i].valor = despesas[i].valor.toString().replace(".", ",");
    }
  }

const ListDespesa = ({navigation}) => {
  const [atualiza, setAtualiza] = useState(false);
  const [despesas, setDespesas] = useState([]);
  useEffect(() => {
axios.get('https://financasback.azurewebsites.net/Despesas/ListDespesas',{
    method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
})
.then(function (response) {
    listaTemp = []
    for(let i = 0; i < response.data.length; i++){
        if (response.data[i].mesRef == mesAtual){
        listaTemp.push(response.data[i]);
        }
    }
  // ordenar por pago
  listaTemp.sort(function(a, b){
    return a.pago - b.pago;
  });
  
    formataValor(listaTemp);
    setDespesas(listaTemp);

})
.catch(function (error) {
    console.log(error);
});
  }, [atualiza]);
  
    
    const goBack = () => {
      navigation.navigate("Home");
  }
  const recarregarLista = () => {
    setAtualiza(!atualiza);
  }

  const pagarDespesa = (id) => {

  }


    return(
      <View>
        <View style={estilo.header}>
         <Button title="Atualizar" titleStyle={{color:'#fff',textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1}} buttonStyle={estilo.btAtualiza} onPress={recarregarLista} 
             icon={
                    <Icon
                    name="sync"
                    size={22}
                    color="#fff"
                    style={{
                      marginRight:10,
                      textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1
                  }}/>
                }/>
                <Button title="Voltar" titleStyle={{color:'#fff',textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1}} buttonStyle={estilo.btVoltar} onPress={goBack} 
             icon={
                    <Icon
                    name="undo"
                    size={22}
                    color="#fff"
                    style={{
                        marginRight:10,
                        textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1
                    }}
                    />
                }/>
                </View>
        <ScrollView>
        
            <View style={estilo.container}>
           
            <Card>
  <Card.Title>Despesas</Card.Title>
  <Card.Divider/>
  {
   despesas.map((u, i) => {
      return (
        <View key={i} >
            <View style={estilo.itemLinha}>
              <View style={estilo.linhaText}>
                  <Text >{u.nome} </Text>
                  
                  <Text style={estilo.linhaValor}> R$ {u.valor}</Text>
              </View>
              <Switch 
                        trackColor={{ false: "#767577", true: "#648251" }}
                        thumbColor={u.pago ? "#6fa848" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={pagarDespesa(u.id)}
                        value={u.pago}
      />
          </View>
          <Divider orientation="horizontal" />
        </View>
        
       
      );
    })
  }
</Card>

               
            </View>
        </ScrollView>
        </View>
    );
}

export default ListDespesa;