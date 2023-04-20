/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, dummyData, icons, images } from "../constants";
import React from "react";

export default function HeaderBar({ title, lefOnPressed, containerStyle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        ...containerStyle,
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={() => {
            lefOnPressed;
          }}
        >
          <Image
            source={icons.left_arrow}
            resizeMethod="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: rigth ? COLORS.transparentBlack : null,
        }}
      >
        {rigth && (
          <Image
            source={icons.settings}
            resizeMethod="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
