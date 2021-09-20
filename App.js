import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CatView from "./components/CatView";
import CatClear from "./components/CatClear";
import CatApp from './components/CatApp';
import CatFacts from './components/CatFacts';
import MyContext from "./MyContext";

export default function App() {

  const [images, setImages] = useState([]);
  const [fact, setFact] = useState('');

  const fetchCat = () => {
    fetch("https://aws.random.cat/meow")
      .then((response) => response.json())
      .then((json) => {
        setImages([...images, json.file]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((json) => {
        setFact([...'', json.fact]);
        console.log(json)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const clearImages = () => {
    setImages([]);
  }

  return (
    <MyContext.Provider value={"An app with Cats"}>
      <CatApp/>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the catapp</Text>
        <StatusBar style="auto" />
        <Button title="New Cat" onPress={() => {fetchCat();}}/>
       <CatView images={images}/>
        <CatClear clear={clearImages}/>
        <Button title="Cat Fact" onPress={() => {fetchFact();}}/>
        <CatFacts fact={fact}/>
      </View>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFAE3',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    color: "#808080",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
  },
});
