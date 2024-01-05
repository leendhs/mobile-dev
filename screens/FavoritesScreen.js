import React from 'react';
import { View, Text, FlatList } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';

const FavoritesScreen = ({ favorites, navigation }) => {
  return (
    <View>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FurnitureItem
            id={item.id}
            title={item.title}
            price={item.price}
            bannerImg={item.bannerImg}
            cat={item.cat}
            onSelectArticle={(selectedId) => {
              navigation.navigate('Detail', { id: selectedId });
            }}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
