import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeSaved = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
          onPress={() => navigation.navigate("Saved")}
        >
          <View style={styles.buttonBasePrimaryView}>
            <Text style={styles.text}>Add New</Text>
          </View>
        </Pressable>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  savedDestination01View: {
    position: "relative",
    // backgroundColor: "#fff",
    flex: 1,
    // width: "100%",
    // height: 926,
    overflow: "hidden",
  },
  autoLayoutVertical: {
    position: "absolute",
    top: 14,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 2,
    paddingBottom: 58,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  graphicView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
    fontFamily: "Urbanist, sans-serif",
    color: "#9e9e9e",
    textAlign: "center",
  },
  mt16: {
    marginTop: 16,
  },
  buttonPressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom:100
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
  text: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#fff",
    textAlign: "center",
  },
});

export default HomeSaved;
