import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Pressable, TouchableOpacity } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';
import Icon from 'react-native-ico-material-design';

const iconSize = 30;


const FavoritesScreen = ({ route, navigation }) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Update favorieten
    //callback functie wordt uitgevoerd wanneer het scherm actief wordt 
    //unsubscribe wordt gebruikt om event listener uit te schakelen als het scherm niet meer actief is
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params?.favorites) { //is er een route.params en bevat het favorites? Dan wordt de if uitgevoerd 
        setFavorites(route.params.favorites); //setFav wordt gebruikt om fav state bij te werken met de nieuwe favs die zijn doorgegeven via route.params.fav
      }
    });

    return unsubscribe;
  }, [navigation, route.params?.favorites]);

  return (
    <View style={styles.screen}> 
      <Text style={styles.title}>Cart</Text>
      <FlatList
        style={styles.list}
        data={favorites} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FurnitureItem
            id={item.id}
            title={item.title}
            price={item.price}
            bannerImg={item.bannerImg}
            onSelectArticle={(selectedId) => {
              navigation.navigate('Detail', { id: selectedId });
            }}
          />      
        )}
      /> 

    <TouchableOpacity style={styles.addToCartText}>
          <Text style={styles.text}>Add to Cart</Text>
    </TouchableOpacity>

    <View style={styles.nav}>
      <Icon name="home-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Home')} />
      <Icon name="filter-results-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Furniture')} />
      <Icon name="favorite-heart-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Favorites')} />
      <Icon name="phone-call-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Contact')} />
    </View>
  </View>

  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F8F6F6",
    padding: 24,
    justifyContent: 'space-evenly'
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
  },

  categories: {
    flexDirection: "row",
  },

  list: {
    height: "90%",
  },

  title: {
    fontSize: 24,
    color: "#264731",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center",
  },

  nav: {
    flexDirection: 'row',
    backgroundColor: '#a2bdab',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 40,
    height: 50,
  }, 

  IconBehave: {
    flex: 1,
    padding: 14, 
  }, 

  addToCartText: {
    marginTop: 32,
    marginBottom: 32,
    backgroundColor: '#264731',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  }
});


export default FavoritesScreen;


