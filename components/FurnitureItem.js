import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const FurnitureItem = ({ id, title, price, bannerImg, cat, onSelectArticle, onAddToFavorites }) => {  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onSelectArticle(id)}>
      <View style={styles.newsItem}>
        <Image
          style={styles.banner}
          source={{
            uri: bannerImg
          }}
        />
        <Text style={styles.title}>{title}</Text>
        {/* Assuming you have fulltext, price, and cat as props */}
        <Text style={styles.fulltext}>{/* fulltext prop here */}</Text>
        <Text style={styles.price}>€{price}</Text>
        <Text style={styles.cat}>{cat}</Text>
        <Button
          title="Add to Favorites"
          onPress={() => onAddToFavorites({ id, title, price, bannerImg, cat })}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  newsItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  banner: {
    height: 200
  },
  title: {
    fontWeight: "bold",
    color: "#D24335",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },
  intro: {
    marginBottom: 8
  }
});
export default FurnitureItem;



