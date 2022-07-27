import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import { store, persistor } from "./redux/store";
import loadAssets from "./loadAssets";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
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
