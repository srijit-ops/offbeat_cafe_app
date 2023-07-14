import { StyleSheet, Platform } from 'react-native'

export const globalStyles = StyleSheet.create({
    rootView:{
        paddingHorizontal:25,
        justifyContent:"center",
        
        ...Platform.select({
            ios: {
        flexDirection:"column-reverse",
        marginTop:0
    },
    android: {
        flexDirection:"column-reverse",
        marginTop:0
    },
    default: {
        flexDirection:"row",
        marginTop:60,
        alignItems:"center"
    }
})},
    employeeImg:{
        flex:1, justifyContent:"center",alignItems:"center",
        ...Platform.select({
            ios: {
                 width:"100%"
    },
    android: {
        width:"100%"
    },
    default: {
         width:"40%"
    }
})
    },
    img:{
        ...Platform.select({
            ios: {
                height:300, width:300
    },
    android: {
        height:300, width:300
    },
    default: {
        height:500, width:500
    }
})
        
    },
    formContainer:{
        ...Platform.select({
            ios: {
                flex:1
    },
    android: {
        flex:1
    },
    default: {
        flex:2
    }
})
        
    },
    heading:{
        fontSize:31,
        color:"#FCAE1E",
        fontFamily:"SignikaSemibold",
        marginBottom:22
    },
    inputBox:{
        paddingHorizontal:20,
        paddingVertical:11,
        borderRadius:7,
        borderColor:"#777777",
        borderWidth:1,
        borderStyle:"solid",
        fontFamily:"SignikaRegular",
        fontSize:16,
        marginBottom:13
    },
    button:{
        backgroundColor: "#FCAE1E",
        width:"100%",
        paddingVertical:15,
        paddingHorizontal:20,
        borderRadius:10,
        marginVertical:30
    },
    buttonText:{
        fontFamily:"SignikaMedium",
        textAlign:"center",
        fontSize:18,
        color:"black"
    },
    label:{
        fontSize:17,
        fontFamily:"SignikaRegular",
        marginBottom:12,
        color:"#4C4E52"
    },
    select:{
        fontFamily: "SignikaRegular"
    },
    heads:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:30
    },
    logCard:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingBottom:15,
        borderBottomWidth:1,
        borderBottomColor:"#4C4E52"
    }
})