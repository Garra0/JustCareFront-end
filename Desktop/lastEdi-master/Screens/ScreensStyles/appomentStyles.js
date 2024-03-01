import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener:{
        width:"100%",
        height:150,
        padding:30,
        justifyContent:'center',
        position:'relative',

    },
    darkContener:{
        width:"100%",
        height:150,
        padding:30,
        justifyContent:'center',
        position:'relative',
        backgroundColor:"#161616",
    },
    horizontalLine: {
        borderBottomColor: '#b6b6b638', // Change the color as needed
        borderBottomWidth: 1,       // Change the thickness as needed
        marginVertical: 10,
        width:"100%"         // Adjust the vertical spacing as needed
    },
    dateBox:{
        borderRadius:500,  
        width:110,
        height:110,
        borderStyle:"solid",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#c6d8cd",
        backgroundColor:"#c6d8cd81",
        color:"#c6d8cd",
    },
    dateBoxSAr:{
        borderRadius:500,  
        width:110,
        height:110,
        borderStyle:"solid",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#c6d8cd",
        backgroundColor:"#c6d8cd81",
        color:"#c6d8cd",
        left:"70%"
    },
    dateBoxPur:{
        borderRadius:500,  
        width:110,
        height:110,
        borderStyle:"solid",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#9697C8",
        backgroundColor:"#d2d6e6",
        color:"#9697C8"
    },
    dateBoxPurAr:{
        borderRadius:500,  
        width:110,
        height:110,
        borderStyle:"solid",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#9697C8",
        backgroundColor:"#d2d6e6",
        color:"#9697C8",
        left:"70%"
    },
    dateBoxRed:{
        borderRadius:500,  
        width:110,
        height:110,
        borderStyle:"solid",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#F3BCBB",
        backgroundColor:"#EED2D4",
        color:"#F3BCBB",
    },
    dateBoxRedAr:{
        borderRadius:500,  
        width:110,
        height:110,
        borderStyle:"solid",
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#F3BCBB",
        backgroundColor:"#EED2D4",
        color:"#F3BCBB",
        left:"70%"
    },
    name:{
        fontSize:18,
        position:"absolute",
        left:"42%",
        top:'70%'
    },
    nameAr:{
        fontSize:18,
        position:"absolute",
        right:"42%",
        top:'70%'
    },
    time:{
        fontSize:18,
        position:"absolute",
        left:"42%",
        top:'20%',
        fontWeight:"bold",

    },
    timeAr:{
        fontSize:18,
        position:"absolute",
        right:"42%",
        top:'20%',
        fontWeight:"400",

    },
    phone:{
        fontSize:15,
        position:"absolute",
        left:"42%",
        top:'120%',
        color:'#C3C5F3',
    },
    phoneAr:{
        fontSize:15,
        position:"absolute",
        right:"42%",
        top:'120%',
        color:'#C3C5F3',
    },
    deleteAr:{
        position:'absolute' ,
        top:"115%", 
        left:"10%",
    },
    delete:{
        position:'absolute' ,
        top:"115%", 
        left:"105%",
    },
    editAr:{
        position:'absolute' ,
        top:"20%", 
        left:"10%",
    },
    edit:{
        position:'absolute' ,
        top:"20%", 
        left:"105%",
    },
    noResult:{
        height:'100%',
        width:"100%",
        alignSelf:'center'
        
    }
})