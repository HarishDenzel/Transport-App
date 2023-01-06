import React from "react"
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import Header from "../Components/Header";

export default function PrivacyPolicy(props) {
  return (
    <Header
      {...props}
        rightIcon={false}
      // isBackground={true}
      title={"Privacy Policy"}
    >
      <ScrollView style={styles.container}>
        <View style={styles.PrivacyPolicies}>
          <View style={styles.AutoLayoutVertical2}>
            <View style={styles.AutoLayoutVertical}>
              <Text style={styles.Txt215}>1. Types of Data We Collect</Text>
              <Text style={styles.Txt987}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text style={styles.Txt215}>2. Use of Your Personal Data</Text>
              <Text style={styles.Txt987}>
                Magna etiam tempor orci eu lobortis elementum nibh. Vulputate
                enim nulla aliquet porttitor lacus. Orci sagittis eu volutpat
                odio. Cras semper auctor neque vitae tempus quam pellentesque
                nec. Non quam lacus suspendisse faucibus interdum posuere lorem
                ipsum dolor. Commodo elit at imperdiet dui. Nisi vitae suscipit
                tellus mauris a diam. Erat pellentesque adipiscing commodo elit
                at imperdiet dui. Mi ipsum faucibus vitae aliquet nec
                ullamcorper. Pellentesque pulvinar pellentesque habitant morbi
                tristique senectus et.
              </Text>
              <Text style={styles.Txt215}>
                3. Disclosure of Your Personal Data
              </Text>
              <Text style={styles.Txt987}>
                Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet
                bibendum enim facilisis gravida neque. Nibh tellus molestie nunc
                non blandit massa. Quam pellentesque nec nam aliquam sem et
                tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit
                amet risus. Nunc consequat interdum varius sit amet. Eget magna
                fermentum iaculis eu non diam phasellus vestibulum. Pulvinar
                pellentesque habitant morbi tristique senectus et. Lorem donec
                massa sapien faucibus et molestie. Massa tempor nec feugiat nisl
                pretium fusce id. Lacinia at quis risus sed vulputate odio.
                Integer vitae justo eget magna fermentum iaculis. Eget gravida
                cum sociis natoque penatibus et magnis.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  PrivacyPolicies: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 1)",
    // width: 428,
    // height: 926,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 27,
    paddingLeft: 23,
    paddingRight: 23,
    // width: 428,
    // height: 882,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: 380,
    // height: 707,
  },
  Txt215: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 24,
    color: "rgba(33,33,33,1)",
    marginRight: 130,
    // width: 500,
    marginBottom: 20,
  },
  Txt987: {
    fontSize: 16,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "black",
    // width: 381,
    marginBottom: 20,
  },

})