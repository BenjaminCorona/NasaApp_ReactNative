import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@rneui/base";
import { Tab, Text, TabView } from "@rneui/themed";

function App() {
  const [index, setIndex] = useState(0);

  const [nasa, setNasa] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Z41yZjEh7Mh3H7tI8jrdtXMx8tbiZrOrsYaupuAO"
    );
    const data = await res.json();
    setNasa(data);
  };

  useEffect(() => {
    loadData();
  }, []);

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
          icon={{ name: "earth", type: "ionicon", color: "white" }} //heart
        />
        <Tab.Item
          title="Exoplanets"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "planet", type: "ionicon", color: "white" }} //rocket
        />
      </Tab>
      {/*----------------------------------------------------------------------------------------*/}
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.TabView}>
          <View style={styles.container}>
            <Text h4>{nasa.title}</Text>
            <Image
              source={{
                uri: nasa.hdurl,
              }}
              style={styles.Image}
            />
            <Text h6>
              <Text style={styles.negrita}>Copyright:</Text> {nasa.copyright}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>Date:</Text> {nasa.date}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>Explanation:</Text>
              {nasa.explanation}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>HD:</Text> {nasa.hdurl}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>Media type:</Text> {nasa.media_type}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>Service version:</Text>
              {nasa.service_version}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>Title:</Text> {nasa.title}
            </Text>
            <Text h6>
              <Text style={styles.negrita}>Url:</Text> {nasa.url}
            </Text>
          </View>
        </TabView.Item>
        <TabView.Item style={styles.TabView}>
          <Text h1>Earth</Text>
        </TabView.Item>
        <TabView.Item style={styles.TabView}>
          <Text h1>Exoplanets</Text>
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
    width: 350,
    height: 350,
    borderRadius: 9,
    //resizeMode: "contain",
  },
  negrita: { fontWeight: "bold" },
  cursiva: { fontStyle: "italic" },
  subrayado: { textDecorationLine: "underline" },
});

export default App;
