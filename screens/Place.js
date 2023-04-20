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
          rigth={false}
          containerStyle={{
            marginTop: SIZES.padding * 2,
          }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            justifyContent: "flex-end",
            marginBottom: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.largeTitle,
              }}
            >
              {selectedPlace?.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginRight: 5,
                  color: COLORS.white,
                  ...FONTS.h3,
                }}
              >
                {selectedPlace?.rate}
              </Text>
              <Image
                source={icons.star}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </View>
          </View>

          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}
          >
            {selectedPlace?.description}
          </Text>
        </View>
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
