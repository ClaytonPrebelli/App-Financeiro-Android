import {StyleSheet} from 'react-native';


const estilo = StyleSheet.create({
    principal: {
        flex:1,
        backgroundColor:'#f7fbfc',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding:10,

    },
    saldoBox:{
        display: "flex",
        flexDirection:"row",
        alignItems: 'center',
    },
    valoresBox:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    saldoTxt:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        marginLeft:10,
    },
    saldo:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        marginLeft:10,
       
    },
    icon: {
        fontSize:30,
        color:'#000',
        marginLeft:30,
    },
    iconMoney:{
        fontSize:30,
        color:'#178021'
    },
    iconCard:{
        fontSize:30,
        color:'#6b1780',
    },  
    menu:{
        marginTop:10,
        borderTopColor:'#000',
        borderTopWidth:1,
        paddingTop:30,
        paddingBottom:20,
        paddingHorizontal:20,
        width: '100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
    card:{
        width: '47%',
        padding:15,
        borderRadius:10,
        backgroundColor:'#d7effc',
        borderWidth:1,
        alignItems:'center',
        alignContent:'space-between',
        borderColor:'#000',
        shadowColor: "black",
        shadowOffset: {width:100, height:10},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 1,
    },
    cardDown:{
        width: '47%',
        padding:15,
        borderRadius:10,
        backgroundColor:'#d7effc',
        borderWidth:1,
        alignItems:'center',
        alignContent:'space-between',
        borderColor:'#000',
        shadowColor: "black",
        shadowOffset: {width:100, height:10},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 1,
        marginTop:20,
    },
    cardImage:{
        width:80,
        height: 80,
        marginTop:10,
    },
    cardTitle:{
        fontSize:18,
        fontWeight:'bold',
    },
    cardFooter:{
        width: '100%',
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#d7effc',
    },
    btnAdd:{
        width: 50,
        height: 40,
        borderWidth:1,
        borderColor:'#659e57',
        backgroundColor:'#93e37f',
    },
    btnView:{
        width: 50,
        height: 40,
        borderWidth:1,
        borderColor:'#ab8f32',
        backgroundColor:'#d9b541',
    },
    

});

export default estilo;
