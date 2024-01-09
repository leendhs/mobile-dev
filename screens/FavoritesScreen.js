import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Pressable } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';
import Icon from 'react-native-ico-material-design';

const iconSize = 30;


const FavoritesScreen = ({ route, navigation }) => {

    state = {
    screenText: 'press a button'
  }

  changeText = (text) => {
    console.log(text + 'had been pressed')
    this.setState({
      screenText: text
    })
  }

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Update favorites when the screen is focused
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params?.favorites) {
        setFavorites(route.params.favorites);
      }
    });

    return unsubscribe;
  }, [navigation, route.params?.favorites]);

  return (
    <View style={styles.screen}> 
      <Text style={styles.title}>Favorites</Text>
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
            // cat={item.cat}
            onSelectArticle={(selectedId) => {
              navigation.navigate('Detail', { id: selectedId });
            }}
          />
        )}
      /> 

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
  }
});


export default FavoritesScreen;
