import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigatie}>
        <Image style={styles.logo} source={require('./assets/img/logo.png')} />
        <View style={styles.nav}>
          <Text style={styles.navtext}>home</Text>
          <Text style={styles.navtext}>products</Text>
          <Text style={styles.navtext}>inspiration</Text>
          <Text style={styles.navtext}>contact</Text>
        </View>
      </View>
  
      <Text style={styles.header}>Hej! Welcome to Ekia</Text>

      <View style={styles.categories}>
        <View style={styles.categorie}>
          <Image style={styles.img} source={require('./assets/img/sofas.png')} />
          <Text>sofas</Text>
        </View>
        <View style={styles.categorie}>
          <Image style={styles.img} source={require('./assets/img/armchair.png')} />
          <Text>armchairs</Text>
        </View>
        <View style={styles.categorie}>
          <Image style={styles.img} source={require('./assets/img/lamp.png')} />
          <Text>lighting</Text>
        </View>
        <View style={styles.categorie}>
          <Image style={styles.img} source={require('./assets/img/deco.png')} />
          <Text>decoration</Text>
        </View>
      </View>


      <View style={styles.tilesContainer}>
        <View style={styles.tile}>
            <Image
              style={styles.tileImage}
              source={require('./assets/img/armchair.avif')}
            />
            <View style={styles.tileDetail}>
              <Text style={styles.tileHeader}>Product 1</Text>
              <Text style={styles.tileText}>Price</Text>
            </View>
            </View>
            <StatusBar style="auto" />    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 25,
    marginTop: 70,
    marginLeft: 20,
  },

  navigatie: {
    flexDirection: 'row',
  },

  nav: {
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 30,
  },

  navtext: {
    paddingRight: 10, 
  },

  header: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 60,
    textAlign: 'center',
    marginBottom: 50,
  },

  container: {
    backgroundColor: '#fff',
  },

  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',
  },

  tile: {
    flexBasis: '46%',//200
    marginVertical: '2%',
  },

  tileImage: {
    width: '100%',
    maxHeight: 110,
    overflow: 'hidden',
  },

  tileDetail: {
    padding: 10,
  },

  tileHeader: {
    fontSize: 22,
    fontWeight: '600',
  },

  tileText: {
    fontSize: 16,
    fontWeight: '500',
  }, 

  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  categorie: {
    padding: 10,
    
  },

  img: {
    width: 70,
    height: 35,
  },
});
