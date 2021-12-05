import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Switch, Alert} from 'react-native';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

import estilo from './estilo'

const AddReceita = (props) => {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');


    const [nomeValida, setNomeValida] = useState(true);
    const [valorValida, setValorValida] = useState(true);


    const[mes, setMes] = useState('');
    const[mesValida, setMesValida] = useState(true);

    const[ano, setAno] = useState(new Date().getFullYear());

    const[pago, setPago] = useState(false);

    const [objeto, setObjeto] = useState({
        nome: '',
        valor: '',
        anoRef: '',
        mesRef: '',
        pago: false
    });

    const togglePago = () => {
        setPago(!pago);
    }

    const formataValor = (valor) => {
        let valorFormatado = valor.replace(',', '.');
        setValor(valorFormatado)
    }
    

const resetaError = (valor) => {
    
    if(valor =="nome"){
        setNomeValida(true)
    } else if(valor =="valor"){
        setValorValida(true)
    }
    else if(valor =="mes"){
        setMesValida(true)
    }

}
const validaForm = () => {
    if(nome.length <1){
        setNomeValida(false)
    }else{
        setNomeValida(true)
    }
    if(valor.length <1){
        setValorValida(false)
    }else{
        setValorValida(true)
    }
    if(mes.length <1){
        setMesValida(false)
    }
    else{
        setMesValida(true)
    }
   
    if(nome.length>0 && valor.length>0 && mes.length>0 ){
        let objetoEnvia ={
            nome: nome,
            valor: valor,
            anoRef: ano,
            mesRef: mes,
            pago: pago
        }
        JSON.stringify(objetoEnvia)
        
       axios.post('https://financasback.azurewebsites.net/Receitas/createReceitas/', objetoEnvia, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
       })
        .then(response => {
            alert(`Receita ${nome} adicionada`)
            limpaForm()
              props.navigation.navigate('Home')
        })
        .catch(error => {
           console.log(error)
        })

}
}
const limpaForm = () => {
    setNome('');
    setValor('');
    setPago(false);
    setNomeValida(true);
    setValorValida(true);
}
const goBack = () => {
    limpaForm();
    props.navigation.goBack();
}


    return (
        <ScrollView>
            <View style={estilo.alertaTopo}>
                <Text style={estilo.textAlert}>Adicionar as Receitas que foram ou serão recebidas</Text>
            </View>
            <View style={estilo.boxForms}>
              
                    <Input label="Nome" autoFocus={false} name="nome"style={nomeValida?{color:'#838b8f'}:{backgroundColor:'#fcc7bb'}} onFocus={()=>resetaError('nome')} keyboardAppearance="default" keyboardType="default" placeholder="Digite o nome da receita" value={nome} onChangeText={valor => setNome(valor)}/>
                    <Text style={estilo.textError}>{nomeValida?'':'O que é isso?'}</Text>
                
              
                    <Input label="Valor" style={valorValida?{color:'#838b8f'}:{backgroundColor:'#fcc7bb'}} keyboardAppearance="default" keyboardType="number-pad"  leftIcon={<Text style={{color:'#838b8f', fontSize:18}}>R$</Text>}  value={valor} onFocus={() =>resetaError('valor')} placeholder="00,00" onChangeText={valor => formataValor(valor)} />
                    <Text style={estilo.textError}>{valorValida?'':'Quanto?'}</Text>
                            <Input label="Mês Referência" style={mesValida?{color:'#838b8f'}:{backgroundColor:'#fcc7bb'}} keyboardAppearance="default" keyboardType="number-pad" value={mes} onFocus={() =>resetaError('mes')} placeholder="00" onChangeText={dados => setMes(dados)} />
                            <Text style={estilo.textError}>{mesValida?'':'Pra qual mês?'}</Text>
                   
                    <View style={estilo.boxSwitch}>
                        <Text style={estilo.textSwitch}>Recebido ?</Text>
                       <Switch 
                        trackColor={{ false: "#767577", true: "#648251" }}
                        thumbColor={pago ? "#6fa848" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={togglePago}
                        value={pago}
      />
      </View>
      <View style={estilo.boxBotao}>
     
             <Button title="Salvar" titleStyle={{color:'#fff',textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1}} buttonStyle={estilo.btSalvar} onPress={validaForm} 
             icon={
                    <Icon
                    name="save"
                    size={18}
                    color="#fff"
                    style={{
                        marginRight:10,
                        textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1
                    }}
                    />
                }/>
                 <Button title="Limpar" titleStyle={{color:'#fff',textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1}} buttonStyle={estilo.btLimpar} onPress={limpaForm} 
             icon={
                    <Icon
                    name="trash"
                    size={18}
                    color="#fff"
                    style={{
                        marginRight:10,
                        textShadowColor:'#000',textShadowOffset:{width:1,height:1},textShadowRadius:1
                    }}
                    />
                }/>
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
            </View>
        </ScrollView>
    );

}
export default AddReceita;