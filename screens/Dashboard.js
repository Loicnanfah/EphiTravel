/** @format */

import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES, dummyData, icons, images } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";

const COUNTRUES_ITEM_SIZE = SIZES.width / 3;

const Dashboard = ({ navigation }) => {
  const countryScrollX = useRef(new Animated.Value(0)).current;
  const [countries, setCountrie] = useState([
    { id: -1 },
    dummyData.countries,
    { id: -2 },
  ]);
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.base,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => console.log("side drawer")}
        >
          <Image
            source={icons.side_drawer}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.white }}>Douala</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("profile")}>
          <Image
            source={images.profile_pic}
            resizeMode="contain"
            style={{
              width: 45,
              height: 45,
              borderRadius: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderCountries() {
    <Animated.FlatList
      horizontal
      pagingEnabled
      snapToAlignment={"center"}
      showsHorizontalScrollIndicator={false}
      data={countries}
    />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 40 : 0,
        }}
      >
        <View style={{ height: 700 }}>{renderCountries()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
