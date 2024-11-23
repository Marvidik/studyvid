import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import CategoryItem from '../components/CategoryComp';

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.category}>Category</Text>
  
    <View style={styles.cat}>
      <CategoryItem iconName="work-outline" iconSize={30} iconColor="green" categoryText="Business" />
      <CategoryItem iconName="school" iconSize={30} iconColor="green" categoryText="Education" />
      <CategoryItem iconName="favorite-outline" iconSize={30} iconColor="green" categoryText="Romance" />
    </View>
  
    <View style={styles.cat}>
      <CategoryItem iconName="rocket" iconSize={30} iconColor="green" categoryText="Science Fiction" />
      <CategoryItem iconName="search" iconSize={30} iconColor="green" categoryText="Mystery" />
      <CategoryItem iconName="stars" iconSize={30} iconColor="green" categoryText="Fantasy" />
    </View>
  
    <View style={styles.cat}>
      <CategoryItem iconName="history" iconSize={30} iconColor="green" categoryText="History" />
      <CategoryItem iconName="person" iconSize={30} iconColor="green" categoryText="Biography" />
      <CategoryItem iconName="psychology" iconSize={30} iconColor="green" categoryText="Self-Help" />
    </View>
  
    <View style={styles.cat}>
      <CategoryItem iconName="restaurant" iconSize={30} iconColor="green" categoryText="Cookbooks" />
      <CategoryItem iconName="palette" iconSize={30} iconColor="green" categoryText="Art" />
      
    </View>
  
   
  </View>
  
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:54,
        flex:1
       
    },
    cat: {
        flexDirection: "row",
        
      },
      category:{
        fontSize:28,
        alignSelf:"center",
        marginBottom:20
      }
})