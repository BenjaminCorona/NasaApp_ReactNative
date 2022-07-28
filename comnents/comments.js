
//?..........................SCROLL: Pantalla con scroll....................................

import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;


//?..........................IMPRIMIR API: Comillas y generador de api....................................

  const url =
    "https://api.nasa.gov/planetary/apod?api_key=Z41yZjEh7Mh3H7tI8jrdtXMx8tbiZrOrsYaupuAO";
  fetch(url)
    .then((response) => response.json())
    .then((json) => saveResult(json.hdurl));

  function saveResult(json) {
    console.log(json);
  }

  //const HDImg = `uri: "${json}"`;
  const [selectedImage, setSelectedImage] = useState(null);

  
//?............................TEXTOS Y DATOS DE LA API..................................
/**
              copyright: "Jeff Dai",
              date: "2022-07-28",
              explanation: "An ancient tree seems to reach out and touch Earth's North Celestial Pole in this well-planned night skyscape. Consecutive exposures for the timelapse composition were recorded with a camera fixed to a tripod in the Yiwu Desert Poplar Forests in northwest Xinjiang, China. The graceful star trail arcs reflect Earth's daily rotation around its axis. By extension, the axis of rotation leads to the center of the concentric arcs in the night sky. Known as the North Star, bright star Polaris is a friend to northern hemisphere night sky photographers and celestial navigators alike. That's because Polaris lies very close to the North Celestial Pole on the sky. Of course it can be found at the tip of an outstretched barren branch in a postcard from a rotating planet.",
              hdurl: "https://apod.nasa.gov/apod/image/2207/AncientTreeNCP_Dai.jpg",
              media_type: "image",
              service_version: "v1",
              title: "North Celestial Tree",
              url: "https://apod.nasa.gov/apod/image/2207/AncientTreeNCP_Dai1024.jpg"


    <Text style={styles.negrita}>¡Estoy en negrita!</Text>
            <Text style={styles.cursiva}>¡Estoy en cursiva!</Text>
            <Text style={styles.subrayado}>¡Estoy subrayado!</Text>
           */
              
//?............................default function App()..................................

 export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
            


