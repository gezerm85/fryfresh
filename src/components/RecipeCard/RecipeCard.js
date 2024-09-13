import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { CachedImage } from "../../helpers/image";

const RecipeCard = ({ item, index, navigation }) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          width: "100%",
          height: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => navigation.navigate("RecipeDetail", { ...item })}
      >
        {/* <Image 
            source={{uri: item.strMealThumb}}
            style={{width: '100%', height: index%3==0? hp(25): hp(35), borderRadius: 35}}
            className="bg-black/5"
        /> */}
        <View
          style={{
            width: "100%",
            height: "80%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CachedImage
            uri={item.image}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 35,
              resizeMode: "cover",
            }}
            className="bg-black/5"
            sharedTransitionTag={item.image}
          />
        </View>
        <View style={{  width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: hp(2),
              textAlign: "center",
              fontFamily: "Poppins-Medium",
            }}
            className=" text-neutral-600"
          >
            {item.name.length > 20
              ? item.name.slice(0, 20) + "..."
              : item.name}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RecipeCard;
