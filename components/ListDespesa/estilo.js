import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingVertical:30,
    },
    btVoltar:{
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#9653c9',
        marginLeft:10,
    },
    itemLinha:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    linhaText:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:240,

    },
    linhaValor:{
        textAlign:'right',
    }
});

export default estilo;