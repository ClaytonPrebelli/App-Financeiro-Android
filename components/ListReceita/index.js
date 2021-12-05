import React, { useState,useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Switch, Alert} from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import axios from "axios";

import estilo from './estilo';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  

var mesAtual = (new Date().getMonth())+1;
var listaTemp = [];


const formataValor = (receitas) => {
    for(let i = 0; i < receitas.length; i++){
        receitas[i].valor = receitas[i].valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1');
        receitas[i].valor = receitas[i].valor.toString().replace(".", ",");
    }
  }

const ListReceita = ({navigation}) => {
  const [atualiza, setAtualiza] = useState(false);
  const [receitas, setReceitas] = useState([]);
  useEffect(() => {
axios.get('https://financasback.azurewebsites.net/Receitas/ListReceitas',{
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
     
        if (response.data[i].mesRef == mesAtual && response.data[i].anoRef == new Date().getFullYear()){
        listaTemp.push(response.data[i]);
        
        }
    }
  

  
  // ordenar por pago
  listaTemp.sort(function(a, b){
    return a.pago - b.pago;
  });

    formataValor(listaTemp);
    setReceitas(listaTemp);

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

  const toggleSwitch = (u) => {
    
    u.pago = !u.pago;

    if(typeof(u.valor) == "string"){
      u.valor = u.valor.replace(",", ".");
      u.valor = parseFloat(u.valor);
      u.valor = u.valor.toFixed(2);
    }
    axios.put('https://financasback.azurewebsites.net/Receitas/updateReceita', u,{
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
    })
    .then(function (response) {
       Alert("receita atualizada com sucesso!");
    })
    .catch(function (error) {
        console.log(error);
    });
    recarregarLista();
    return u
  }
  const deleteReceita = (id) => {
    axios.delete('https://financasback.azurewebsites.net/Receitas/deleteReceita/'+id,{
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
    }).
    then(function (response) {
        alert("Receita excluida com sucesso!");
    }
    ).catch(function (error) {
        console.log(error);
    }
    );
    recarregarLista();
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
  <Card.Title>Receitas</Card.Title>
  <Card.Divider/>
  {
   receitas.map((u, i) => {
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
                       
                        value={u.pago}
                        onValueChange={() => {
                            toggleSwitch(u)
                        }
                        }
              />
              <Button title="x" titleStyle={{fontSize:14,marginTop:-9,color:'#fff',textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1}} buttonStyle={estilo.btExcluir} onPress={() => {
                deleteReceita(u.id)
              }}
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

export default ListReceita;