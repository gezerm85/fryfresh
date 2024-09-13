import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { mealData } from "../../constants";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loading from "../Loading/Loading";
import { CachedImage } from "../../helpers/image";
import { useNavigation } from "@react-navigation/native";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = ({ categories, meals }) => {
  const navigation = useNavigation();
  return (
    <View className=" mx-4 space-y-4 ">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>
      <View>
        {meals.length == 0 ? (
          <Loading size="large" className="mt-20" />
        ) : (
          <MasonryList
            style={{ gap: 16 }}
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RecipeCard item={item} index={i} navigation={navigation} />
            )}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
          />
        )}
      </View>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({});
