import AppNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { initializeApp } from 'firebase/app'; // Firebase core
import { getAnalytics } from 'firebase/analytics'; // Firebase Analytics

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
  });

  const firebaseConfig = {
    apiKey: "AIzaSyDW6lkV8R8WbWyJDqqi261KCQOfS03B6eo",
    authDomain: "fryfresh-c938e.firebaseapp.com",
    projectId: "fryfresh-c938e",
    storageBucket: "fryfresh-c938e.appspot.com",
    messagingSenderId: "83538668242",
    appId: "1:83538668242:web:4409f1faedf02b3d311b0b",
    measurementId: "G-11PG7JSTKJ",
  };

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const initializeFirebase = () => {
      try {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app); // Initialize Firebase Analytics
        console.log("Firebase Analytics initialized successfully");
      } catch (error) {
        console.error("Firebase initialization error:", error);
      }
    };

    initializeFirebase();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return <AppNavigation />;
}
