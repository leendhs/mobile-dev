import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView, Text } from 'react-native';

import FurnitureItem from '../components/FurnitureItem';

const FurnitureScreen = ({ route, navigation }) => {
  // Check if route.params exists and has the expected structure
  const { id } = route.params || {};

  return (
    <View style={styles.screen}>
      <FurnitureItem itemId={id} />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F8F6F6",
  },
});

export default FurnitureScreen;


