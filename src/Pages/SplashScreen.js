import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';
import Helper from '../Components/utils/Helper';

export default function SplashScreen({navigation}) {
  const [seconds, setSeconds] = useState(6);
  var dot='.'
  useEffect(() => {
    if (seconds < 10) {
      setTimeout(() => setSeconds(seconds + 1), 1000);
    } else {
      checkData();
    }
  });
  const checkData = () => {
    Helper.getData('userdata').then(userdata => {
      if (!userdata) {
        navigation.navigate("Intro1");
      } else {
        navigation.navigate("BottomTab");
      }
    });
  };
  return (
    <View style={styles.Container}>
      <Image style={styles.BrandLogo} source={GetImage.mainLogo} />
      <Text style={styles.lodingTxt}>Loading{dot.repeat(seconds-5)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 200,
    paddingBottom: 80,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: GetColors.FoundationBlue_500,
    width: '100%',
    height: '100%',
  },
  BrandLogo: {
    width: 136,
    height: 136,
  },
  lodingTxt: {
    color: '#fff',
    fontSize: 20,
  },
});
