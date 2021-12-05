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
        alignItems:'center',
    },
    linhaText:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:200,

    },
    linhaValor:{
        textAlign:'right',
    },
    btExcluir:{
        width:25,
        height:25,
        backgroundColor:'#f5331d',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    x:{
        color:'#fff',
        fontSize:18,
        marginTop:-2,
    
    }
});

export default estilo;