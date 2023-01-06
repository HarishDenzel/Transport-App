import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  PermissionsAndroid, Linking
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import GetLocation from "react-native-get-location";
import GetImage from "../assets/GetImage";
import Geolocation from "@react-native-community/geolocation";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import CustomMarker from "../Components/CustomMarker";
import ReactModal from "../Components/ReactModal";
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { icon } from "../assets/icons";
const { width, height } = Dimensions.get("window");
const Hight = Dimensions.get("screen").height;
const ASPECT_RATIO = width / height;
const LATITUDE = 12.7837917;
const LONGITUDE = 79.6623146;
const LATITUDE_DELTA = 2200;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = (props) => {
  const { data, para } = props.route?.params
  console.log(para)
  const isFocused = useIsFocused();
  // var date ='11-12-2022';
  // var varDate = new Date(date); //dd-mm-YYYY
  // var today = new Date();
  // console.log("date==>",varDate,t)

  useEffect(() => {
    setSome(data)

    if (from !== "") {
      setTo(para)
    } else {
      setFrom(para)
    }
  }, [isFocused])
  const [state, setState] = useState({
    isLoading: true,
    latitude: "37.78825",
    longitude: "-122.4324",
  });
  const [some, setSome] = useState(true);
  const [locationModal, setLocationModal] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [locationEnable, setLocationEnable] = useState(false)
  const Bold = "Urbanist_bold";
  const navigation = useNavigation();


  useEffect(async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setLocationEnable(false)
    } else {
      setLocationEnable(true)
    }
    //     Geolocation.getCurrentPosition((info) => {

    //       setLocationModal(false);
    //       console.log("==>", info);
    //       state["latitude"] = info?.coords?.latitude;
    //       state["longitude"] = info?.coords?.longitude;
    //       state["isLoading"] = false;
    //       setState({ ...state });
    //     },(error)=>{
    //       Linking.openSettings();
    // console.log("h==>",error)
    // setLocationEnable(true)
    //     })
  }, [])
  useEffect(() => {
    setLocationModal(true);
  }, []);

  const _locationAcess = async () => {
    // return new Promise( async (resolve, reject) => {

    try {
      const granted = await request(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }),
        {
          title: "Location Permission",
          message: "Transport needs access to your location",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition((info) => {
          setLocationModal(false);
          console.log("==>", info);
          state["latitude"] = info?.coords?.latitude;
          state["longitude"] = info?.coords?.longitude;
          state["isLoading"] = false;
          setState({ ...state });
          setLocationEnable(false)
        }
        )
        setLocationEnable(false)
        console.log("You can use the location");
      } else {
        console.log("location permission denied");
        requestLocationPermission()
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const requestLocationPermission = async () => {
    // return new Promise( async (resolve, reject) => {
    setLocationModal(true);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Example App",
          message: "Example App access to your location ",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition((info) => {
          setLocationModal(false);
          console.log("==>", info);
          state["latitude"] = info?.coords?.latitude;
          state["longitude"] = info?.coords?.longitude;
          state["isLoading"] = false;
          setState({ ...state });
        });

        console.log("You can use the location");
      } else {
        console.log("location permission denied");
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.6 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationScreen")}
          style={{
            zIndex: 5,
            alignSelf: "flex-end",
            top: (height / 100) * 5,
            right: (Hight / 100) * 1.5,
          }}
        >
          <Image source={GetImage.bell} style={styles.flot_img} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            zIndex: 5,
            alignSelf: "flex-end",
            top: (height / 100) * 35,
            right: (height / 100) * 1.5,
          }}
          onPress={() => requestLocationPermission()}
        >
          <Image source={GetImage.gps} style={styles.flot_img} />
        </TouchableOpacity>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          scrollEnabled={true}
          showsUserLocation={false}
          initialRegion={{
            latitude: parseFloat(state.latitude),
            longitude: parseFloat(state.longitude),
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta:
              parseFloat(state.latitude) * parseFloat(state.longitude),
          }}
        >
          <Marker coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }}>
            <Image
              source={GetImage.stopPin}
              style={{
                height: (height / 100) * 20,
                width: (Hight / 100) * 20,
                resizeMode: "contain",
              }}
            ></Image>
          </Marker>
          <Marker coordinate={{ latitude: 13.04223, longitude: 80.088233 }}>
            <Image
              source={GetImage.stopPin}
              style={{
                height: (height / 100) * 20,
                width: (Hight / 100) * 20,
                resizeMode: "contain",
              }}
            ></Image>
          </Marker>
        </MapView>
      </View>
      {/* <Image style={styles.map} source={require('../../assets/map.png')}/> */}
      {/* latitude: this.state.latitude,
      longitude: this.state.longitude, */}

      <View
        style={{
          flex: 0.4,
          backgroundColor: "#FFFFFF",
          height: "40%",
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          width: "100%",
          zIndex: 5,
          marginBottom:10
        }}
      >
        {some ? (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("Ewallet")}
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
            </TouchableOpacity>
            <View
              style={{
                flex: 0.08,
                width: "85%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 1,
                alignSelf: 'center'
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: (height / 100) * 2.2,
                    fontFamily: "Urbanist_bold",
                    fontWeight: "bold",
                    color: '#000'
                  }}
                >
                  Promo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("PromoCode")}
                  style={{
                    fontSize: (height / 100) * 1.5,
                    fontFamily: "Urbanist_semibold",
                    color: '#000'
                  }}
                >
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => { Linking.openURL('https://google.com') }}
              style={{ flex: 0.45, width: "100%" }}
            >
              <Image
                source={GetImage.promo}
                style={{ height: "113%", width: "100%", resizeMode: "contain" }}
              />
            </TouchableOpacity>

            <View
              style={{
                width: "100%",
                position: "absolute",
                height: "90%",
                alignItems: "center",
              }}
            >
              <View style={styles.Shadow}>
                <TouchableOpacity
                  onPress={() => setSome(false)}
                  style={styles.btn2}
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
                      fontSize: (height / 100) * 1.5,
                      fontFamily: "Urbanist_regular",
                      color: "#616161",
                      fontWeight: '600'
                    }}
                  >
                    {"Get me Somewhere"}
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flex: 0.5,
                    flexDirection: "row",
                    borderTopColor: "#D9D9D9",
                    borderTopWidth: 0.5,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setSome(false)}
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
                        fontSize: (height / 100) * 1.5,
                        fontFamily: "Urbanist_regular",
                        color: "#616161",
                        fontWeight: '600'
                      }}
                    >
                      {"Get me home"}
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      flex: 0.4,
                      borderLeftWidth: 0.5,
                      borderLeftColor: "#D9D9D9",
                      flexDirection: "row",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SavedDestionation")}

                      style={{
                        flex: 0.5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image source={GetImage.work} style={styles.Img_2} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SavedDestionation")}

                      style={{
                        flex: 0.5,
                        justifyContent: "center",
                        alignItems: "center",
                        borderLeftColor: "#D9D9D9",
                        borderLeftWidth: 0.5,
                      }}
                    >
                      <Image source={icon.place} style={styles.Img_2} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              backgroundColor: "#ffff",
              flex: 1,
              zIndex: 1,
              bottom: 24,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              <View style={{ height: (height / 100) * 4 }} />
              <View
                style={{
                  flex: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("CurrentLocation")}
                  style={styles.sub_Con}
                >
                  <Image
                    source={GetImage.from}
                    style={{
                      height: (height / 100) * 2,
                      width: (height / 100) * 2,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: (height / 100) * 2,
                      fontFamily: "Urbanist_semibold",
                      alignSelf: "center",
                      left: (height / 100) * 2,
                      color: "#616161",
                    }}
                  >
                    {from == "" ? "Current Location" : from}
                  </Text>
                </TouchableOpacity>
                <View style={{ height: (height / 100) * 1 }} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("Destination")}
                  style={styles.sub_Con}
                >
                  <Image
                    source={GetImage.to}
                    style={{
                      height: (height / 100) * 2,
                      width: (height / 100) * 2,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: (height / 100) * 2,
                      fontFamily: "Urbanist_semibold",
                      alignSelf: "center",
                      left: (height / 100) * 2,
                      color: "#616161",
                    }}
                  >
                    {to == "" ? "Destination" : to}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("SavedDestionation")}
                style={{
                  height: (height / 100) * 10,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: (height / 100) * 6,
                    width: "90%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "#EEEEEE",
                  }}
                >
                  <Image
                    source={GetImage.save}
                    style={{
                      height: (height / 100) * 2,
                      width: (height / 100) * 2,
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: (height / 100) * 2,
                      fontFamily: "Urbanist_semibold",

                      color: "#616161",
                    }}
                  >
                    {"View saved destination"}
                  </Text>
                  <Image
                    source={GetImage.rightArrow}
                    style={{
                      height: (height / 100) * 3,
                      width: (height / 100) * 3,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: (height / 100) * 10,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.btn3}
                  onPress={() => navigation.navigate("HomeAction")}
                >
                  <Text
                    style={{
                      fontSize: (height / 100) * 2,
                      fontFamily: "Urbanist_semibold",
                      color: "#fff",
                    }}
                  >
                    {"See Routes"}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </View>

      <ReactModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={locationEnable}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: (height / 100) * 60,
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 0.3 }}>
            <Image
              source={GetImage.locationModal}
              style={{
                height: (height / 100) * 20,
                width: (height / 100) * 20,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flex: 0.25,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.5,
                fontFamily: "Urbanist_semibold",
                color: "#000",
              }}
            >
              {"Enable Location"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.8,
                fontFamily: "Urbanist_semibold",
                color: "#616161",
                alignSelf: 'center'
              }}
            >
              We need access to your location to be able {"\n"}
              {"                     "}to use this service.
            </Text>
          </View>
          <View style={{ height: (height / 100) * 4 }}></View>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity
              onPress={() => _locationAcess()}
              style={{
                height: (height / 100) * 7,
                backgroundColor: "#0F437B",
                width: (width / 100) * 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_semibold",
                  color: "#fff",
                }}
              >
                {"Enable Location"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>
            <TouchableOpacity
              onPress={() => setLocationEnable(false)}
              style={{
                height: (height / 100) * 7,
                borderWidth: 0.5,
                width: (width / 100) * 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_semibold",
                  color: "#000",
                }}
              >
                {"Not Now"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
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
  btn2: {
    flex: 0.5,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: (Hight / 100) * 4,
    marginRight: (Hight / 100) * 9,
  },
  sub_Con: {
    flexDirection: "row",
    height: (Hight / 100) * 6,
    borderWidth: 0.3,
    width: "90%",
    alignItems: "center",
    paddingHorizontal: (Hight / 100) * 2,
    borderRadius: 12,
  },
  btn3: {
    height: (height / 100) * 6,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F437B",
    borderRadius: 25,
    top: 5,
    position: "absolute",
  }
});

export default Home;
