import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
//import { StatusBar } from "expo-status-bar";
//import { Button } from "@rneui/base";
import {
  Tab,
  Text,
  TabView,
  Button,
  Dialog,
  CheckBox,
  ListItem,
  Avatar,
} from "@rneui/themed";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

function App() {
  const [index, setIndex] = useState(0);
  const [nasa, setNasa] = useState([]);

  const [visible1, setVisible1] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

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

  //?....................................FUNCIÓN PARA DESCARGAR ARCHIVOS.............................
  const downloadFile = async () => {
    try {
      let fileUri =
        FileSystem.documentDirectory + nasa.title + " " + nasa.date + ".jpg";
      const { uri } = await FileSystem.downloadAsync(nasa.hdurl, fileUri);
      saveFile(uri);
    } catch (error) {
      console.error(error);
    }
  };

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Infinity", asset, false);
    }
  };

  const handleDownload = async () => {
    if (nasa.media_type === 'image') {
      downloadFile();
      alert("Descarga finalizada");
    }
  };

  return (
    <>
      <Dialog
        style={styles.Dialog}
        isVisible={visible1}
        onBackdropPress={toggleDialog1}
      >
        <ScrollView style={styles.scrollView2}>
          <Text h6>
            <Text style={styles.negrita}>Copyright:{"\n"} </Text>
            {nasa.copyright}
          </Text>
          <Text h6>
            <Text style={styles.negrita}>Date:{"\n"} </Text> {nasa.date}
          </Text>
          <Text h6>
            <Text style={styles.negrita}>Explanation:{"\n"} </Text>
            {nasa.explanation}
          </Text>
          {/** 
          <Text h6>
            <Text style={styles.negrita}>HD:{"\n"} </Text>
            {nasa.hdurl}
          </Text>
          */}
          {/** 
          <Text h6>
            <Text style={styles.negrita}>Media type:{"\n"} </Text>
            {nasa.media_type}
          </Text>*/}
          <Text h6>
            <Text style={styles.negrita}>Service version:{"\n"} </Text>
            {nasa.service_version}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Descargar"
              buttonStyle={styles.button}
              onPress={() => handleDownload()}
            />
          </View>
          <Text>
            {"\n"}
            {"\n"}
          </Text>
        </ScrollView>
      </Dialog>
      <StatusBar hidden={true} />

      {/*----------------------------------------------------------------------------------------*/}
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.Tab}
        variant="primary"
      >
        <Tab.Item
          title="DAILY"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="HOME"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "earth", type: "ionicon", color: "white" }} //heart
        />
        <Tab.Item
          title="PLANETS"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "planet", type: "ionicon", color: "white" }} //rocket
        />
      </Tab>
      {/*----------------------------------------------------------------------------------------*/}
      <TabView value={index} onChange={setIndex} animationType="spring">
        {/**--------------------------------------------Daily-------------------------------------*/}
        <TabView.Item style={styles.TabView}>
          {/** 
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}></ScrollView>
          </SafeAreaView>*/}
          <View style={styles.container}>
            <Text h4 style={styles.negrita}>
              {nasa.title}
            </Text>
            <TouchableOpacity onPress={toggleDialog1} style={styles.Image}>
              <Image
                source={{
                  uri: nasa.url,
                }}
                style={styles.Image}
              />
            </TouchableOpacity>
          </View>

          {/**
              <View>
                <View style={styles.buttonContainer}>
                  <Button
                    title="Abrir"
                    onPress={toggleDialog1}
                    buttonStyle={styles.button}
                  />
                </View>
              </View>
               */}
        </TabView.Item>

        {/**--------------------------------------------Earth--------------------------------------------*/}
        <TabView.Item style={styles.TabView}>
          <Text h1>Earth</Text>
        </TabView.Item>

        {/**--------------------------------------------Exoplanets---------------------------------------*/}
        <TabView.Item style={styles.TabView}>
          <Text h1>Exoplanets</Text>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    //flex: 1,
    //paddingTop: StatusBar.currentHeight,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 10,
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
    width: "100%",
    height: "95%",
    borderRadius: 9,
    resizeMode: "contain",
  },
  negrita: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 17,
    marginBottom: 10,
  },
  cursiva: {
    fontStyle: "italic",
  },
  subrayado: {
    textDecorationLine: "underline",
  },
  scrollView: {
    padding: 15,
    backgroundColor: "white",
    //marginHorizontal: 20,
  },
  scrollView2: {
    padding: 0,
    backgroundColor: "white",
    //marginHorizontal: 20,
  },
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
    backgroundColor: "gray",
  },
  buttonContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Dialog: {
    margin: 90,
  },
});

export default App;
