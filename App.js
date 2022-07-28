import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/base";
import { Tab, Text, TabView } from "@rneui/themed";

export default function App() {
  const encenderApagar = () => {
    console.log("Se muestra");
  };
  /**
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
   */

  return (
    <>
      <StatusBar style="auto" hidden={true} />
      {/*----------------------------------------------------------------------------------------*/}
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.Tab}
        variant="primary"
      >
        <Tab.Item
          title="Daily"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Earth"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Dev"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "cart", type: "ionicon", color: "white" }}
        />
      </Tab>
      {/*----------------------------------------------------------------------------------------*/}
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.TabView}>
          <View style={styles.container}>
            {/* <Text h4>Imágen Diaria</Text>*/}
            <Image
              source={{
                uri: "https://pixabay.com/es/photos/beb%c3%a9-linda-retrato-ni%c3%b1o-indio-7318667/",
              }}
              style={styles.Image}
            />
          </View>
        </TabView.Item>
        <TabView.Item style={styles.TabView}>
          <Text h1></Text>
        </TabView.Item>
        <TabView.Item style={styles.TabView}>
          <Text h1></Text>
        </TabView.Item>
      </TabView>
      {/*----------------------------------------------------------------------------------------*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TabView: {
    backgroundColor: "white",
    width: "100%",
  },
  Tab: {
    backgroundColor: "white",
    height: 3,
  },
  Image: {
    width: "90%",
    height: "90%",
    borderRadius: 15,
    //?La imagen contenida en el "image" se pondrá del mismo tamaño que el contenedor
    resizeMode: "contain",
  },
});

/**
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
 */
