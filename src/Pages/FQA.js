import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function FQA() {
  return (
    <View style={styles.HelpCenter_01}>
      <View style={styles.Group896}>
        <View style={styles.AutoLayoutVertical2}>
          <View style={styles.AutoLayoutHorizontal1}>
            <View style={styles.Chips}>
              <View style={styles._chips}>
                <Text style={styles.Txt575}>General</Text>
              </View>
            </View>
            <View style={styles.Chips}>
              <View style={styles._chips1}>
                <Text style={styles.Txt1056}>Account</Text>
              </View>
            </View>
            <View style={styles.Chips}>
              <View style={styles._chips1}>
                <Text style={styles.Txt1056}>Service</Text>
              </View>
            </View>
            <View style={styles.TopAppBar}>
              <View style={styles._chips1}>
                <Text style={styles.Txt1056}>Payment</Text>
              </View>
            </View>
          </View>
          <View style={styles.AutoLayoutVertical1}>
            <View style={styles.ThemeLightComponentFaq}>
              <View style={styles.AutoLayoutHorizontal2}>
                <Text style={styles.Txt657}>What is Bus</Text>
                <Image
                  style={styles.IconlyBoldArrowDown2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0x8l7ravappe-1633%3A44193?alt=media&token=6525db99-0a3e-4372-a6f9-87ffb70b6454",
                  }}
                />
              </View>
              <Text style={styles.Txt065}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
            <View style={styles.ThemeLightComponentFaq}>
              <View style={styles.AutoLayoutHorizontal3}>
                <Text style={styles.Txt657}>How to use Bus</Text>
                <Image
                  style={styles.IconlyBoldArrowDown2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0x8l7ravappe-1633%3A44200?alt=media&token=392065cd-ee7c-47dc-b05f-7e9eeb843109",
                  }}
                />
              </View>
            </View>
            <View style={styles.ThemeLightComponentFaq}>
              <View style={styles.AutoLayoutHorizontal3}>
                <Text style={styles.Txt657}>How do I cancel a booking?</Text>
                <Image
                  style={styles.IconlyBoldArrowDown2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0x8l7ravappe-1633%3A44207?alt=media&token=7df0fc7f-2602-4767-873e-30894bc9807b",
                  }}
                />
              </View>
            </View>
            <View style={styles.ThemeLightComponentFaq}>
              <View style={styles.AutoLayoutHorizontal3}>
                <Text style={styles.Txt657}>Is Bus free to use?</Text>
                <Image
                  style={styles.IconlyBoldArrowDown2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0x8l7ravappe-1633%3A44214?alt=media&token=5fe5b771-6ba8-4bbd-8a80-99fb5ca4e9ce",
                  }}
                />
              </View>
            </View>
            <View style={styles.ThemeLightComponentFaq1}>
              <View style={styles.AutoLayoutHorizontal3}>
                <Text style={styles.Txt657}>How to add promo on Bus</Text>
                <Image
                  style={styles.IconlyBoldArrowDown2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0x8l7ravappe-1633%3A44221?alt=media&token=706f7bbd-e2a7-46b8-a900-d56397697b02",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HelpCenter_01: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 121,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 926,
  },
  Group896: {
    display: "flex",
    flexDirection: "column",
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
  Txt641: {
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
  Txt148: {
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
    marginBottom: 24,
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
  Txt455: {
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

  Group8101: {
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
  Txt572: {
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
  Txt455: {
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

  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 23,
    paddingRight: 23,
    width: 428,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 24,
    width: 380,
  },
  Chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
  },
  _chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 100,
    backgroundColor: "rgba(198,36,83,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(198,36,83,1)",
    shadowColor: "rgba(16,24,40,0.1)",
    elevation: 0,
    shadowOffset: { width: 0, height: 1 },
  },
  Txt575: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(249,233,238,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
  },
  _chips1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    shadowColor: "rgba(16,24,40,0.1)",
    elevation: 0,
    shadowOffset: { width: 0, height: 1 },
  },
  Txt1056: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
  },
  _chips1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    shadowColor: "rgba(16,24,40,0.1)",
    elevation: 0,
    shadowOffset: { width: 0, height: 1 },
  },
  Txt1056: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  TopAppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  _chips1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    shadowColor: "rgba(16,24,40,0.1)",
    elevation: 0,
    shadowOffset: { width: 0, height: 1 },
  },
  Txt1056: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  ThemeLightComponentFaq: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
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
  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
    width: 348,
  },
  Txt657: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 313,
    height: 25,
    marginRight: 12,
  },
  IconlyBoldArrowDown2: {
    width: 24,
    height: 24,
  },

  Txt065: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(66,66,66,1)",
    width: 349,
  },

  ThemeLightComponentFaq: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
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
  AutoLayoutHorizontal3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 348,
  },
  Txt657: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 313,
    height: 25,
    marginRight: 12,
  },
  IconlyBoldArrowDown2: {
    width: 24,
    height: 24,
  },

  ThemeLightComponentFaq: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
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
  AutoLayoutHorizontal3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 348,
  },
  Txt657: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 313,
    height: 25,
    marginRight: 12,
  },
  IconlyBoldArrowDown2: {
    width: 24,
    height: 24,
  },

  ThemeLightComponentFaq: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
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
  AutoLayoutHorizontal3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 348,
  },
  Txt657: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 313,
    height: 25,
    marginRight: 12,
  },
  IconlyBoldArrowDown2: {
    width: 24,
    height: 24,
  },

  ThemeLightComponentFaq1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 15,
    paddingRight: 15,
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
  AutoLayoutHorizontal3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 348,
  },
  Txt657: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 313,
    height: 25,
    marginRight: 12,
  },
  IconlyBoldArrowDown2: {
    width: 24,
    height: 24,
  },
})
