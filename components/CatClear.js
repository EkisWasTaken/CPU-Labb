import React from 'react';
import { Pressable, StyleSheet, Text, } from 'react-native';

export default function CatClear ({ clear }) {
  return (
    <Pressable 
      style={styles.press}
      onPress={() => {
        clear();
      }}
    >
      <Text style={styles.text}>Clear all the images</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    alignItems: 'center',
  },
  text: {
    color: "#808080",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
  },
});

