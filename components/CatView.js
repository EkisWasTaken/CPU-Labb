import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

const scroll = React.createRef();

export default function CatView ({ images }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        ref={scroll}
        onContentSizeChange={() => scroll.current.scrollToEnd()}>
        {images.map((image, index) => (
          <Image source={image} style={styles.picture} key={index}></Image>  
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '95%',
    height: '200px',
    marginBottom: '10px',
    marginTop: 10,
  },
  scroll: {
    borderRadius: 10,
    width: "100%",
  },
  picture: {
    width: "100%",
    height: "200px",
  },
});

