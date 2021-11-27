import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    principal: {
        width: '100%',
        display: "flex",
        flexDirection:"row",
        backgroundColor:'#5bc7fc',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop:60,
        paddingBottom:30,
        paddingHorizontal:0,
        borderBottomColor:'#ccc',
        borderBottomWidth:2,
        shadowColor: "black",
        shadowOffset: {width:0, height:10},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,

    },
    texto: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    image:{
        width:50,
        height:50,
        marginLeft:10,
        marginRight:10,
    }
});
   export default estilo;