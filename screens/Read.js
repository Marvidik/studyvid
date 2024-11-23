import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

export default function Read() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>The Great Alchemist</Text>
        <Text style={styles.paragraph}>
          Once upon a time, in a land far, far away, there was a young adventurer named Leo. He had always dreamed of exploring the vast forests, mountains, and seas that lay beyond his village. The villagers spoke of mystical creatures, ancient ruins, and treasures that could change the course of history, but Leo was determined to experience it all for himself.
        </Text>
        <Text style={styles.paragraph}>
          One morning, Leo set off on his journey, packing only the essentials: a map, a compass, and his trusty sword. He bid farewell to his family and friends, promising to return with stories of great adventures. As he ventured into the unknown, he encountered challenges and dangers that tested his courage, but he never lost hope.
        </Text>
        <Text style={styles.paragraph}>
          Days turned into weeks, and weeks turned into months, but Leo pressed on. He crossed rivers, climbed mountains, and navigated dense forests. Along the way, he met strange and wonderful creatures, some kind and others fierce. He learned the art of survival and discovered new things about himself.
        </Text>
        {/* Add more paragraphs as needed */}
        <Text style={styles.paragraph}>
          Days turned into weeks, and weeks turned into months, but Leo pressed on. He crossed rivers, climbed mountains, and navigated dense forests. Along the way, he met strange and wonderful creatures, some kind and others fierce. He learned the art of survival and discovered new things about himself.
        </Text>
        <Text style={styles.paragraph}>
          Days turned into weeks, and weeks turned into months, but Leo pressed on. He crossed rivers, climbed mountains, and navigated dense forests. Along the way, he met strange and wonderful creatures, some kind and others fierce. He learned the art of survival and discovered new things about himself.
        </Text>
        <Text style={styles.paragraph}>
          Days turned into weeks, and weeks turned into months, but Leo pressed on. He crossed rivers, climbed mountains, and navigated dense forests. Along the way, he met strange and wonderful creatures, some kind and others fierce. He learned the art of survival and discovered new things about himself.
        </Text>
        <Text style={styles.paragraph}>
          Days turned into weeks, and weeks turned into months, but Leo pressed on. He crossed rivers, climbed mountains, and navigated dense forests. Along the way, he met strange and wonderful creatures, some kind and others fierce. He learned the art of survival and discovered new things about himself.
        </Text>
        <Text style={styles.paragraph}>
          Days turned into weeks, and weeks turned into months, but Leo pressed on. He crossed rivers, climbed mountains, and navigated dense forests. Along the way, he met strange and wonderful creatures, some kind and others fierce. He learned the art of survival and discovered new things about himself.
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#f4f4f4',
      },
      content: {
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
      },
      paragraph: {
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 15,
        color: '#555',
      },
})