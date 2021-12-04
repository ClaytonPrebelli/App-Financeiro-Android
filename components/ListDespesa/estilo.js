import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        paddingVertical:0,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingVertical:5,
    },
    btVoltar:{
        width:140,
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#9653c9',
        marginLeft:10,
    },
    btAtualiza:{
        width:140,
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#f5bc42',
        marginLeft:10,
    },
    itemLinha:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    linhaText:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:200,

    },
    linhaValor:{
        textAlign:'right',
    }
});

export default estilo;