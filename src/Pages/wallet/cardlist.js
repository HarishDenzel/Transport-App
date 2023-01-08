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
import React from "react";
import GetImage from "../../assets/GetImage";
import Bt_Main from "../../Components/Bt_Main";
const height = Dimensions.get("screen").height;
import Header from "../../Components/Header";
// import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import { useNavigation } from "@react-navigation/native";

const cardlist = (props) => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      img: GetImage.mastercard,
      title: "•••• •••• •••• •••• 4679",
      time: "Dec 16, 2024 | 16:42 PM",
      rate: "- $14",
      isChecked: false
    },
    {
      id: 2,
      img: GetImage.mastercard,
      title: "•••• •••• •••• •••• 4679",
      time: "Dec 16, 2024 | 11:39 PM",
      rate: "+ $80",
      isChecked:true
    },
  ];
  const ListFooter = () => {
    //View to set in Footer
    return (
      <TouchableOpacity onPress={() => navigation.navigate("addnewcard")}>
        <View style={{height:20}}></View>
      <View style={styles.headerFooterStyle}>
         <Image
                  source={GetImage.addic}
                  style={{ height: 15, width: 15, resizeMode: "contain",marginRight:5 }}
                />
        <Text style={styles.textStyle}>Add New Card</Text>
      </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        {...props}
        righticon={false}
        onPress={() => setOptionModal(!optionModal)}
        title={"Top Up E-Wallet"}
      >
      <View style={{height:20}}></View>
        <View style={{ flex: 1, marginTop: 10, }}>
          <Text style={styles.headText}>
            Select the top up method you want to use.
          </Text>
          <View style={{height:10}}></View>
          <FlatList
            data={data}
            ListFooterComponent={ListFooter}
            renderItem={({ item, index }) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  padding: 22,
                  borderRadius: 10,
                  shadowColor: "#171717",
                  shadowOffset: { width: -2, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 1,
                  marginHorizontal: 20,
                  elevation: 2,
                  marginBottom: 10,
                  marginTop: 10,
                  backgroundColor: "#ffff",
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Image
                  source={item.img}
                  style={{ height: 32, width: 32, resizeMode: "contain" }}
                />
                <View
                  style={{ flex: 1, justifyContent: "center", paddingLeft: 10 }}
                >
                  <Text style={styles.headsubText}>{item.title}</Text>
                </View>
                <Image
                  source={item.isChecked ?GetImage.check:GetImage.uncheck}
                  style={{ height: 15, width: 15, resizeMode: "contain",marginRight:5 }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Bt_Main label={"Continue"} onPress={()=>props.navigation.navigate("TopupScreen")} />
      </Header>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headText: {
    fontSize: 15,
    fontFamily: "Urbanist_regular",
    fontWeight: "500",
    color: "#424242",
    paddingLeft: 20,
  },
  headsubText: {
    fontSize: 16,
    fontFamily: "Urbanist_semibold",
    fontWeight: "700",
    color: "#000",
  },
  subText: {
    fontSize: 14,
    fontFamily: "  Urbanist_regular",
    color: "#616161",
  },
  headerFooterStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  textStyle: {
    fontSize: 13,
    fontFamily: "Urbanist_semibold",
    fontWeight: "700",
    color: "#0F437B",
  },
});

export default cardlist;
