import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favourite = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tripsPlanner03View}>
      {/* <View style={styles.autoLayoutVertical4}> */}
        <View style={styles.autoLayoutVertical3}>
          <View style={styles.autoLayoutVertical2}>
            <View style={styles.categoryDefaultCollapseThe}>
              <View style={styles.typeDriverListComponentAc}>
                <View style={styles.autoLayoutHorizontal4}>
                  <View style={styles.featureIconView1}>
                    <View style={styles.featureIconView}>
                      <View style={styles.autoLayoutHorizontal3}>
                        <Image
                          style={styles.iconlyBoldCard}
                          resizeMode="cover"
                          source={require("../../assets/Profile/Trips/iconlyboldcard.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.autoLayoutVertical, styles.ml20]}>
                    <Text style={styles.busTicketText}>Bus Ticket</Text>
                    <Text style={[styles.dec2020241000AM, styles.mt6]}>
                      Dec 20, 2024 | 10:00 AM
                    </Text>
                  </View>
                </View>
                <View style={[styles.autoLayoutVertical1, styles.ml12]}>
                  <View style={styles.autoLayoutHorizontal5}>
                    <Image
                      style={styles.iconlyBulkStar}
                      resizeMode="cover"
                      source={require("../../assets/Profile/Trips/iconlybulkstar1.png")}
                    />
                    <Text style={[styles.text6, styles.ml8]}>4.8</Text>
                  </View>
                  <Image
                    style={[styles.iconlyBoldBookmark, styles.mt8]}
                    resizeMode="cover"
                    source={require("../../assets/Profile/Trips/iconlyboldbookmark.png")}
                  />
                  <Text style={[styles.jYS4728JS, styles.mt8]}>
                    JYS 4728 JS
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.themeLightDividerIcon, styles.mt16]}
                resizeMode="cover"
                source={require("../../assets/Profile/Trips/themelight-divider12.png")}
              />
              <Image
                style={[styles.iconlyLightArrowDown2, styles.mt16]}
                resizeMode="cover"
                source={require("../../assets/Profile/Trips/iconlylightarrow--down-2.png")}
              />
            </View>
          </View>
        </View>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml19: {
    marginLeft: 19,
  },
  mt12: {
    marginTop: 12,
  },
  mt24: {
    marginTop: 24,
  },
  mt6: {
    marginTop: 6,
  },
  ml20: {
    marginLeft: 20,
  },
  ml8: {
    marginLeft: 8,
  },
  mt8: {
    marginTop: 8,
  },
  ml12: {
    marginLeft: 12,
  },
  mt16: {
    marginTop: 16,
  },
  iconlyLightOutlineHome: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "center",
  },
  bottomBarIcon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldDocument: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  text1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#0f437b",
    textAlign: "center",
  },
  bottomBarIcon1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineScan: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "center",
  },
  bottomBarIcon2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineProfile: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text3: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "center",
  },
  bottomBarIcon3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal: {
    width: 428,
    height: 48,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  containerView: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 8,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  homeIndicatorIcon: {
    position: "relative",
    width: 428,
    height: 34,
    flexShrink: 0,
  },
  bottomSheetNavigationView: {
    position: "absolute",
    top: 836,
    left: 0,
    shadowColor: "rgba(16, 24, 40, 0.06)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text4: {
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
  text5: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
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
  autoLayoutHorizontal1: {
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
    width: "50%",
    top: "0%",
    right: "50%",
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
  autoLayoutHorizontal2: {
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
    width: "50%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabView: {
    position: "relative",
    width: 428,
    height: 42,
    flexShrink: 0,
  },
  tripRouteView: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyBoldCard: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  autoLayoutHorizontal3: {
    borderRadius: 1000,
    backgroundColor: "#002b7f",
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView: {
    borderRadius: 100,
    backgroundColor: "#b0bdd7",
    width: 52,
    height: 52,
    flexShrink: 0,
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  busTicketText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  dec2020241000AM: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "left",
  },
  autoLayoutVertical: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBulkStar: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  text6: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "left",
  },
  autoLayoutHorizontal5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  iconlyBoldBookmark: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  jYS4728JS: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "right",
  },
  autoLayoutVertical1: {
    width: 100,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  typeDriverListComponentAc: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  themeLightDividerIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  iconlyLightArrowDown2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  categoryDefaultCollapseThe: {
    alignSelf: "stretch",
    borderRadius: 32,
    backgroundColor: "#fff",
    shadowColor: "rgba(4, 6, 15, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutVertical2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical4: {
    position: "absolute",
    top: 182,
    right: 0,
    left: 0,
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tripsPlanner03View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Favourite;


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// export default function Favourite() {
//   const Intro2 = () => {};
//   return (
//     <ScrollView>
//       <View style={styles.Profile}>
//         <Text style={styles.Title}>Hi, I'm a Favourite Page</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   Profile: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     position: 'relative',
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//     width: 428,
//     height: 926,
//   },
//   Title: {
//     color: 'red',
//   }
// });