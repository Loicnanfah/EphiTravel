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

const COUNTRUES_ITEM_SIZE = SIZES.width / 3;

const Dashboard = ({ navigation }) => {
  const countryScrollX = useRef(new Animated.Value(0)).current;

  const [countries, setCountrie] = useState([
    { id: -1 },
    ...dummyData.countries,
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
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={COUNTRUES_ITEM_SIZE}
        showsHorizontalScrollIndicator={false}
        scrollEventThrolttle={16}
        decelerationRate={0}
        data={countries}
        keyExtrator={(item) => `${item.id}`}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: countryScrollX } },
            },
          ],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          const oppacity = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRUES_ITEM_SIZE,
              (index - 1) * COUNTRUES_ITEM_SIZE,
              index * COUNTRUES_ITEM_SIZE,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const mapSize = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRUES_ITEM_SIZE,
              (index - 1) * COUNTRUES_ITEM_SIZE,
              index * COUNTRUES_ITEM_SIZE,
            ],

            outputRange: [25, Platform.OS === "ios" ? 80 : 60, 25],
            extrapolate: "clamp",
          });

          const fontSize = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRUES_ITEM_SIZE,
              (index - 1) * COUNTRUES_ITEM_SIZE,
              index * COUNTRUES_ITEM_SIZE,
            ],
            outputRange: [15, 25, 15],
            extrapolate: "clamp",
          });

          if (index == 0 || index == countries.length - 1) {
            return (
              <View
                style={{
                  width: COUNTRUES_ITEM_SIZE,
                }}
              />
            );
          } else {
            return (
              <Animated.View
                oppacity={oppacity}
                style={{
                  height: 130,
                  width: COUNTRUES_ITEM_SIZE,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Animated.Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: mapSize,
                    height: mapSize,
                    tintColor: COLORS.white,
                  }}
                />
                <Animated.Text
                  style={{ top: 3, color: COLORS.white, ...FONTS.h1 }}
                >
                  {item.name}
                </Animated.Text>
              </Animated.View>
            );
          }
        }}
      />
    );
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
