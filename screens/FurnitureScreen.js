// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, FlatList, TextInput, Platform, ScrollView, Button } from 'react-native';


// import FurnitureItem from '../components/FurnitureItem';

// const FurnitureScreen = ({ route, navigation }) => {
//   // Check if route.params exists and has the expected structure
//   const { id } = route.params || {};

//   const [articles, setArticle,] = useState([]);
    
//     const getFurniture = async () => {
//        //         //request naar CMS 
//         try { //await = wacht tot wanneer je de resultaten hebt voor je verder gaat 
//           let url;
          
//           if(Platform.OS == 'android'){
//             url = " http://10.0.2.2:51242/api/furniture"; //achter : komt van ddev describe, ook veranderen in newsarticle
//           }
            
//           else {
//             url = "http://cms.ddev.site/api/furniture"
//           }
    
//           const response = await fetch(url, {
//             "method": "GET",
//           });
//           const json = await response.json();
//           console.log(json);
//           setArticle(json.items); //items komt uit postman, is wat je krijgt wanneer je op get duwt 
//         } catch (error) {
//           console.error(error); //try catch is beetje zoals if else 
//         }
//       }

//       useEffect(() => {
//         getFurniture();
//     }, []);


//   return (
//     // <View style={styles.screen}>
//     //   <FurnitureItem itemId={id} />
//     //   <Button
//     //     title="Back to Home"
//     //     onPress={() => navigation.navigate('Home')}
//     //   />
//     // </View>

//     <View style={styles.screen}>

//         <Text style={styles.title}>Browse our products</Text>
//       <View style={styles.categories}>
//       <Button 
//           title="Sofas"
//           onPress={() => navigation.navigate('Home')}
//         />
//         <Button
//           title="Armchairs"
//           onPress={() => navigation.navigate('Furniture')}
//         />
//         <Button
//           title="Lighting"
//           onPress={() => navigation.navigate('Furniture')}
//         />
//         <Button
//           title="Decoration"
//           onPress={() => navigation.navigate('Furniture')}
//         />

        
//       </View>
//         <FlatList
//           style={styles.list}
//           data={articles}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => {
//             let url;
//           if(Platform.OS == 'android'){
//             item.bannerImg = item.bannerImg.replace('cms-API-start', '10.0.2.2:51242') 
//           }

          
//           return <FurnitureItem
//             id={item.id}
//             title={item.title}
//             price={item.price}
//             bannerImg={item.bannerImg}
//             cat={item.furnitureCategories}
//             navigation={navigation}
//             onSelectArticle={(selectedId) => { navigation.navigate('Detail', { id: selectedId }) }}
//           />
          
//           }}

          
//         />


// <View style={styles.nav}>
//         <Button 
//           title="Home"
//           onPress={() => navigation.navigate('Home')}
//         />
//         <Button
//           title="Furniture"
//           onPress={() => navigation.navigate('Furniture')}
//         />
//         <Button
//           title="Favorites"
//           onPress={() => navigation.navigate('Furniture')}
//         />
//         <Button
//           title="Contact"
//           onPress={() => navigation.navigate('Contact')}
//         />
//       </View>
//       </View>


//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: "#F8F6F6",
//     padding: 24,
//   },

//   nav: {
//     flexDirection: "row", 
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#FFF",
//   },

//   categories: {
//     flexDirection: "row", 
//   },

//   list: {
//     height: "90%",
//   },
//   title: {
//     fontSize: 24,
//     color: "#D24335",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     marginBottom: 8,
//     textAlign: "center"
//   }
// });

// export default FurnitureScreen;



// FurnitureScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';

const FurnitureScreen = ({ route, navigation }) => {
  const { id } = route.params || {};
  const [articles, setArticle] = useState([]);
  const [favorites, setFavorites] = useState([]);

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
      <View style={styles.categories}>
        <Button
          title="Sofas"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Armchairs"
          onPress={() => navigation.navigate('Furniture')}
        />
        <Button
          title="Lighting"
          onPress={() => navigation.navigate('Furniture')}
        />
        <Button
          title="Decoration"
          onPress={() => navigation.navigate('Furniture')}
        />
      </View>
      <FlatList
  style={styles.list}
  data={articles}
  keyExtractor={(item) => item.id}
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
        cat={item.furnitureCategories}
        navigation={navigation}
        onSelectArticle={(selectedId) => {
          navigation.navigate('Detail', { id: selectedId });
        }}
        onAddToFavorites={(item) =>
          setFavorites((prevFavorites) => [...prevFavorites, item])
        }
      />
    );
  }}
/>
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

  categories: {
    flexDirection: "row",
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
    textAlign: "center",
  },
});

export default FurnitureScreen;
