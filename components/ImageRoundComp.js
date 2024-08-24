import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ImageRoundComp({source}) {
  return (
    <TouchableOpacity style={styles.comp}>
      <Image style={styles.image} source={source}/>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image:{
        height:60,
        width:60,
        alignSelf:"center"
    },
    comp:{
        backgroundColor:"#fff",
        height:80,
        width:80,
        justifyContent:"center",
        alignItems:"center",
        marginRight:20,
        elevation:10,
        borderRadius:20
    }
})