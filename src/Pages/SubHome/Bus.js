import React,{useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";

const listTab = [
  {
    tabName: "Mon",
  },
  {
    tabName: "Tue",
  },
  {
    tabName: "Wed",
  },
  {
    tabName: "Thu",
  },
  {
    tabName: "Fri",
  },
  {
    tabName: "Sat",
  },
  {
    tabName: "Sun",
  },
];
const timeTab = [
  {
    tabTime: "6AM - 9AM",
  },
  {
    tabTime: "9AM - 12PM",
  },
  {
    tabTime: "12PM - 3PM",
  },
  {
    tabTime: "3PM - 6PM",
  },
  {
    tabTime: "6PM - 9PM",
  },
  {
    tabTime: "9PM - 12AM",
  },
  {
    tabTime: "12AM - 3AM",
  },
  {
    tabTime: "3AM - 6AM",
  }
];

const HomeAction = (props) => {
  const navigation = useNavigation();
    const [tabName, setTabName] = useState("Mon");
    const [tabTime, setTabTime] = useState("9AM - 12PM");

    const setTab = (tabName) => {
      setTabName(tabName);
    };

    const setTime = (tabTime) => {
      setTabName(tabTime);
    };

  return (
    <Header
      {...props}
      rightIcon={false}
      // isBackground={true}
      title={"Available Routes"}
    >
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.homeAction14}>
          <View style={styles.frameView2}>
            {/* <View style={styles.frameView}>
              <View style={styles.chipsView1}>
                <View style={styles.chipsView}>
                  <Text style={styles.text}>Sun 12</Text>
                </View>
              </View>
              <View style={[styles.chipsView3, styles.ml22]}>
                <View style={styles.chipsView2}>
                  <Text style={styles.text1}>Mon 13</Text>
                </View>
              </View>
              <View style={[styles.chipsView5, styles.ml22]}>
                <View style={styles.chipsView4}>
                  <Text style={styles.text2}>Tue 14</Text>
                </View>
              </View>
              <View style={[styles.chipsView7, styles.ml22]}>
                <View style={styles.chipsView6}>
                  <Text style={styles.text3}>Wed 15</Text>
                </View>
              </View>
              <View style={[styles.chipsView9, styles.ml22]}>
                <View style={styles.chipsView8}>
                  <Text style={styles.text4}>Thu 16</Text>
                </View>
              </View>
              <View style={[styles.chipsView11, styles.ml22]}>
                <View style={styles.chipsView10}>
                  <Text style={styles.text5}>Fri 17</Text>
                </View>
              </View>
              <View style={[styles.chipsView13, styles.ml22]}>
                <View style={styles.chipsView12}>
                  <Text style={styles.text6}>Thu 17</Text>
                </View>
              </View>
            </View> */}
            <ScrollView
              horizontal={true}
              style={styles.tabList}
              showsHorizontalScrollIndicator={false}
            >
              {listTab.map((item) => (
                <TouchableOpacity
                  style={[
                    styles.btnTab,
                    tabName === item.tabName && styles.btnTabActive,
                  ]}
                  onPress={() => setTab(item.tabName)}
                >
                  <Text
                    style={[
                      styles.textTab,
                      tabName === item.tabName && styles.textTabActive,
                    ]}
                  >
                    {item.tabName}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Image
              style={[styles.themeLightDividerIcon, styles.mt10]}
              resizeMode="cover"
              source={require("../../assets/Home/divider.png")}
            />
            <ScrollView
              horizontal={true}
              style={styles.timeList}
              showsHorizontalScrollIndicator={false}
            >
              {timeTab.map((item) => (
                <TouchableOpacity
                  style={[
                    styles.btnTime,
                    tabTime === item.tabTime && styles.btnTabActive,
                  ]}
                  onPress={() => setTab(item.tabTime)}
                >
                  <Text
                    style={[
                      styles.textTab,
                      tabTime === item.tabTime && styles.textTabActive,
                    ]}
                  >
                    {item.tabTime}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {/* <HomeAction16 /> */}
          <View style={styles.innderDisplayContent}>
            <Pressable
              style={styles.autoLayoutHorizontal}
              onPress={() => navigation.navigate("Homelist")}
            >
              <View style={styles.contentView}>
                <View style={styles.actualContenView}>
                  <View style={styles.scheduleInfoView}>
                    <View style={styles.frameView3}>
                      <Image
                        style={styles.ellipseIcon}
                        resizeMode="cover"
                        source={require("../../assets/Home/ellipse-3.png")}
                      />
                      <View style={styles.lineView} />
                    </View>
                    <View style={[styles.containerView, styles.ml9]}>
                      <View style={styles.contentsView}>
                        <View style={styles.timePlace}>
                          <Text style={styles.aMText}>09:15 AM</Text>
                          <Text style={[styles.larkinStadiumBS, styles.mt4]}>
                            Larkin Stadium BS
                          </Text>
                        </View>
                        <View style={[styles.detailsForUserView, styles.mt6]}>
                          <View style={styles.frameView4}>
                            <Image
                              style={styles.iconlyOtherWalk}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyotherwalk.png")}
                            />
                            <Text
                              style={[styles.kMToNearestStation, styles.ml6]}
                            >
                              0.4 KM to nearest station
                            </Text>
                          </View>
                          <View style={[styles.frameView5, styles.mt4]}>
                            <Image
                              style={styles.iconlyBoldTimeSquare}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyboldtime-square.png")}
                            />
                            <Text
                              style={[
                                styles.minsBeforeBusArrivingToTh,
                                styles.ml6,
                              ]}
                            >
                              15 Mins before bus arriving to this station
                            </Text>
                          </View>
                          <View style={[styles.frameView6, styles.mt4]}>
                            <Image
                              style={styles.iconlyOtherHandFilled}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyotherhand-filled.png")}
                            />
                            <Text
                              style={[
                                styles.stopsBeforeBusArrivingToT,
                                styles.ml6,
                              ]}
                            >
                              2 Stops before bus arriving to this station
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.scheduleInfoView1, styles.mt10]}>
                    <View style={styles.frameView7}>
                      <Image
                        style={styles.ellipseIcon1}
                        resizeMode="cover"
                        source={require("../../assets/Home/ellipse-31.png")}
                      />
                      <View style={styles.lineView1} />
                    </View>
                    <View style={[styles.containerView1, styles.ml9]}>
                      <View style={styles.contentsView1}>
                        <View style={styles.timePlace1}>
                          <Text style={styles.aMText1}>09:56 AM</Text>
                          <Text style={[styles.zooJohorBS, styles.mt4]}>
                            Zoo Johor BS
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
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
              </View>
            </Pressable>
            <Pressable
              style={[styles.autoLayoutHorizontal1, styles.mt15]}
              onPress={() => navigation.navigate("Homelist")}
            >
              <View style={styles.contentView1}>
                <View style={styles.actualContenView1}>
                  <View style={styles.scheduleInfoView2}>
                    <View style={styles.frameView8}>
                      <Image
                        style={styles.ellipseIcon2}
                        resizeMode="cover"
                        source={require("../../assets/Home/ellipse-3.png")}
                      />
                      <View style={styles.lineView2} />
                    </View>
                    <View style={[styles.containerView2, styles.ml9]}>
                      <View style={styles.contentsView2}>
                        <View style={styles.timePlace2}>
                          <Text style={styles.aMText2}>10:15 AM</Text>
                          <Text
                            style={[styles.klinikKesihatanKempasBS, styles.mt4]}
                          >
                            Klinik Kesihatan Kempas BS
                          </Text>
                        </View>
                        <View style={[styles.detailsForUserView1, styles.mt6]}>
                          <View style={styles.frameView9}>
                            <Image
                              style={styles.iconlyOtherWalk1}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyotherwalk.png")}
                            />
                            <Text
                              style={[styles.kMToNearestStation1, styles.ml6]}
                            >
                              0.4 KM to nearest station
                            </Text>
                          </View>
                          <View style={[styles.frameView10, styles.mt4]}>
                            <Image
                              style={styles.iconlyBoldTimeSquare1}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyboldtime-square.png")}
                            />
                            <Text
                              style={[
                                styles.minsBeforeArrivingToThisS,
                                styles.ml6,
                              ]}
                            >
                              15 Mins before arriving to this station
                            </Text>
                          </View>
                          <View style={[styles.frameView11, styles.mt4]}>
                            <Image
                              style={styles.iconlyOtherHandFilled1}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyotherhand-filled.png")}
                            />
                            <Text
                              style={[
                                styles.stopsBeforeArrivingToThis,
                                styles.ml6,
                              ]}
                            >
                              2 Stops before arriving to this station
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.scheduleInfoView3, styles.mt10]}>
                    <View style={styles.frameView12}>
                      <Image
                        style={styles.ellipseIcon3}
                        resizeMode="cover"
                        source={require("../../assets/Home/ellipse-31.png")}
                      />
                      <View style={styles.lineView3} />
                    </View>
                    <View style={[styles.containerView3, styles.ml9]}>
                      <View style={styles.contentsView3}>
                        <View style={styles.timePlace3}>
                          <Text style={styles.aMText3}>11:00 AM</Text>
                          <Text style={[styles.zooJohorBS1, styles.mt4]}>
                            Zoo Johor BS
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={[styles.labelPositionView1, styles.ml16]}>
                  <View style={styles.labelView5}>
                    <View style={styles.labelView4}>
                      <Image
                        style={styles.iconlyOtherBus1}
                        resizeMode="cover"
                        source={require("../../assets/Home/iconlyotherbus.png")}
                      />
                      <Text style={[styles.text17, styles.ml4]}>234</Text>
                    </View>
                  </View>
                  <View style={styles.labelView7}>
                    <View style={styles.labelView6}>
                      <Image
                        style={styles.iconlyOtherSeats1}
                        resizeMode="cover"
                        source={require("../../assets/Home/iconlyotherseats1.png")}
                      />
                      <Text style={[styles.text18, styles.ml4]}>Seats</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>

            <Pressable
              style={[styles.autoLayoutHorizontal2, styles.mt15]}
              onPress={() => navigation.navigate("Homelist")}
            >
              <View style={styles.contentView2}>
                <View style={styles.actualContenView2}>
                  <View style={styles.scheduleInfoView4}>
                    <View style={styles.frameView13}>
                      <Image
                        style={styles.ellipseIcon4}
                        resizeMode="cover"
                        source={require("../../assets/Home/ellipse-3.png")}
                      />
                      <View style={styles.lineView4} />
                    </View>
                    <View style={[styles.containerView4, styles.ml9]}>
                      <View style={styles.contentsView4}>
                        <View style={styles.timePlace4}>
                          <Text style={styles.aMText4}>11:23 AM</Text>
                          <Text
                            style={[styles.aEONMallTebrauCityBS, styles.mt4]}
                          >
                            AEON Mall Tebrau City BS
                          </Text>
                        </View>
                        <View style={[styles.detailsForUserView2, styles.mt6]}>
                          <View style={styles.frameView14}>
                            <Image
                              style={styles.iconlyOtherWalk2}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyotherwalk.png")}
                            />
                            <Text
                              style={[styles.kMToNearestStation2, styles.ml6]}
                            >
                              0.4 KM to nearest station
                            </Text>
                          </View>
                          <View style={[styles.frameView15, styles.mt4]}>
                            <Image
                              style={styles.iconlyBoldTimeSquare2}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyboldtime-square.png")}
                            />
                            <Text
                              style={[
                                styles.minsBeforeArrivingToThisS1,
                                styles.ml6,
                              ]}
                            >
                              15 Mins before arriving to this station
                            </Text>
                          </View>
                          <View style={[styles.frameView16, styles.mt4]}>
                            <Image
                              style={styles.iconlyOtherHandFilled2}
                              resizeMode="cover"
                              source={require("../../assets/Home/iconlyotherhand-filled.png")}
                            />
                            <Text
                              style={[
                                styles.stopsBeforeArrivingToThis1,
                                styles.ml6,
                              ]}
                            >
                              2 Stops before arriving to this station
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.scheduleInfoView5, styles.mt10]}>
                    <View style={styles.frameView17}>
                      <Image
                        style={styles.ellipseIcon5}
                        resizeMode="cover"
                        source={require("../../assets/Home/ellipse-31.png")}
                      />
                      <View style={styles.lineView5} />
                    </View>
                    <View style={[styles.containerView5, styles.ml9]}>
                      <View style={styles.contentsView5}>
                        <View style={styles.timePlace5}>
                          <Text style={styles.aMText5}>08:15 AM</Text>
                          <Text style={[styles.zooJohorBS2, styles.mt4]}>
                            Zoo Johor BS
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.labelPositionView2, styles.ml16]}>
                  <View style={styles.labelView9}>
                    <View style={styles.labelView8}>
                      <Image
                        style={styles.iconlyOtherBus2}
                        resizeMode="cover"
                        source={require("../../assets/Home/iconlyotherbus2.png")}
                      />
                      <Text style={[styles.text19, styles.ml4]}>521</Text>
                    </View>
                  </View>
                  <View style={styles.labelView11}>
                    <View style={styles.labelView10}>
                      <Image
                        style={styles.iconlyOtherSeats2}
                        resizeMode="cover"
                        source={require("../../assets/Home/iconlyotherseats2.png")}
                      />
                      <Text style={[styles.text20, styles.ml4]}>Seats</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabList: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  timeList: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 10,
    marginTop: 4,
  },
  btnTab: {
    width: Dimensions.get("window").width / 4.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 25,
    padding: 6,
    height: 36,
    marginEnd: 4,
    borderColor: "#eee",
    justifyContent: "center",
  },
  btnTime: {
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 25,
    padding: 6,
    height: 36,
    marginEnd: 4,
    borderColor: "#eee",
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
    color:'black'
  },
  btnTabActive: {
    backgroundColor: "#C62453",
  },
  textTabActive: {
    color: "#fff",
  },
  itmeStyles: {
    margin: 4,
    backgroundColor: "#ddd",
  },
  ml22: {
    marginLeft: 22,
  },
  ml8: {
    marginLeft: 8,
  },
  mt10: {
    marginTop: 10,
  },
  ml14: {
    marginLeft: 14,
  },
  ml24: {
    marginLeft: 24,
  },
  mt4: {
    marginTop: 4,
  },
  ml6: {
    marginLeft: 6,
  },
  mt6: {
    marginTop: 6,
  },
  ml9: {
    marginLeft: 9,
  },
  ml4: {
    marginLeft: 4,
  },
  ml16: {
    marginLeft: 16,
  },
  mt15: {
    marginTop: 15,
  },
  mt2: {
    marginTop: 2,
  },
  ml19: {
    marginLeft: 19,
  },
  text: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView2: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#f9e9ee",
    textAlign: "center",
  },
  chipsView4: {
    borderRadius: 100,
    backgroundColor: "#c62453",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#c62453",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView6: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text4: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView8: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView9: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView10: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView11: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text6: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView12: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView13: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  themeLightDividerIcon: {
    position: "relative",
    width: 428,
    height: 1,
    flexShrink: 0,
  },
  text7: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView14: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView15: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text8: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#f9e9ee",
    textAlign: "center",
  },
  chipsView16: {
    borderRadius: 100,
    backgroundColor: "#c62453",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#c62453",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView17: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text9: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView18: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView19: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text10: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView20: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView21: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text11: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView22: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView23: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text12: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  chipsView24: {
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "rgba(16, 24, 40, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipsView25: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    width: 428,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(4, 6, 15, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text13: {
    position: "absolute",
    marginTop: -11,
    top: "50%",
    left: 23,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
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
  iconlyLightArrowLeft: {
    position: "relative",
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  text14: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  contentPressable: {
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
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#002b7f",
    textAlign: "left",
  },
  larkinStadiumBS: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherWalk: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  kMToNearestStation: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldTimeSquare: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  minsBeforeBusArrivingToTh: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyOtherHandFilled: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  stopsBeforeBusArrivingToT: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detailsForUserView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon1: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView1: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    display: "none",
  },
  frameView7: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText1: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#379a47",
    textAlign: "left",
  },
  zooJohorBS: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actualContenView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  labelView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  labelView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelPositionView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  contentView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal: {
    alignSelf: "stretch",
    borderRadius: 16,
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
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ellipseIcon2: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView2: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText2: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#002b7f",
    textAlign: "left",
  },
  klinikKesihatanKempasBS: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherWalk1: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  kMToNearestStation1: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldTimeSquare1: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  minsBeforeArrivingToThisS: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyOtherHandFilled1: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  stopsBeforeArrivingToThis: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView11: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detailsForUserView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon3: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView3: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    display: "none",
  },
  frameView12: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText3: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#379a47",
    textAlign: "left",
  },
  zooJohorBS1: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actualContenView1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherBus1: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text17: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#e7ecf2",
    textAlign: "center",
  },
  labelView4: {
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
  labelView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherSeats1: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text18: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#379a47",
    textAlign: "center",
  },
  labelView6: {
    borderRadius: 5,
    backgroundColor: "#c8f3cf",
    width: 65,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  labelView7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelPositionView1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  contentView1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal1: {
    alignSelf: "stretch",
    borderRadius: 16,
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
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ellipseIcon4: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView4: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
  },
  frameView13: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText4: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#002b7f",
    textAlign: "left",
  },
  aEONMallTebrauCityBS: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#424242",
    textAlign: "left",
  },
  timePlace4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherWalk2: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  kMToNearestStation2: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldTimeSquare2: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  minsBeforeArrivingToThisS1: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView15: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyOtherHandFilled2: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  stopsBeforeArrivingToThis1: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView16: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detailsForUserView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon5: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView5: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    display: "none",
  },
  frameView17: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText5: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#379a47",
    textAlign: "left",
  },
  zooJohorBS2: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView5: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actualContenView2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherBus2: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text19: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#e7ecf2",
    textAlign: "center",
  },
  labelView8: {
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
  labelView9: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherSeats2: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text20: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#af3c3c",
    textAlign: "center",
  },
  labelView10: {
    borderRadius: 5,
    backgroundColor: "#fdcaca",
    width: 65,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  labelView11: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelPositionView2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  contentView2: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal2: {
    alignSelf: "stretch",
    borderRadius: 16,
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
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ellipseIcon6: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView6: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
  },
  frameView18: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText6: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#002b7f",
    textAlign: "left",
  },
  aEONMallTebrauCity: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#424242",
    textAlign: "left",
  },
  timePlace6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherWalk3: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  kMToNearestStation3: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldTimeSquare3: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  minsBeforeArrivingToThisS2: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView20: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyOtherHandFilled3: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  stopsBeforeArrivingToThis2: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView21: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detailsForUserView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView6: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon7: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView7: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    display: "none",
  },
  frameView22: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText7: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#379a47",
    textAlign: "left",
  },
  zooJohorText: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView7: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actualContenView3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherBus3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text21: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#e7ecf2",
    textAlign: "center",
  },
  labelView12: {
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
  labelView13: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherSeats3: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text22: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#af3c3c",
    textAlign: "center",
  },
  labelView14: {
    borderRadius: 5,
    backgroundColor: "#fdcaca",
    width: 65,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  labelView15: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelPositionView3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  contentView3: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal3: {
    alignSelf: "stretch",
    borderRadius: 16,
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
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ellipseIcon8: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView8: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
  },
  frameView23: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText8: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#002b7f",
    textAlign: "left",
  },
  aEONMallTebrauCity1: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#424242",
    textAlign: "left",
  },
  timePlace8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherWalk4: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  kMToNearestStation4: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView24: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldTimeSquare4: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
  },
  minsBeforeArrivingToThisS3: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView25: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyOtherHandFilled4: {
    position: "relative",
    width: 12,
    height: 12,
    flexShrink: 0,
    overflow: "hidden",
  },
  stopsBeforeArrivingToThis3: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    textAlign: "left",
  },
  frameView26: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detailsForUserView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView8: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView8: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon9: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  lineView9: {
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    display: "none",
  },
  frameView27: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 5,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aMText9: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#379a47",
    textAlign: "left",
  },
  zooJohorText1: {
    position: "relative",
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "left",
  },
  timePlace9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentsView9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView9: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scheduleInfoView9: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actualContenView4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherBus4: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text23: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#e7ecf2",
    textAlign: "center",
  },
  labelView16: {
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
  labelView17: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyOtherSeats4: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  text24: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#af3c3c",
    textAlign: "center",
  },
  labelView18: {
    borderRadius: 5,
    backgroundColor: "#fdcaca",
    width: 65,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  labelView19: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelPositionView4: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  contentView4: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal4: {
    alignSelf: "stretch",
    borderRadius: 16,
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
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  innderDisplayContent: {
    position: "absolute",
    top: 120,
    left: 0,
    width: 428,
    height: 696,
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldHome: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  text25: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif, sans-serif",
    color: "#0f437b",
    textAlign: "center",
  },
  bottomBarIcon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineDocument: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text26: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif, sans-serif",
    color: "#9e9e9e",
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
  text27: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif, sans-serif",
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
  text28: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#9e9e9e",
    textAlign: "center",
  },
  bottomBarIcon3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal5: {
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
  containerView10: {
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
    bottom: 0,
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
  homeAction14: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default HomeAction;
