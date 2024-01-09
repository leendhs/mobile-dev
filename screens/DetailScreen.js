import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Article, FlatList } from 'react-native';

import DetailArticle from '../components/DetailArticle';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  
  console.log('Received articleId:', id);


  return (
    <View style={styles.screen}>
      <DetailArticle articleId={id}/>
    </View>

  );

}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F8F6F6",
  }
});

export default DetailScreen;