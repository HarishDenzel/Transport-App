import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Dimensions,ScrollView,TextInput,TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import GetColors from "../assets/GetColors";
import Lottie from 'lottie-react-native';
import ReactModal from '../Components/ReactModal';
export default function Report() {
  const height = Dimensions.get("screen").height;
  const [promoModal, setPromoModal] = useState(false)
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.HelpCenter_03}>
      <View style={styles.Group7810}>
        <View style={styles.AutoLayoutVertical3}>
          <View style={styles.AutoLayoutVertical2}>
            <View style={styles.AutoLayoutVertical2}>
              <View style={styles.AutoLayoutVertical1}>
                  <View style={styles.Text_field}>
                      <View style={styles.LabelText}>
                        <Text style={styles.Txt771}>User Name</Text>
                      </View>
                        <View style={styles.Input}>
                          <View style={styles.Content1}>
                            <TextInput style={styles.Txt072}
                            underlineColorAndroid = "transparent"
                            placeholder = "Reporter Name"
                            autoCapitalize = "none"
                            placeholderTextColor = "gray" />
                          </View>
                          </View>

                  </View>
                  <View style={styles.Text_field}>
                      <View style={styles.LabelText}>
                        <Text style={styles.Txt771}>Report Title</Text>
                      </View>
                        <View style={styles.Input}>
                          <View style={styles.Content1}>
                            <TextInput style={styles.Txt072}
                            underlineColorAndroid = "transparent"
                            placeholder = "What This All About"
                            autoCapitalize = "none"
                            placeholderTextColor = "gray"/>

                          </View>
                    </View>
                  </View>
                    <View style={styles._textAreaInputFieldBase_alternative}>
                      <View style={styles.LabelText}>
                        <Text style={styles.Txt771}>Description</Text>
                      </View>
                      <View style={styles.Content2}>
                        <View style={styles.Input1}>
                          <View style={styles.Content1}>
                            <TextInput style={styles.Txt072}
                            underlineColorAndroid = "transparent"
                            placeholder = "Description"
                            autoCapitalize = "none"
                            placeholderTextColor = "gray"/>
                          </View>
                        </View>
                      </View>
                    </View>
               
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Button}>
          <View style={styles._buttonBasePrimary}>
          <TouchableOpacity
       onPress={() => setPromoModal(true)}
      >
        <Text style={{color: GetColors.white}}>Submit</Text>
      </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    <ReactModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={promoModal}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: (height / 100) * 45,
            width: "89%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 0.4, }}>
            {/* <Image
              source={GetImage.promoSuccess}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            /> */}
            <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../assets/Animation/lf20_s2lryxtd.json")} autoPlay />
          </View>
          <View
            style={{
              flex: 0.2,
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
              {"Report Sent"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.5,
                fontFamily: "Urbanist_semibold",
                color: "#616161",
              }}
            >
             Your report has been submitted
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => setPromoModal(!promoModal)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: (height / 100) * 35,
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
                {"Okay"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HelpCenter_03: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 47,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group7810: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  StatusBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
  },
  Txt268: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(18,18,18,1)",
    marginRight: 283,
  },
  Group: {
    width: 18,
    height: 10,
    marginRight: 5,
  },
  Group1: {
    width: 15.27,
    height: 10.97,
    marginRight: 6,
  },
  Group2: {
    width: 26.98,
    height: 13,
  },

  TopAppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  _topAppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 23,
    paddingRight: 23,
    width: 428,
    height: 64,
  },
  Content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  IconlyLightArrowLeft: {
    width: 28,
    height: 28,
    marginRight: 14,
  },
  Txt334: {
    fontSize: 24,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 29,
    color: "rgba(33,33,33,1)",
  },

  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 31,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 428,
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  HorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 142.67,
    height: 42,
  },
  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  Txt867: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(15,67,123,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Rectangle: {
    backgroundColor: "rgba(15,67,123,1)",
    width: 142.67,
    height: 2,
  },

  Group967: {
    display: "flex",
    flexDirection: "row",
  },
  HorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 142.67,
    height: 42,
  },
  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  Txt571: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Rectangle: {
    backgroundColor: "rgba(238,238,238,1)",
    width: 142.67,
    height: 2,
  },

  HorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 142.67,
    height: 42,
  },
  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  Txt571: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Rectangle: {
    backgroundColor: "rgba(238,238,238,1)",
    width: 142.67,
    height: 2,
  },

  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 154,
    width: 428,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 380,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 380,
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Text_field: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  LabelText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 12,
    width: 380,
  },
  Txt771: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
  },

  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    width: 380,
    height: 56,
  },
  Content1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 340,
  },
  Txt072: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 341,
  },

  Text_field: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  LabelText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 12,
    width: 380,
  },
  Txt771: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
  },

  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    width: 380,
    height: 56,
  },
  Content1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 340,
  },
  Txt072: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 341,
  },

  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  _textAreaInputFieldBase_alternative: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 216,
  },
  LabelText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 12,
    width: 380,
  },
  Txt771: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
  },

  Content2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 179,
  },
  Input1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 13.5,
    paddingBottom: 13.5,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    // width: 380,
    // height: 179,
  },
  Content1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 340,
  },
  Txt072: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 341,
  },

  Button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  _buttonBasePrimary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 27,
    paddingRight: 27,
    borderRadius: 100,
    backgroundColor: "#0F437B",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(181,197,214,1)",
    width: 380,
  },
  Txt321: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(231,236,242,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
