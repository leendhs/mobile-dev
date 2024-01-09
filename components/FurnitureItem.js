import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const FurnitureItem = ({ id, title, price, bannerImg, onSelectArticle, onAddToFavorites }) => {  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onSelectArticle(id)}>
      <View style={styles.furnItem}>
        <Image
          style={styles.banner}
          source={{
            uri: bannerImg
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€{price}</Text>

        <TouchableOpacity onPress={() => onAddToFavorites({ id, title, price, bannerImg })}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  furnItem: {
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
    color: "#264731",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },
  intro: {
    marginBottom: 8
  }, 

  addToCartText: {
    color: '#264731',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
export default FurnitureItem;



