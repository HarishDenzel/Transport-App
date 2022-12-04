import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import GetImage from "../../assets/GetImage";
import { useNavigation } from "@react-navigation/native";

export default function Destination() {
  const height = Dimensions.get("screen").height;
  const navigation = useNavigation();
  const [search_location, setSearch_Location] = useState("");
  const data = [
    {
      id: 1,
      place: "Sultanah Aminah Hospital",
      subPlace: "Jalan, Persiaran Abu Bakar Sultan",
      km: "1.4 km",
    },
    {
      id: 2,
      place: "Abcd Aminah Hospital",
      subPlace: "Jalan, Persiaran Abu Bakar Sultan",
      km: "6.4 km",
    },
    {
      id: 3,
      place: "Abcd Aminah Hospital",
      subPlace: "Jalan, Persiaran Abu Bakar Sultan",
      km: "3.8 km",
    },
    {
      id: 4,
      place: "Dbca Aminah Hospital",
      subPlace: "Jalan, Persiaran Abu Bakar Sultan",
      km: "2.9km",
    },
  ];
  const _chooseLocation=(item)=>{
    setSearch_Location(item.place)
  
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.07,
          flexDirection: "row",
          paddingTop: (height / 100) * 2,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={GetImage.leftArrow}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.85, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: (height / 100) * 2.5,
              fontFamily: "Urbanist_semibold",
              fontWeight: "bold",
              color:' #616161'
            }}
          >
            {"Destination"}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.93 ,}}>
      <KeyboardAvoidingView style={{ flex: 1, }}   behavior={Platform.OS === "ios" ? "padding" : null}>
        <View style={{height:height/100*2}}></View>
          <View
            style={{
        
             paddingTop:5,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("CurrentLocation")}
              style={{
                flexDirection: "row",
                height: (height / 100) * 6,
                borderWidth: 0.3,
                width: "90%",
                borderRadius: 12,
              }}
            >
              <View
                style={{
                  flex: 0.15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={GetImage.locaionSearch}
                  style={{
                    height: (height / 100) * 2,
                    width: (height / 100) * 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.75 }}>
                <TextInput
                  value={search_location}
                  onChangeText={(text) => setSearch_Location(text)}
                  placeholder="Search Location ..."
                  placeholderTextColor={" #616161"}
                  style={{color:'#000',}}
                />
              </View>
              <View
                style={{
                  flex: 0.15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={GetImage.cancel}
                  style={{
                    height: (height / 100) * 2,
                    width: (height / 100) * 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
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
                justifyContent: "flex-start",
                alignItems: "center",
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "#EEEEEE",
              }}
            >
              <Image
                source={GetImage.from}
                style={{
                  height: (height / 100) * 2,
                  width: (height / 100) * 2,
                  resizeMode: "contain",
                 
                  left: 5,
                }}
              />
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_semibold",
                  left: 15,
                  fontWeight: "bold",
                  color:' #616161'
                }}
              >
                {"Use My Location"}
              </Text>
            </View>
          </View>
          <FlatList
            data={search_location==""?null: data}
            renderItem={({ item, index }) => (
              <View key={index} style={{ flex: 1 }}>
                <TouchableOpacity
                 onPress={()=>_chooseLocation(item)}
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
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderTopWidth: 1,
                      borderBottomWidth: 1,
                      borderColor: "#EEEEEE",
                    }}
                  >
                    <View style={{ flex: 0.8 }}>
                      <Text
                        style={{
                          fontSize: (height / 100) * 1.8,
                          fontFamily: "Urbanist_semibold",
                          left: 15,
                          color: ' #616161',
                          fontWeight: "800",
                        }}
                      >
                        {item.place}
                      </Text>
                      <Text
                        style={{
                          fontSize: (height / 100) * 1.3,
                          fontFamily: "Urbanist_semibold",
                          left: 15,
                          fontWeight: "500",
                        }}
                      >
                        {item.subPlace}
                      </Text>
                    </View>
                    <View style={{ flex: 0.2 }}>
                      <Text
                        style={{
                          fontSize: (height / 100) * 1.5,
                          fontFamily: "Urbanist_semibold",
                          left: 15,
                        }}
                      >
                        {item.km}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
       </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
