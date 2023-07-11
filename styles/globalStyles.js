import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    rootView:{
        paddingHorizontal:25
    },
    employeeImg:{
        flex:1, justifyContent:"center",alignItems:"center"
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
    }
})