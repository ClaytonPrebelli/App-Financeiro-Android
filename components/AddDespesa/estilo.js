import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    alertaTopo: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        
    },
    textAlert:{
        fontSize: 18,
        paddingBottom:10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    boxForms:{
        paddingHorizontal: 10,
        paddingVertical: 15,

    },
    lineForm:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-end',
        paddingHorizontal:10,
    },
    textError:{
        color: 'red',
        fontSize: 12,
        paddingHorizontal: 10,
        marginTop: -30,
        
    },
    smallInputs:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-start',
    },
    boxSmall:{
        width: '47%',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    boxSwitch:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop: -10,
        paddingHorizontal:10,
    },
    textSwitch:{
        fontSize:16,
        fontWeight:'bold',
        color: '#86939E',
    },
    boxBotao:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop: 20,
        paddingHorizontal:10,
        
      
    },
    btSalvar:{
        
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#6fa848',
        marginRight:0,
    },
    btLimpar:{
        
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#d9b541',
        color:'#c9a653',
        marginLeft:10,
    },
    btVoltar:{
        paddingHorizontal:10,
        height:50,
        backgroundColor:'#9653c9',
        marginLeft:10,
    }
   
});


