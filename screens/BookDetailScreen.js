import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

export default function BookDetailScreen() {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.book} source={require("../assets/alchemist2.jpeg")} />
        </View>
   
        <View style={styles.g}>
            <Text style={styles.text1}>Genre:</Text>
            <Text style={styles.text1}>Work</Text>
        </View>
        <View style={styles.g}>
            <Text style={styles.text1}>Pages:</Text>
            <Text style={styles.text1}>1256</Text>
        </View>
        
        <Text style={styles.text2}>The Alchemist</Text>
        <Text style={styles.text3}>Mr Marvel </Text>
        

        <Text style={styles.paragraph}>
          Once upon a time, in a land far, far away, there was a young adventurer named Leo. He had always dreamed of exploring the vast forests, mountains, and seas that lay beyond his village. The villagers spoke of mystical creatures, ancient ruins, and treasures that could change the course of history, but Leo was determined to experience it all for himself.
        </Text>

        
        <CustomButton style={styles.button} title={"READ"}/>


    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:44
    },
    g:{
        flexDirection:"row",
        marginLeft:5,
        marginTop:10
    },
    book:{
        height:300,
        width:300,
        alignSelf:"center"
    },
    text1:{
        fontSize:20,
        color:"grey"
        
    },
    text2:{
        fontSize:32,
        marginLeft:5,
        marginBottom:10
        
    },
    text3:{
        fontSize:20,
        marginLeft:5,
        color:"grey",
        marginBottom:20
        
    },
    paragraph: {
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 60,
        color: '#555',
        marginHorizontal:5
      },
      button:{
        height:60,
        marginHorizontal:20,
        
    },
})