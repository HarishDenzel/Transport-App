import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import GetLocation from "react-native-get-location";
import GetImage from "../assets/GetImage";

const { width, height } = Dimensions.get("window");
const Hight = Dimensions.get("screen").height;
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  const [state, setState] = useState({
    isLoading: true,
    latitude: null,
    longitude: null,
  });
  const Bold = "Urbanist_bold";
  // useEffect(() => {
  //   GetLocation.getCurrentPosition((position) => {
  //       setState({...state, latitude: position.coords.latitude, longitude: position.coords.longitude})
  //     },
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
  //   console.log(this.state)
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.map} source={require('../../assets/map.png')}/> */}
      {/* latitude: this.state.latitude,
      longitude: this.state.longitude, */}

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      />
      <View
        style={{
          height: "50%",
          position: "absolute",
          width: "100%",
          zIndex: 1,
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingRight: 15,
          paddingTop: 15,
        }}
      >
        <TouchableOpacity>
          <Image source={GetImage.bell} style={styles.flot_img} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={GetImage.gps} style={styles.flot_img} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          height: "40%",
          borderRadius: 25,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 0.5,
            justifyContent: "flex-end",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Image
            source={GetImage.wallet}
            style={{ height: "50%", width: "90%", resizeMode: "contain" }}
          />
        </View>
        <View
          style={{
            flex: 0.07,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 18,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: (height / 100) * 2.2,
                fontFamily: "Urbanist_bold",
                fontWeight:'bold'
              }}
            >
              Promo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: (height / 100) * 1.5,
                fontFamily: "Urbanist_semibold",
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.45, width: "100%" }}>
          <Image
            source={GetImage.promo}
            style={{ height: "110%", width: "100%", resizeMode: "contain" }}
          />
        </View>

        <View
          style={{
            width: "100%",
            position: "absolute",
            height: "90%",
            alignItems: "center",
          }}
        >
          <View style={styles.Shadow}>
            <View
              style={{
                flex: 0.5,
                borderBottomColor: "#D9D9D9",
                borderBottomWidth: 0.5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: (Hight / 100) * 4,
                marginRight: (Hight / 100) * 9,
              }}
            >
              <Image
                source={GetImage.search}
                style={{
                  height: (height / 100) * 3.5,
                  width: (height / 100) * 3.5,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist_semibold",
                }}
              >
                {"Get me Somewhere"}
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                borderTopColor: "#D9D9D9",
                borderTopWidth: 0.5,
              }}
            >
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingHorizontal: 8,
                  marginLeft: 5,
                }}
              >
                <Image
                  source={GetImage.home}
                  style={{
                    height: (height / 100) * 3.5,
                    width: (height / 100) * 3.5,
                    resizeMode: "contain",
                  }}
                />
                <Text
                  style={{
                    fontSize: (height / 100) * 1.8,
                    fontFamily: "Urbanist_semibold",
                  }}
                >
                  {"Get me home"}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.4,
                  borderLeftWidth: 0.5,
                  borderLeftColor: "#D9D9D9",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={GetImage.work} style={styles.Img_2} />
                </View>
                <View
                  style={{
                    flex: 0.5,
                    justifyContent: "center",
                    alignItems: "center",
                    borderLeftColor: "#D9D9D9",
                    borderLeftWidth: 0.5,
                  }}
                >
                  <Image source={GetImage.work} style={styles.Img_2} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
    height: "60%",
    width: "100%",
    position: "relative",
  },
  Shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    height: "40%",
    borderRadius: 20,
    width: "87%",
    bottom: 50,
    backgroundColor: "#ffffff",
    elevation: 2,
  },
  flot_img: {
    height: (Hight / 100) * 5,
    width: (Hight / 100) * 5,
    resizeMode: "contain",
  },
  Img_2: {
    height: (Hight / 100) * 4.8,
    width: (Hight / 100) * 4.8,
    resizeMode: "contain",
  },
});

export default Home;
