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
  Pressable
} from "react-native";
const height = Dimensions.get("screen").height;
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import GetImage from "../../assets/GetImage";
import ReactModal from "../../Components/ReactModal";
import GetColors from "../../assets/GetColors";

export default function list(props) {
  const navigation = useNavigation();
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
      <Header {...props} rightIcon={false} title={"Trip Route"}>
        <View style={[styles.labelPositionView, styles.ml16]}>
          <View style={styles.labelView1}>
            <View style={styles.labelView}>
              <Image
                style={styles.iconlyOtherBus}
                resizeMode="cover"
                source={require("../../assets/Home/iconlyotherbus.png")}
              />
              <Text style={[styles.text15, styles.ml4]}>345</Text>
            </View>
          </View>
          <View style={styles.labelView3}>
            <View style={styles.labelView2}>
              <Image
                style={styles.iconlyOtherSeats}
                resizeMode="cover"
                source={require("../../assets/Home/iconlyotherseats.png")}
              />
              <Text style={[styles.text16, styles.ml4]}>Seats</Text>
            </View>
          </View>
        </View>
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

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.headsubText1}>{item.time1}</Text>

                    <Image
                      source={GetImage.bell1}
                      style={{ height: 15, width: 15, resizeMode: "contain", marginLeft: 5 }}
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
                    <Pressable onPress={() => navigation.navigate("NotificationView")}>
                      <Text style={[styles.subText, { paddingLeft: 2, flex: 1 }]}>
                        {item.time}
                      </Text>
                    </Pressable>
                    <Text style={styles.subText}>{item.rate}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("NotificationView")}>
            <Text style={styles.btnTxt}>Go Onboard</Text>
          </TouchableOpacity>
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
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    // width: '90%',
    marginHorizontal: '10%',
    marginBottom: 50
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: GetColors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
  
  labelPositionView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  labelView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft:260
  },
  labelView: {
    borderRadius: 5,
    backgroundColor: "#0f437b",
    width: 65,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  iconlyOtherBus: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text15: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#e7ecf2",
    textAlign: "center",
  },
  ml4: {
    marginLeft: 4,
  },
  ml16: {
    marginLeft: 16,
  },
  labelView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight:10
  },
  labelView2: {
    borderRadius: 5,
    backgroundColor: "#fdddb3",
    width: 65,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  iconlyOtherSeats: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text16: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#e18308",
    textAlign: "center",
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
