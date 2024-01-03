import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform, ScrollView, Button } from 'react-native';

import FurnitureItem from '../components/FurnitureItem';

const HomeScreen = ({ navigation }) => {
    const [articles, setArticle,] = useState([]);
    
    const getFurniture = async () => {
       //         //request naar CMS 
        try { //await = wacht tot wanneer je de resultaten hebt voor je verder gaat 
          let url;
          
          if(Platform.OS == 'android'){
            url = " http://10.0.2.2:51242/api/furniture"; //achter : komt van ddev describe, ook veranderen in newsarticle
          }
            
          else {
            url = "http://cms.ddev.site/api/furniture"
          }
    
          const response = await fetch(url, {
            "method": "GET",
          });
          const json = await response.json();
          console.log(json);
          setArticle(json.items); //items komt uit postman, is wat je krijgt wanneer je op get duwt 
        } catch (error) {
          console.error(error); //try catch is beetje zoals if else 
        }
    } 

    useEffect(() => {
        getFurniture();
    }, []);

    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Welcome to Ekia</Text>
        <FlatList
          style={styles.list}
          data={articles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            // ... your existing code ...
            let url;
          if(Platform.OS == 'android'){
            item.bannerImg = item.bannerImg.replace('cms--API-start', '10.0.2.2:51242') 
          }

          
          return <FurnitureItem
            id={item.id}
            title={item.title}
            bannerImg={item.bannerImg} //moet bannerImg zijn ma ja is een error want ni opgevuld
            navigation={navigation}
            onSelectArticle={(selectedId) => { navigation.navigate('Furniture', { id: selectedId }) }}
          />
          }}
        />

        <Button
        title="All Furniture"
        onPress={() => navigation.navigate('Furniture')}
      />
      </View>

    );
};

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#F8F6F6",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center"
  }
});

export default HomeScreen;



