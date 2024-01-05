import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image, Platform, ScrollView, Button } from 'react-native';


const ContactScreen = ({ navigation }) => {
return(
<View style={styles.screen}> 
    <View style={styles.bigContainer}>
        <Text style={styles.title}>Openingsuren</Text>
        <View style={styles.container}>
            <Text>Maandag: 9u-17u</Text>
        </View>
        <View style={styles.container}>
            <Text>Dinsdag: 9u-17u</Text>
        </View>
        <View style={styles.container}>
            <Text>Woensdag: 9u-13u</Text>
        </View>
        <View style={styles.container}>
            <Text>Donderdag: 9u-17u</Text>
        </View>
        <View style={styles.container}>
            <Text>Vrijdag: 9u-17u</Text>
        </View>
        <View style={styles.container}>
            <Text>Zaterdag: 12u-17u</Text>
        </View>
        <View style={styles.container}>
            <Text>Zondag: Gesloten</Text>
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
    title: {
      fontSize: 24,
      color: "#D24335",
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 8,
      textAlign: "center"
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

  nav: {
    flexDirection: "row", 
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
  },
  
  });
  
  export default ContactScreen;
  
  
  
  