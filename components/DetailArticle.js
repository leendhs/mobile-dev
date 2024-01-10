import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';


const DetailArticle = ({ articleId }) => {
  const [article, setArticle] = useState({});

  const getArticleData = async () => {
    try {
      let url;

      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:51242/api/furniture/";
      } else {
        url = "http://cms.ddev.site/api/furniture/";
      }

      url += articleId;

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();
      console.log(json.bannerImg);

      if (Platform.OS == 'android') {
        json.bannerImg = json.bannerImg.replace('cms.ddev.site', '10.0.2.2:51242');
      }

      setArticle(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: article.bannerImg
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.price}>Price: €{article.price}</Text>
        <Text style={styles.body}>Rating: {article.rating}/5</Text>
        <Text style={styles.body}>{article.fulltext}</Text>
        <TouchableOpacity style={styles.addToCartText}>
          <Text style={styles.text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

    </ScrollView >
    
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: "#264731",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24,
    fontSize: 16,
    marginBottom: 10,
  }, 

  price: {
    fontSize: 24,
    marginBottom: 20,
  }, 

  addToCartText: {
    marginTop: 32,
    backgroundColor: '#264731',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  }
});

export default DetailArticle;
