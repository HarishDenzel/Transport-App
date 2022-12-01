import React from "react"
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Contact() {
    const navigation = useNavigation();
  return (
    <View style={styles.HelpCenter_02}>
      <View style={styles.Group436}>
        <View style={styles.AutoLayoutVertical3}>
          <View style={styles.AutoLayoutVertical1}>
          <Pressable
           onPress={() => navigation.navigate("Home")}>
            <View style={styles.AutoLayoutHorizontal1}>
              <Image
                style={styles.Frame}
                source={require('../assets/Profile/whatsapp.png')}
              />
              <Text style={styles.Txt522}>WhatsApp</Text>
            </View>
            </Pressable>
          </View>
          <View style={styles.AutoLayoutVertical1}>
          <Pressable
           onPress={() => navigation.navigate("Home")}>
            <View style={styles.AutoLayoutHorizontal1}>
              <Image
                style={styles.Frame}
                source={require('../assets/Profile/www.png')}
              />
              <Text style={styles.Txt522}>Website</Text>
            </View>
            </Pressable>
          </View>
          <View style={styles.AutoLayoutVertical1}>
          <Pressable
           onPress={() => navigation.navigate("Home")}>
            <View style={styles.AutoLayoutHorizontal1}>
              <Image
                style={styles.Frame}
                source={require('../assets/Profile/facebook.png')}
              />
              <Text style={styles.Txt522}>Facebook</Text>
            </View>
            </Pressable>
          </View>
          <View style={styles.AutoLayoutVertical1}>
          <Pressable
           onPress={() => navigation.navigate("Home")}>
            <View style={styles.AutoLayoutHorizontal1}>
              <Image
                style={styles.Frame}
                source={require('../assets/Profile/twitter.png')}
              />
              <Text style={styles.Txt522}>Twitter</Text>
            </View>
            </Pressable>
          </View>
          <View style={styles.AutoLayoutVertical2}>
          <Pressable
           onPress={() => navigation.navigate("Home")}>
            <View style={styles.AutoLayoutHorizontal1}>
              <Image
                style={styles.Frame}
                source={require('../assets/Profile/instagram.png')}
              />
              <Text style={styles.Txt522}>Instagram</Text>
            </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HelpCenter_02: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 295,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 926,
  },
  Group436: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  HelpCenterTop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 24,
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
  Txt620: {
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
  Txt921: {
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
  Txt633: {
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

  Group206: {
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
  Txt633: {
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
  Txt903: {
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

  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    shadowColor: "rgba(4,6,15,0.05)",
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 332,
  },
  Frame: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  Txt522: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 293,
    height: 25,
  },

  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    shadowColor: "rgba(4,6,15,0.05)",
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 332,
  },
  Frame: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  Txt522: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 293,
    height: 25,
  },

  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    shadowColor: "rgba(4,6,15,0.05)",
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 332,
  },
  Frame: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  Txt522: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 293,
    height: 25,
  },

  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    shadowColor: "rgba(4,6,15,0.05)",
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 332,
  },
  Frame: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  Txt522: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 293,
    height: 25,
  },

  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    shadowColor: "rgba(4,6,15,0.05)",
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 332,
  },
  Frame: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  Txt522: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 293,
    height: 25,
  },
})
