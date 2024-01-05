
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';


const DetailArticle = props => {
  const [article, setArticle] = useState({});

  const getArticleData = async () => {
    try {
      //127.0.0.1 -> surft naar dit toestel
      //10.0.2.2 -> surft naar host toestel
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:51242/api/furniture";
      }
      else {
        url = "http://cms.ddev.site/api/furniture";
      }
      url += props.articleId;
      const response = await fetch(url, {
        "method": "GET"
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
  }

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
        <Text style={styles.body}>{article.fulltext}</Text>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24

  }
});
export default DetailArticle;

