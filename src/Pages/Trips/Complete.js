import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Pressable, ScrollView, UIManager, LayoutAnimation } from "react-native";
import { useNavigation } from "@react-navigation/native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Complete = () => {

  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const navigation = useNavigation();

  return (
    <ScrollView  style={styles.container}>
      <View style={styles.tripsPlanner04View}>
        {/* <View style={styles.autoLayoutVertical10}> */}
        <View style={styles.autoLayoutVertical9}>
          <View style={styles.autoLayoutVertical8}>

            <View style={styles.categoryDefaultCollapseThe}>
              <View style={styles.typeDriverListComponentAc}>
                <View style={styles.autoLayoutHorizontal1}>
                  <View style={styles.featureIconView1}>
                    <View style={styles.featureIconView}>
                      <View style={styles.autoLayoutHorizontal}>
                        <Image
                          style={styles.iconlyBoldQRCode}
                          resizeMode="cover"
                          source={require("../../assets/Profile/Trips/iconlyboldqr-code.png")}
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
                  <View style={styles.autoLayoutHorizontal2}>
                    <Image
                      style={styles.iconlyBulkStar}
                      resizeMode="cover"
                      source={require("../../assets/Profile/Trips/iconlybulkstar1.png")}
                    />
                    <Text style={[styles.text, styles.ml8]}>4.8</Text>
                  </View>
                  <Image
                    style={[styles.iconlyLightOutlineBookmark, styles.mt8]}
                    resizeMode="cover"
                    source={require("../../assets/Profile/Trips/iconlylightoutlinebookmark.png")}
                  />
                  <Text style={[styles.hDG6374SY, styles.mt8]}>
                    HDG 6374 SY
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.themeLightDividerIcon, styles.mt16]}
                resizeMode="cover"
                source={require("../../assets/Profile/Trips/themelight-divider12.png")}
              />
              {expanded && (
                <Pressable
                onPress={() => navigation.navigate("list")}>
                <View style={styles.tile}>
                  <Text style={styles.busText}>Larkin to Zoo Johor</Text>
                  <Text style={styles.busText1}>Total Distance: 10 KM | Time:  30  mins</Text>
                  <Text style={styles.busText2}>Fare: $30</Text>
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
                  </View>
                </View>
                </Pressable>
              )}
              <Pressable
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setExpanded(!expanded);
                }}>
                <Image
                  style={[styles.iconlyLightArrowDown2, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/iconlylightarrow--down-2.png")}
                />
              </Pressable>
            </View>

              <View style={styles.categoryDefaultCollapseThe}>
                <View style={styles.typeDriverListComponentAc}>
                  <View style={styles.autoLayoutHorizontal1}>
                    <View style={styles.featureIconView1}>
                      <View style={styles.featureIconView}>
                        <View style={styles.autoLayoutHorizontal}>
                          <Image
                            style={styles.iconlyBoldCard1}
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
                    <View style={styles.autoLayoutHorizontal2}>
                      <Image
                        style={styles.iconlyBulkStar}
                        resizeMode="cover"
                        source={require("../../assets/Profile/Trips/iconlybulkstar1.png")}
                      />
                      <Text style={[styles.text, styles.ml8]}>4.8</Text>
                    </View>
                    <Image
                      style={[styles.iconlyLightOutlineBookmark, styles.mt8]}
                      resizeMode="cover"
                      source={require("../../assets/Profile/Trips/iconlylightoutlinebookmark.png")}
                    />
                    <Text style={[styles.hDG6374SY, styles.mt8]}>
                      HDY 291F GR
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/themelight-divider12.png")}
                />
                {expanded1 && (
                <Pressable
                onPress={() => navigation.navigate("list")}>
                <View style={styles.tile}>
                <Text style={styles.busText}>Larkin to Zoo Johor</Text>
                  <Text style={styles.busText1}>Total Distance: 10 KM | Time:  30  mins</Text>
                  <Text style={styles.busText2}>Fare: $30</Text>
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
                  </View>
                </View>
                </Pressable>
              )}
              <Pressable
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setExpanded1(!expanded1);
                }}>
                <Image
                  style={[styles.iconlyLightArrowDown2, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/iconlylightarrow--down-2.png")}
                />
              </Pressable>
              </View>

              <View style={styles.categoryDefaultCollapseThe}>
                <View style={styles.typeDriverListComponentAc}>
                  <View style={styles.autoLayoutHorizontal1}>
                    <View style={styles.featureIconView1}>
                      <View style={styles.featureIconView}>
                        <View style={styles.autoLayoutHorizontal}>
                          <Image
                            style={styles.iconlyBoldCard1}
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
                    <View style={styles.autoLayoutHorizontal2}>
                      <Image
                        style={styles.iconlyBulkStar}
                        resizeMode="cover"
                        source={require("../../assets/Profile/Trips/iconlybulkstar1.png")}
                      />
                      <Text style={[styles.text, styles.ml8]}>4.8</Text>
                    </View>
                    <Image
                      style={[styles.iconlyLightOutlineBookmark, styles.mt8]}
                      resizeMode="cover"
                      source={require("../../assets/Profile/Trips/iconlyboldbookmark.png")}
                    />
                    <Text style={[styles.hDG6374SY, styles.mt8]}>
                      JYS 4728 JS
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/themelight-divider12.png")}
                />
                {expanded2 && (
                <Pressable
                onPress={() => navigation.navigate("list")}>
                <View style={styles.tile}>
                <Text style={styles.busText}>Larkin to Zoo Johor</Text>
                  <Text style={styles.busText1}>Total Distance: 10 KM | Time:  30  mins</Text>
                  <Text style={styles.busText2}>Fare: $30</Text>
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
                  </View>
                </View>
                </Pressable>
              )}
              <Pressable
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setExpanded2(!expanded2);
                }}>
                <Image
                  style={[styles.iconlyLightArrowDown2, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/iconlylightarrow--down-2.png")}
                />
              </Pressable>
              </View>

              <View style={styles.categoryDefaultCollapseThe}>
                <View style={styles.typeDriverListComponentAc}>
                  <View style={styles.autoLayoutHorizontal1}>
                    <View style={styles.featureIconView1}>
                      <View style={styles.featureIconView}>
                        <View style={styles.autoLayoutHorizontal}>
                          <Image
                            style={styles.iconlyBoldQRCode}
                            resizeMode="cover"
                            source={require("../../assets/Profile/Trips/iconlyboldqr-code.png")}
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
                    <View style={styles.autoLayoutHorizontal2}>
                      <Image
                        style={styles.iconlyBulkStar}
                        resizeMode="cover"
                        source={require("../../assets/Profile/Trips/iconlybulkstar1.png")}
                      />
                      <Text style={[styles.text, styles.ml8]}>4.8</Text>
                    </View>
                    <Image
                      style={[styles.iconlyLightOutlineBookmark, styles.mt8]}
                      resizeMode="cover"
                      source={require("../../assets/Profile/Trips/iconlylightoutlinebookmark.png")}
                    />
                    <Text style={[styles.hDG6374SY, styles.mt8]}>
                      TDY 5739 AK
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/themelight-divider12.png")}
                />
                {expanded3 && (
                <Pressable
                onPress={() => navigation.navigate("list")}>
                <View style={styles.tile}>
                <Text style={styles.busText}>Larkin to Zoo Johor</Text>
                  <Text style={styles.busText1}>Total Distance: 10 KM | Time:  30  mins</Text>
                  <Text style={styles.busText2}>Fare: $30</Text>
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
                  </View>
                </View>
                </Pressable>
              )}
              <Pressable
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setExpanded3(!expanded3);
                }}>
                <Image
                  style={[styles.iconlyLightArrowDown2, styles.mt16]}
                  resizeMode="cover"
                  source={require("../../assets/Profile/Trips/iconlylightarrow--down-2.png")}
                />
              </Pressable>
              </View>
          </View>
        </View>
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  mt12: {
    marginTop: 12,
  },
  mt2: {
    marginTop: 2,
  },
  ml19: {
    marginLeft: 19,
  },
  mt24: {
    marginTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  labelPositionView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  ml16: {
    marginLeft: 16,

  },
  labelView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 260
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

  tile: {
    backgroundColor: "white",
    // borderWidth: 0.5,
    // borderColor: "#d6d7da",
    
  },

  iconlyBoldQRCode: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  autoLayoutHorizontal: {
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
  busText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
    marginTop:5
  },
  busText1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "left",
    marginTop:5
  },
  busText2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#002B7F",
    textAlign: "left",
    marginTop:5
  },
  dec2020241000AM: {
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
  autoLayoutHorizontal1: {
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
  text: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "left",
  },
  autoLayoutHorizontal2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  iconlyLightOutlineBookmark: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  hDG6374SY: {
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
    marginTop: 10
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
  featureIconView2: {
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
  featureIconView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  busTicketText1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  dec2020241000AM1: {
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
  autoLayoutVertical2: {
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
  iconlyBulkStar1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  text1: {
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
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  iconlyLightOutlineBookmarkPressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  hDY291FGR: {
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
  autoLayoutVertical3: {
    width: 100,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  typeDriverListComponentAc1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  themeLightDividerIcon1: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  iconlyLightArrowDown21: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  categoryDefaultCollapseThe1: {
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
  iconlyBoldCard1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  autoLayoutHorizontal6: {
    borderRadius: 1000,
    backgroundColor: "#002b7f",
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView4: {
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
  featureIconView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  busTicketText2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  dec2020241000AM2: {
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
  autoLayoutVertical4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal7: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBulkStar2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "left",
  },
  autoLayoutHorizontal8: {
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
  autoLayoutVertical5: {
    width: 100,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  typeDriverListComponentAc2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  themeLightDividerIcon2: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  iconlyLightArrowDown22: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  categoryDefaultCollapseThe2: {
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
  iconlyBoldQRCode1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  autoLayoutHorizontal9: {
    borderRadius: 1000,
    backgroundColor: "#002b7f",
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView6: {
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
  featureIconView7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  busTicketText3: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  dec2020241000AM3: {
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
  autoLayoutVertical6: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal10: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBulkStar3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  text3: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "left",
  },
  autoLayoutHorizontal11: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  iconlyLightOutlineBookmark1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  tDY5739AK: {
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
  autoLayoutVertical7: {
    width: 100,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  typeDriverListComponentAc3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  themeLightDividerIcon3: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  iconlyLightArrowDown23: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  categoryDefaultCollapseThe3: {
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
  autoLayoutVertical8: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical9: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical10: {
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
  iconlyLightOutlineHome: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text4: {
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
  text5: {
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
  text6: {
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
  text7: {
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
  autoLayoutHorizontal12: {
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
  text8: {
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
  text9: {
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
    color: "#9e9e9e",
    textAlign: "center",
  },
  autoLayoutHorizontal13: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView: {
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
    color: "#0f437b",
    textAlign: "center",
  },
  autoLayoutHorizontal14: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView1: {
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
  tripsPlanner04View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Complete;




// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// export default function Complete() {
//   const Intro2 = () => {};
//   return (
//     <ScrollView>
//       <View style={styles.Profile}>
//         <Text style={styles.Title}>Hi, I'm a Complete Page</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   Profile: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//     width: 428,
//     height: 926,
//   },
//   Title: {
//     color: 'red',
//   }
// });