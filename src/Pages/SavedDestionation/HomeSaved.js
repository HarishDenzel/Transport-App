import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeSaved = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.savedDestination01View}>
      <View style={styles.autoLayoutVertical}>
        <View style={styles.graphicView}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../assets/SavedDestionation/image.png")}
          />
          <Text style={[styles.supportingText, styles.mt16]}>
            No Record available yet
          </Text>
        </View>
        <Pressable
          style={styles.buttonPressable}
          onPress={() => navigation.navigate("Addressnew")}
        >
          <View style={styles.buttonBasePrimaryView}>
            <Text style={styles.text}>Add New</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  ml14: {
    marginLeft: 14,
  },
  mt12: {
    marginTop: 12,
  },
  imageIcon: {
    position: "relative",
    width: 116,
    height: 116,
    flexShrink: 0,
  },
  supportingText: {
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "center",
  },
  graphicView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#fff",
    textAlign: "center",
  },
  buttonBasePrimaryView: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#0f437b",
    borderStyle: "solid",
    borderColor: "#0f437b",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical: {
    position: "absolute",
    top: 174,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text1: {
    position: "absolute",
    marginTop: -11,
    top: "50%",
    left: 23,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#121212",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    marginTop: -4,
    top: "50%",
    right: 76,
    width: 18,
    height: 10,
  },
  groupIcon1: {
    position: "absolute",
    marginTop: -5,
    top: "50%",
    right: 55.73,
    width: 15.27,
    height: 10.97,
  },
  groupIcon2: {
    position: "absolute",
    marginTop: -6,
    top: "50%",
    right: 23.02,
    width: 26.98,
    height: 13,
  },
  statusBarView: {
    position: "relative",
    width: 428,
    height: 44,
    flexShrink: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  iconlyLightArrowLeft: {
    position: "relative",
    width: 28,
    height: 28,
  },
  text2: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  contentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topAppBar: {
    width: 428,
    height: 64,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topAppBar1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topAppBar2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buttonText: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#0f437b",
    textAlign: "center",
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#0f437b",
    height: 2,
    flexShrink: 0,
  },
  horizontalTabView: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "66.67%",
    bottom: "0%",
    left: "0%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonText1: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "center",
  },
  autoLayoutHorizontal1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView1: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#eee",
    height: 2,
    flexShrink: 0,
  },
  horizontalTabPressable: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "33.33%",
    bottom: "0%",
    left: "33.33%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonText2: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "center",
  },
  autoLayoutHorizontal2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView2: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#eee",
    height: 2,
    flexShrink: 0,
  },
  horizontalTabView1: {
    position: "absolute",
    height: "100%",
    width: "33.33%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "66.67%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabView: {
    alignSelf: "stretch",
    position: "relative",
    height: 42,
    flexShrink: 0,
  },
  autoLayoutVertical1: {
    width: 428,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  helpCenterTop: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  savedDestination01View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default HomeSaved;
