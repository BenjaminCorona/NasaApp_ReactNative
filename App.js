import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

function App() {
  const recipes = [
    {
      name: "n1",
      info: "45",
      image: require("./assets/n1.jpg"),
    },
  ];

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
    if (nasa.media_type === "image") {
      downloadFile();
    }
  };

  const alertInfo = () => {
    alert(nasa.explanation);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground
        source={{
          uri: nasa.url,
        }}
      >
        <SafeAreaView>
          <MenuBar>
            <Back>
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={{ marginLeft: 10 }}>Imágen del día</Text>
            </Back>
            <TouchableOpacity onPress={() => handleDownload()}>
              <AntDesign name="download" size={24} color="#FFF" />
            </TouchableOpacity>
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              {nasa.title}
            </Text>
            <Divider />
            <Text bold>{nasa.date}</Text>
            <Text>{nasa.copyright}</Text>
          </MainRecipe>

          <Button>
            <TouchableOpacity onPress={alertInfo}>
              <Text bold small>
                Más...
              </Text>
            </TouchableOpacity>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer>
        <Text dark heavy large>
          Imágen anterior
        </Text>
        <Text dark small>
          Día: 28/07/2022
        </Text>
        <Recipes>
          {recipes.map((recipe, index) => {
            return (
              <Recipe key={index}>
                <TouchableOpacity>
                  <RecipeImage source={recipe.image} />
                </TouchableOpacity>
                <RecipeInfo>
                  <Text dark bold>
                    {recipe.name}
                  </Text>
                  <Text dark small>
                    {recipe.info}
                  </Text>
                </RecipeInfo>
                <TouchableOpacity>
                  <AntDesign name="right" size={18} color="#000" />
                </TouchableOpacity>
              </Recipe>
            );
          })}
        </Recipes>
      </RecipesContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#fff")};

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
    }
  }}
`;
//font-family: "AvenirNext-Regular";

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;
`;

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;
const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export default App;
