import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'
import CustomButton from '../components/CustomButton'
import ImageRoundComp from '../components/ImageRoundComp'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.image}>
        <Image style={styles.logo} source={require("../assets/lo.jpeg")}/>
        </View>
        <Text style={styles.text1}>Welcome Back</Text>
        <LoginForm/>

        <CustomButton style={styles.button} title={"Login"}/>

        <Text style={styles.text2}>----------or----------</Text>

        <View style={styles.companies}>
            <ImageRoundComp source={require("../assets/fb.png")}/>
            <ImageRoundComp source={require("../assets/google.png")}/>
            <ImageRoundComp source={require("../assets/apples.png")}/>
        </View>

        <View style={styles.create}>
            <Text style={styles.text3}>Dont have an Account </Text>
            <Text style={styles.text4}>Signup</Text>
        </View>
        
      
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        
    },
    logo:{
        height:150,
        marginTop:70,
        width:150,
        alignSelf:"center",
        borderRadius:80
    },
    image:{
        height:160,
        width:160,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:30
    },
    text1:{
        alignSelf:"center",
        paddingTop:60,
        fontSize:32,
        color:"#5c4b94",
        fontStyle:"italic"
    },
    text2:{
        alignSelf:"center",
        paddingTop:60,
        fontSize:28,
        color:"grey",
        fontStyle:"italic"
    },
    text3:{
        alignSelf:"center",
        paddingTop:30,
        fontSize:22,
        color:"grey",
        fontStyle:"italic"
    },
    text4:{
        alignSelf:"center",
        paddingTop:30,
        fontSize:28,
        color:"#5c4b94",
        fontStyle:"italic"
    },

    button:{
        height:60,
        marginHorizontal:20
    },
    companies:{
        flexDirection:"row",
        marginHorizontal:20,
        alignSelf:"center",
        justifyContent:"space-around",
        padding:40,
        marginHorizontal:20
        
    },
    create:{
        flexDirection:"row",
        alignSelf:"center"
    }
})