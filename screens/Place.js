/** @format */

import React from "react";
import { View, Text, Image, ImageBackground, Animated } from "react-native";
import { COLORS, FONTS, SIZES, dummyData, icons, images } from "../constants";
import { HeaderBar } from "../compoments";

const Place = ({ navigation, route }) => {
  const [selectedPlace, setSelectPlace] = React.useState(null);

  React.useEffect(() => {
    let { selectedPlace } = route.params;
    setSelectPlace(selectedPlace);
  }, []);

  function renderPlaces() {
    return (
      <ImageBackground
        source={selectedPlace?.image}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <HeaderBar
          title={""}
          lefOnPressed={() => navigation.goBack()}
          right={false}
          containerStyle={{
            marginTop: SIZES.padding * 2,
          }}
        />
      </ImageBackground>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "center",
      }}
    >
      {renderPlaces()}
    </View>
  );
};

export default Place;
