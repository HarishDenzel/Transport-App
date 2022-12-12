import React, { useState } from "react"
import { StyleSheet, Image, Text, View, Switch } from "react-native"

export default function Notification() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState1 => !previousState1);
  const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
  return (
    <View style={styles.Notification}>
      <View style={styles.Group0}>
        <View style={styles.AutoLayoutVertical2}>
          <View style={styles.AutoLayoutVertical1}>
            <View style={styles.AutoLayoutVertical}>
              <View style={styles.AutoLayoutHorizontal}>
                <Text style={styles.Txt8109}>General</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "blue" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Image
                  style={styles._speakerIcon}
                  source={require('../assets/Notification/sound.png')}
                />
              </View>
              <View style={styles.AutoLayoutHorizontal}>
                <Text style={styles.Txt8109}>Special Offers & Promo</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled1 ? "blue" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
                <Image
                  style={styles._speakerIcon}
                  source={require('../assets/Notification/sound1.png')}
                />
              </View>
              <View style={styles.AutoLayoutHorizontal1}>
                <Text style={styles.Txt8109}>Payment & Receipt</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled2 ? "blue" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
                <Image
                  style={styles._speakerIcon}
                  source={require('../assets/Notification/sound1.png')}
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
  Notification: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 589,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 826,
  },
  Group0: {
    display: "flex",
    flexDirection: "column",
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
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 31,
    paddingBottom: 31,
    paddingLeft: 23,
    paddingRight: 23,
    width: 428,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 40,
    width: 380,
  },
  Txt8109: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "rgba(66,66,66,1)",
    width: 269,
    marginRight: 20,
  },
  _speakerIcon: {
    width: 28,
    height: 28,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
})