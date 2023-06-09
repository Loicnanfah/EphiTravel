/** @format */

import React from "react";
import { View, Text, Image, ImageBackground, Animated } from "react-native";
import { COLORS, FONTS, SIZES, dummyData, icons, images } from "../constants";
import { HeaderBar, TextIconButton } from "../compoments";
import SlidingUpPanel from "rn-sliding-up-panel";
//import MapView, { PROVIDER_GOOGLE } from "react-native-maps/lib/MapView";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import MapStyle from "../styles/MapStyle";

const Place = ({ navigation, route }) => {
  const [selectedPlace, setSelectPlace] = React.useState(null);
  const [selectedHotel, setSelectedHotel] = React.useState(null);

  let _panel = React.useRef(null);

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
          <TextIconButton
            label={"book a flight"}
            icon={icons.aeroplane}
            customContainerStyle={{
              marginTop: SIZES.padding,
            }}
            onPress={() => console.log("book a flight")}
          />
        </View>
      </ImageBackground>
    );
  }

  function renderMap() {
    return (
      <SlidingUpPanel
        ref={(c) => (_panel = c)}
        draggableRange={{ top: SIZES.height + 120, bottom: 120 }}
        showBackdrop={false}
        snappingPoints={[SIZES.height + 120]}
        height={SIZES.height + 120}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              height: 120,
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.up_arrow}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white,
              }}
            />
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              SWIPE FOR DETAILS
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MapView
              style={{
                width: "100%",
                height: "100%",
              }}
              customMapStyle={MapStyle}
              provider={PROVIDER_GOOGLE}
              initialRegion={selectedPlace?.mapInitialRegion}
            >
              {selectedPlace?.hotels.map((hotel, index) => (
                <Marker
                  key={index}
                  coordinate={hotel.latlng}
                  identifier={hotel.id}
                  onPress={() => {
                    setSelectedHotel(hotel);
                  }}
                >
                  <Image
                    source={
                      selectedHotel?.id == hotel.id
                        ? icons.bed_on
                        : icons.bed_off
                    }
                    resizeMethod="contain"
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </Marker>
              ))}
            </MapView>

            <HeaderBar
              title={selectedPlace?.name}
              lefOnPressed={() => _panel.hide()}
              rigth={true}
              containerStyle={{
                position: "absolute",
                top: SIZES.padding * 2,
              }}
            />
          </View>
        </View>
      </SlidingUpPanel>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderPlaces()}
      {renderMap()}
    </View>
  );
};

export default Place;
