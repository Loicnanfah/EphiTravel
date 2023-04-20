/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, dummyData, icons, images } from "../constants";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TextButton({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.h2,
          ...customLabelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
