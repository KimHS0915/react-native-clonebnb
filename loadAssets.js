import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadAssets = () => {
  const images = [
    require("./assets/loginBg.jpg"),
    require("./assets/airbnb-logo.png"),
    require("./assets/defaultRoomPhoto.jpg"),
  ];
  const fonts = [Ionicons.font];
  const imagePromises = cacheImages(images);
  const fontPromises = cacheFonts(fonts);
  return Promise.all([...fontPromises, ...imagePromises]);
};

export default loadAssets;
