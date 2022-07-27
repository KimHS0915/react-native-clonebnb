import { useState, useEffect } from "react";
import { Image } from "react-native";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import { store, persistor } from "./redux/store";

SplashScreen.preventAutoHideAsync();

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
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
  useEffect(() => {
    const prepare = async () => {
      try {
        await loadAssets();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    };
    prepare();
  }, []);
  useEffect(() => {
    const hideSplash = async () => {
      if (isReady) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplash();
  }, [isReady]);
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  ) : null;
}
