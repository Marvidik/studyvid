import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'
import CustomButton from '../components/CustomButton'
import ImageRoundComp from '../components/ImageRoundComp'

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
            <Image style={styles.logo} source={require("../assets/lo.jpeg")}/>
            </View>
            <Text style={styles.text1}>Create Account</Text>
            <LoginForm/>
    
            <CustomButton style={styles.button} title={"Create Account"}/>
    
            <Text style={styles.text2}>----------or----------</Text>
    
            {/* <View style={styles.companies}>
        
                <ImageRoundComp source={require("../assets/fb.png")}/>
                <ImageRoundComp source={require("../assets/google.png")}/>
                <ImageRoundComp source={require("../assets/apples.png")}/>
            </View> */}

            
            <TouchableOpacity style={styles.googlelogin}>
                <Image style={styles.googlelogo} source={require("../assets/google.png")}/>
                <Text style={styles.googletext}>Register with Google</Text>
            </TouchableOpacity>
    
            <View style={styles.create}>
                <Text style={styles.text3}>have an Account </Text>
                <Text style={styles.text4}>Login</Text>
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
    },
    googlelogin:{
        backgroundColor:"white",
        height:75,
        width:300,
        flexDirection:"row",
        alignSelf:"center",
        borderColor:"white",
        borderRadius:10,
        elevation:12,
        justifyContent:"center",
        borderWidth:1,
        marginTop:20
       
    },
    googlelogo:{
        height:50,
        width:50,
        alignSelf:"center"
    },
    googletext:{
        fontSize:20,
        color:"#5c4b94",
        fontStyle:"italic",
        alignSelf:"center",
        marginLeft:10
    }
})