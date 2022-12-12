import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
const height = Dimensions.get("screen").height;
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import GetImage from "../../assets/GetImage";
import ReactModal from "../../Components/ReactModal";

export default function routerlist(props) {
  const data = [
    {
      id: 1,
      img: GetImage.fire,
      title: "Larkin Stadium",
      time: "See Famous Places",
      rate: "+ $5",
      time1: "09:15 AM",
    },
    {
      id: 2,
      img: GetImage.fire,
      title: "Klinik Kesihatan Kempas",
      time: "See Famous Places",
      rate: "+ $5",
      time1: "09:15 AM",
    },
    {
      id: 3,
      img: GetImage.fire,
      title: "AEON Mall Tebrau City",
      time: "See Famous Places",
      rate: "+ $5",
      time1: "09:15 AM",
    },
    {
      id: 4,
      img: GetImage.fire,
      title: "Hutan Bandar MBJB",
      time: "See Famous Places",
      rate: "+ $5",
      time1: "09:15 AM",
    },
    {
      id: 5,
      img: GetImage.fire,
      title: "UTC Johor",
      time: "See Famous Places",
      rate: "+ $5",
      time1: "09:15 AM",
    },
    {
      id: 6,
      img: GetImage.fire,
      title: "The Mall, Mid Valley Southkey",
      time: "See Famous Places",
      rate: "+ $5",
      time1: "09:15 AM",
    },
  ];
  const ListFooter = () => {
    //View to set in Footer
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
          marginVertical: 10,
          alignItems: "center",
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "Urbanist_semibold",
            fontWeight: "bold",
            color: "#000",
            fontSize: 20,
          }}
        >
          Total Price
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "  Urbanist_regular",
            color: "#616161",
          }}
        >
          $0
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header {...props} rightIcon={false} title={"Current Trip"}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            ListFooterComponent={ListFooter}
            renderItem={({ item, index }) => (
              <View
                key={index}
                style={{ flex: 1, flexDirection: "row", padding: 20 }}
              >
                {/* <Image
                  source={item.img}
                  style={{ height: 52, width: 52, resizeMode: "contain" }}
                /> */}
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderColor:
                        index == data.length - 1 ? "green" : "#002B7F",
                      borderWidth: 1,
                      borderRadius: 5,
                      backgroundColor:
                        index == 0
                          ? "#002B7F"
                          : index == data.length - 1
                          ? "green"
                          : "#fff",
                      marginTop: 18,
                    }}
                  />
                  <View
                    style={{
                      height: "100%",
                      width: 1,
                      borderStyle: index == 0 ? "solid" : "dashed",
                      borderLeftWidth: index == data.length - 1 ? 0 : 1,
                      marginTop: 5,
                    }}
                  />
                </View>
                <View
                  style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
                >

                  <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={styles.headsubText1}>{item.time1}</Text>

                  <Image
                    source={GetImage.bell1}
                    style={{ height: 15, width: 15, resizeMode: "contain" ,marginLeft:5}}
                  />
                  </View>
                  <Text style={styles.headsubText}>{item.title}</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 5,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{ height: 15, width: 15, resizeMode: "contain" }}
                    />
                    <Text style={[styles.subText, { paddingLeft: 2, flex: 1 }]}>
                      {item.time}
                    </Text>
                    <Text style={styles.subText}>{item.rate}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Header>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002B7F",
  },
  headText: {
    fontSize: (height / 100) * 2.5,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 20,
    alignSelf: "center",
  },
  headsubText: {
    fontSize: 16,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#000",
    paddingVertical: 5,
  },
  headsubText1: {
    fontSize: 13,
    fontFamily: "Urbanist_regular",
    fontWeight: "500",
    color: "#002B7F",
  },
  subText: {
    fontSize: 14,
    fontFamily: "  Urbanist_regular",
    color: "#616161",
  },
});
