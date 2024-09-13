import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { CachedImage } from "../../helpers/image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import YouTubeIframe from "react-native-youtube-iframe";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RecipeDetailScreen = (props) => {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false); //sonradan verinin geldiği state e bağlanacak

  const ingredientsIndexes = (item) => {
    if (!item || !item.ingredients) return [];
    return Object.values(item.ingredients);
  };

  const getYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  const instructionsIndexes = (item) => {
    if (!item || !item.instructions) return [];
    return Object.values(item.instructions);
  };
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      {/* recipe image */}
      <View className="flex-row justify-center">
        <CachedImage
          uri={item.image}
          sharedTransitionTag={item.image}
          style={{
            width: "100%",
            height: hp(50),
            borderBottomLeftRadius: 26,
            borderBottomRightRadius: 26,
          }}
        />
      </View>

      {/* back button */}
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <Icon name="arrow-left" size={hp(3.5)} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-5 bg-white"
        >
          <Icon
            name="heart"
            size={hp(3.5)}
            color={isFavourite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* meal description */}
      {loading ? (
        <Loading size="large" className="mt-16" />
      ) : (
        <View className="px-4 flex justify-between space-y-4 pt-8">
          {/* name and area */}
          <Animated.View
            entering={FadeInDown.duration(700).springify().damping(12)}
            className="space-y-2"
          >
            <Text
              style={{ fontSize: hp(3), fontFamily: "Poppins-Bold" }}
              className=" flex-1 text-neutral-700"
            >
              {item?.name}
            </Text>
            <Text
              style={{ fontSize: hp(2), fontFamily: "Poppins-Medium" }}
              className="flex-1 text-neutral-500"
            >
              {item?.strArea}
            </Text>
          </Animated.View>

          {/* misc */}
          <Animated.View
            entering={FadeInDown.delay(100)
              .duration(700)
              .springify()
              .damping(12)}
            className="flex-row justify-around"
          >
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{ height: hp(6.5), width: hp(6.5) }}
                className="bg-white rounded-full flex items-center justify-center"
              >
                <Icon
                  name="clock-time-three-outline"
                  size={hp(5)}
                  color="#525252"
                />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{ fontSize: hp(2), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  {item.prepTime}
                </Text>
                <Text
                  style={{ fontSize: hp(1.3), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  Mins
                </Text>
              </View>
            </View>
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{ height: hp(6.5), width: hp(6.5) }}
                className="bg-white rounded-full flex items-center justify-center"
              >
                <Icon
                  name="account-supervisor"
                  size={hp(5)}
                  strokeWidth={2.5}
                  color="#525252"
                />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{ fontSize: hp(2), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  {item.serving}
                </Text>
                <Text
                  style={{ fontSize: hp(1.3), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  Servings
                </Text>
              </View>
            </View>
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{ height: hp(6.5), width: hp(6.5) }}
                className="bg-white rounded-full flex items-center justify-center"
              >
                <Icon name="fire" size={hp(5)} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{ fontSize: hp(2), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  {item.calori}
                </Text>
                <Text
                  style={{ fontSize: hp(1.3), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  Cal
                </Text>
              </View>
            </View>
            <View className="flex rounded-full bg-amber-300 p-2 justify-between">
              <View
                style={{ height: hp(6.5), width: hp(6.5) }}
                className="bg-white rounded-full flex items-center justify-center"
              >
                <Icon name="layers-triple" size={hp(5)} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{ fontSize: hp(1.3), fontFamily: "Poppins-SemiBold" }}
                  className=" text-neutral-700"
                >
                  {item.cuisine}
                </Text>
              </View>
            </View>
          </Animated.View>

          {/* ingredients */}
          <Animated.View
            entering={FadeInDown.delay(200)
              .duration(700)
              .springify()
              .damping(12)}
            className="space-y-4"
          >
            <Text
              style={{ fontSize: hp(2.5), fontFamily: "Poppins-Bold" }}
              className=" flex-1 text-neutral-700"
            >
              Ingredients
            </Text>
            <View className="space-y-2 ml-3">
              {ingredientsIndexes(item).map((ingredient, index) => {
                return (
                  <View key={index} className="flex-row space-x-4">
                    <View
                      style={{ height: hp(1.5), width: hp(1.5) }}
                      className="bg-amber-300 rounded-full"
                    />
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: "Poppins-Medium",
                      }}
                      className="text-neutral-600"
                    >
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Animated.View>
          {/* instructions */}
          <Animated.View
            entering={FadeInDown.delay(300)
              .duration(700)
              .springify()
              .damping(12)}
            className="space-y-4"
          >
            <Text
              style={{ fontSize: hp(2.5), fontFamily: "Poppins-Bold" }}
              className=" flex-1 text-neutral-700"
            >
              Instructions
            </Text>
            <View className="space-y-2 ml-3">
              {instructionsIndexes(item).map((instruction, index) => {
                return (
                  <View key={index} className="flex-row space-x-4">
                    <View
                      style={{ height: hp(1.5), width: hp(1.5) }}
                      className="bg-amber-300 rounded-full"
                    />
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: "Poppins-Medium",
                      }}
                      className="text-neutral-600"
                    >
                      {instruction}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Animated.View>

          {/* recipe video */}
          {item.strYoutube && (
            <Animated.View
              entering={FadeInDown.delay(400)
                .duration(700)
                .springify()
                .damping(12)}
              className="space-y-4"
            >
              <Text
                style={{ fontSize: hp(2.5) }}
                className="font-bold flex-1 text-neutral-700"
              >
                Recipe Video
              </Text>
              <View>
                <YouTubeIframe
                  videoId={getYoutubeVideoId(item.strYoutube)}
                  height={hp(30)}
                />
              </View>
            </Animated.View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default RecipeDetailScreen;
