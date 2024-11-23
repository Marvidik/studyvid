import { View, Text,StyleSheet ,ScrollView} from 'react-native'
import React from 'react'
import BookCard from '../components/BookComp';

const books = [
    {
      image: require("../assets/alchemist2.jpeg"),
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: 3.5,
    },
    {
      image: require("../assets/money.jpeg"),
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.0,
    },
    {
      image: require("../assets/rich.jpeg"),
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.8,
    },
    {
      image: require("../assets/a.jpeg"),
      title: "1984",
      author: "George Orwell",
      rating: 5.0,
    },
    
  
  ];
export default function Books() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.books}>All Books</Text>
      <View style={styles.rowContainer}>
        {Array.from({ length: Math.ceil(books.length / 2) }).map((_, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {books.slice(rowIndex * 2, rowIndex * 2 + 2).map((book, index) => (
              <BookCard
                key={index}
                image={book.image}
                title={book.title}
                author={book.author}
                rating={book.rating}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:44
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
      },
      rowContainer: {
        marginTop: 10,
      },
      books:{
        fontSize:28,
        alignSelf:"center",
        marginTop:"10"
      }
})