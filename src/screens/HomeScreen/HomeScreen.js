import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../../components/Categories/Categories";
import Recipes from "../../components/Recipes/Recipes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

// Firebase Web SDK imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDW6lkV8R8WbWyJDqqi261KCQOfS03B6eo",
  authDomain: "fryfresh-c938e.firebaseapp.com",
  projectId: "fryfresh-c938e",
  storageBucket: "fryfresh-c938e.appspot.com",
  messagingSenderId: "83538668242",
  appId: "1:83538668242:web:4409f1faedf02b3d311b0b",
  measurementId: "G-11PG7JSTKJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false); // State for no results message

  const navigation = useNavigation();

  useEffect(() => {
    getCategories(); // Fetch categories
    getRecipes(); // Fetch recipes for default category
  }, []);

  useEffect(() => {
    handleSearch(searchQuery); // Filter recipes based on search query
  }, [searchQuery]);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
    getRecipes(); // Update recipes for selected category
    setMeals([]); // Clear previous data before switching categories
  };

  const getCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getRecipes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      const recipes = [];
      querySnapshot.forEach((doc) => {
        recipes.push({ id: doc.id, ...doc.data() });
      });
      setMeals(recipes);
    } catch (error) {
      console.error("Error fetching recipes data:", error);
    }
  };

  const handleSearch = (text) => {
    const query = text.toLowerCase(); // Store search query in lowercase
    setSearchQuery(query);

    // Update noResults state based on filtered meals
    const filteredMeals = meals.filter((meal) =>
      meal.name.toLowerCase().includes(query)
    );
    setNoResults(filteredMeals.length === 0 && query.length > 0);
  };

  const filteredMeals = meals.filter((meal) =>
    meal.name.toLowerCase().includes(searchQuery)
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* bell icon */}
        <View className="mx-4 flex-row justify-end items-center mb-2">
          <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
            <Icon name="bookmark" size={36} color="#525252" />
          </TouchableOpacity>
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text
            style={{ fontSize: hp(2), fontFamily: "Poppins-Medium" }}
            className="text-neutral-600"
          >
            Hello, Noman!
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(4), fontFamily: "Poppins-SemiBold" }}
              className="text-neutral-600"
            >
              Make your own food,
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(4), fontFamily: "Poppins-SemiBold" }}
            className="font-semibold text-neutral-600"
          >
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
            onChangeText={handleSearch}
            value={searchQuery}
          />
          <View className="bg-white rounded-full p-2">
            <Icon name="magnify" size={30} color={"#000"} />
          </View>
        </View>

        {/* categories */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View>

        {/* recipes */}
        <View>
          {noResults && searchQuery.length > 0 ? (
            <View className="mx-4 mt-4">
              <Text className="text-center text-lg text-black-500">
                No results found
              </Text>
            </View>
          ) : (
            <Recipes meals={filteredMeals} categories={categories} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
