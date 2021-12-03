import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Switch, Alert, RefreshControl} from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import axios from "axios";

import estilo from './estilo';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const despesas =[
    {

    }
]
var mesAtual = (new Date().getMonth())+1;



axios.get('https://financasback.azurewebsites.net/Despesas/ListDespesas',{
    method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
})
.then(function (response) {
  despesas.pop();
    for(let i = 0; i < response.data.length; i++){
        if (response.data[i].mesRef == mesAtual){
        despesas.push(response.data[i]);
        }
    }
    formataValor(despesas);

})
.catch(function (error) {
    console.log(error);
});

const formataValor = (despesas) => {
    for(let i = 0; i < despesas.length; i++){
        despesas[i].valor = despesas[i].valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1');
        despesas[i].valor = despesas[i].valor.toString().replace(".", ",");
    }
  }

const ListDespesa = ({navigation}) => {
 


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(true));
    }, [])
    
    const goBack = () => {
      navigation.navigate("Home");
  }
    return(
        <ScrollView
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
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

          </View>
          <Divider orientation="horizontal" />
        </View>
        
       
      );
    })
  }
</Card>
<Button title="Voltar" titleStyle={{color:'#fff',textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1}} buttonStyle={estilo.btVoltar} onPress={goBack} 
             icon={
                    <Icon
                    name="undo"
                    size={18}
                    color="#fff"
                    style={{
                        marginRight:10,
                        textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1
                    }}
                    />
                }/>
            </View>
        </ScrollView>

    );
}

export default ListDespesa;