import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const recipes = [
    {
      name: "n1",
      info: "45",
      image: require("./assets/n1.jpg"),
    },
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground source={require("./assets/rufous.jpg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={{ marginLeft: 10 }}>Daily</Text>
            </Back>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="#FFF" />
            </TouchableOpacity>
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              “Cosmic Cliffs” in the Carina Nebula
            </Text>
            <Divider />
            <Text bold>July 12, 2022 11:</Text>
            <Text>(NIRCam Image)</Text>
          </MainRecipe>
          <Button>
            <Text bold small>
              Learn More
            </Text>
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
                <RecipeImage source={recipe.image} />
                <RecipeInfo>
                  <Text dark bold>
                    {recipe.name}
                  </Text>
                  <Text dark small>
                    {recipe.info}
                  </Text>
                </RecipeInfo>
                <AntDesign name="right" size={18} color="#000" />
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











