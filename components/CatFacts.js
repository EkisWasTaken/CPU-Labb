import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function CatFacts ({ fact }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '90%',
    height: '200px',
    marginBottom: '10px',
    marginTop: 10,
  },
  text: {
    color: "#808080",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
  },
});
