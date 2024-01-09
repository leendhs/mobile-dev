import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';
import Icon from 'react-native-ico-material-design';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iconSize = 30;

const FurnitureScreen = ({ route, navigation }) => {
  const { id } = route.params || {}; //als route.params niet bestaat, wordt een leeg object gebruikt om fouten ver voorkomen
  const [articles, setArticle] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isSorted, setIsSorted] = useState(false); // Default sorting order staat uit


  // als sort bij price wordt aangeduid, worden de artikelen gesorteerd obv prijs
  const toggleSortOrder = () => {
    setIsSorted(!isSorted);
    };

  // nieuwe array sortedArticles. Als isSroted true is, worden de artikelen op prijs gesorteerd
  //parseFloat -> prijzen worden gezien als getallen  

  const sortedArticles = isSorted //controleert op isSorted true is. True = eerste deel wordt uitgevoerd, false = tweede deel wordt uitgevoerd 
  ? articles.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  : articles;

  const getFurniture = async () => {
    try {
      let url;

      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:51242/api/furniture";
      } else {
        url = "http://cms.ddev.site/api/furniture";
      }

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();
      setArticle(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFurniture();
  }, []);

  useEffect(() => {
    console.log('Favorites:', favorites);
  }, [favorites]); 

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Browse our products</Text>
      <Button 
        title="Sort by Price"
        onPress={toggleSortOrder} />

      <FlatList //waarom flatlist? 
        style={styles.list}
        data={sortedArticles} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => {
          let url;
          if (Platform.OS == 'android') {
            item.bannerImg = item.bannerImg.replace('cms-API-start', '10.0.2.2:51242');
          }

          return (
            <FurnitureItem
              id={item.id}
              title={item.title}
              price={item.price}
              bannerImg={item.bannerImg}
              navigation={navigation}
              onSelectArticle={(selectedId) => {
                console.log('Selected Furniture Item ID:', selectedId);
                navigation.navigate('Detail', { id: selectedId });
              }}
              onAddToFavorites={(item) => {
                setFavorites((prevFavorites) => {
                  const updatedFavorites = [...prevFavorites, item];
                  navigation.navigate('Favorites', { favorites: updatedFavorites });
                  return updatedFavorites;
                });
              }}
            />
          );
        }}
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
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
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

export default FurnitureScreen;
