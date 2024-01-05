import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image, Platform, ScrollView, Button } from 'react-native';

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
      <View>
          <Image
            style={styles.headerImage}
            source={require('../assets/img/header.avif')}
          />
          <View style={styles.titleOverlayContainer}>
            <Text style={styles.titleOverlay}>Welcome to Ekia</Text>
          </View>
      </View> 
       
 


<View style={styles.nav}>
        <Button 
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Furniture"
          onPress={() => navigation.navigate('Furniture')}
        />
        <Button
          title="Favorites"
          onPress={() => navigation.navigate('Favorites')}
        />
        <Button
          title="Contact"
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
      </View>

    );
};




const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#F8F6F6",
    flex: 1,
  },

  nav: {
    flexDirection: "row", 
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
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center"
  },

  headerImage: {
    width: '100%',
    height: 200, 
    marginBottom: 16,
},

titleOverlayContainer: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
},

titleOverlay: {
  fontSize: 24,
  color: '#FFF', // You can set the color to match your image background
  fontWeight: 'bold',
  textTransform: 'uppercase',
},

bigContainer: {
  padding: 24,
  backgroundColor: "#F8F6F6",
},

container: {
  borderWidth: 1,
  borderColor: "#D24335",
  padding: 8,
  marginVertical: 4,
},

});

export default HomeScreen;



