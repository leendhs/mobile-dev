import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';


const iconSize = 30;

const HomeScreen = ({ navigation }) => {
  return (
      //foto achtergrond
    <ImageBackground source={require('../assets/img/home.avif')} style={styles.backgroundImage} resizeMode="cover" opacity={0.8}> 
      <View style={styles.titleOverlayContainer}>
        <Text style={styles.titleOverlay}>Welcome to Ekia</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Furniture')}
        >
          <Text style={styles.buttonText}>Furniture</Text>
        </TouchableOpacity>
        <View style={styles.nav}>
          <Icon name="home-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Home')} />
          <Icon name="filter-results-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Furniture')} />
          <Icon name="favorite-heart-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Favorites')} />
          <Icon name="phone-call-button" size={iconSize} color="#264731" onPress={() => navigation.navigate('Contact')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },

  titleOverlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },

  titleOverlay: {
    fontSize: 28,
    color: '#FFF', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 16,
    marginTop: 350,
  },

  button: {
    backgroundColor: '#264731',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: -220,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },

  nav: {
    flexDirection: 'row',
    backgroundColor: '#a2bdab',
    width: '90%',
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

export default HomeScreen;
