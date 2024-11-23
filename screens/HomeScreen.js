import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import SearchInput from '../components/SearchComp';
import CategoryItem from '../components/CategoryComp';
import BookCard from '../components/BookComp';

const books = [
  {
    image: require("../assets/alchemist2.jpeg"),
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: 4.5,
  },
  {
    image: require("../assets/money.jpeg"),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.5,
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
    rating: 4.6,
  },

];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.first}>
        <Image style={styles.googlelogo} source={require("../assets/google.png")} />
        <Text>Saviez Books</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={40} color="green" />
        </TouchableOpacity>
      </View>
      
      <SearchInput placeholder="Type to search..." />

      <View style={styles.catt}>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.category2}>View More</Text>
      </View>

      <View style={styles.cat}>
        <CategoryItem iconName="work-outline" iconSize={30} iconColor="green" categoryText="Business" />
        <CategoryItem iconName="school" iconSize={30} iconColor="green" categoryText="Education" />
        <CategoryItem iconName="favorite-outline" iconSize={30} iconColor="green" categoryText="Romance" />
      </View>

      <View style={styles.catt}>
        <Text style={styles.category}>Trending</Text>
        <Text style={styles.category2}>View More</Text>
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  googlelogo: {
    height: 50,
    width: 50,
  },
  category: {
    fontSize: 28,
    alignSelf: "center",
  },
  category2: {
    fontSize: 18,
    alignSelf: "center",
    color: "grey",
  },
  cat: {
    flexDirection: "row",
  },
  catt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  rowContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
