import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import ToggleSwitch from "toggle-switch-react-native";

const url0 = require("");
const url1 = require("../assets/Notification/sound.png");
const url2 = require("../assets/Notification/sound1.png");

const Notification = () => {
  
  const [state, setState] = useState({
    isOnBlueToggleSwitch: false,
    isOnBlueToggleSwitch1: false,
    isOnBlueToggleSwitch2: false,
    generalModeVal: 0,
    generalUrl: "",
  });

  const onToggle = (isOn) => {
    console.log("Changed to " + isOn);
  };

  const generalMode = (mode) => {
    if (mode == 0) {
      generalUrl = url1;
      generalModeVal.setState(1);
    } else if (mode == 1) {
      generalUrl = url2;
      generalModeVal.setState(2);
    } else {
      generalUrl = url0;
      generalModeVal.setState(0);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.Notification}>
        <View style={styles.Group0}>
          <View style={styles.AutoLayoutVertical2}>
            <View style={styles.AutoLayoutVertical1}>
              <View style={styles.AutoLayoutVertical}>
                <View style={styles.AutoLayoutHorizontal}>
                  <Text style={styles.Txt8109}>General</Text>
                  <ToggleSwitch
                    onColor="#0F437B"
                    isOn={this.state.isOnBlueToggleSwitch}
                    onToggle={(isOnBlueToggleSwitch) => {
                      this.setState({ isOnBlueToggleSwitch });
                      this.onToggle(isOnBlueToggleSwitch);
                    }}
                  />
                  <TouchableOpacity onPress={generalMode(state.generalModeVal)}>
                    {state.generalModeVal == 1 ? (
                      <Image style={styles._speakerIcon} source={generalUrl} />
                    ) : (
                      <Image style={styles._speakerIcon} source={generalUrl} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.AutoLayoutHorizontal}>
                  <Text style={styles.Txt8109}>Special Offers & Promo</Text>
                  <ToggleSwitch
                    onColor="#0F437B"
                    isOn={this.state.isOnBlueToggleSwitch1}
                    onToggle={(isOnBlueToggleSwitch1) => {
                      this.setState({ isOnBlueToggleSwitch1 });
                      this.onToggle(isOnBlueToggleSwitch1);
                    }}
                  />
                  <Image style={styles._speakerIcon} source={mode} />
                </View>
                <View style={styles.AutoLayoutHorizontal1}>
                  <Text style={styles.Txt81091}>Payment & Receipt</Text>
                  <ToggleSwitch
                    onColor="#0F437B"
                    isOn={this.state.isOnBlueToggleSwitch2}
                    onToggle={(isOnBlueToggleSwitch2) => {
                      this.setState({ isOnBlueToggleSwitch2 });
                      this.onToggle(isOnBlueToggleSwitch2);
                    }}
                  />
                  <Image
                    style={styles._speakerIcon1}
                    source={require("../assets/Notification/sound1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Notification: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 589,
    paddingLeft: 0,
    paddingRight: 0,
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
  Txt81091: {
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
    marginLeft: 10,
  },
  _speakerIcon1: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
});

export default Notification;
