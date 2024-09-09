import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { StatusBar } from "expo-status-bar";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import Categories from "../../components/Categories/Categories";
  import axios from "axios";
  import Recipes from "../../components/Recipes/Recipes";
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import { TouchableOpacity } from "react-native";
  import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState("Beef");
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
  
    const navigation = useNavigation()
    
  
    useEffect(() => {
      getCategories();
      getRecipes();
    }, []);
  
    const handleChangeCategory = (category) => {
      getRecipes(category);
      setActiveCategory(category);
      setMeals([]);
    };
  
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://themealdb.com/api/json/v1/1/categories.php"
        );
        // console.log('got categories: ',response.data);
        if (response && response.data) {
          setCategories(response.data.categories);
        }
      } catch (err) {
        console.log("error: ", err.message);
      }
    };
    const getRecipes = async (category = "Beef") => {
      try {
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        // console.log('got recipes: ',response.data);
        if (response && response.data) {
          setMeals(response.data.meals);
        }
      } catch (err) {
        console.log("error: ", err.message);
      }
    };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-end items-center mb-2">
        <TouchableOpacity onPress={()=> navigation.navigate('Favorite')}>
        <Icon name="bookmark" size={30} color="#000" />
        </TouchableOpacity>
        </View>



        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(2), fontFamily: 'Poppins-Medium' }} className="text-neutral-600 ">
            Hello, Noman!
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(4), fontFamily: 'Poppins-SemiBold' }}
              className=" text-neutral-600"
            >
              Make your own food,
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(4), fontFamily: 'Poppins-SemiBold' }}
            className="font-semibold text-neutral-600"
          >
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>

        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full  bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-2">
              <Icon name="magnify" size={30} color={'#000'}/>
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
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
