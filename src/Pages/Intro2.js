import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';

export default function Intro2({navigation}) {
  const goNext = () => {
    navigation.navigate('Intro3');
  };
  return (
    <View style={styles.Container}>
      <Image style={styles.BrandLogo} source={GetImage.introImg2} />
      <View style={styles.contentTxt}>
        <Text style={styles.heading}>Info Within Reach</Text>
        <Text style={styles.content}>
          Get full monitor of transport schedule & plan your destination
        </Text>
      </View>
      <TouchableOpacity style={styles.Button} onPress={goNext}>
        <Text style={styles.btnTxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 80,
    backgroundColor: GetColors.white,
    width: '100%',
    height: '100%',
  },
  BrandLogo: {
    width: '100%',
  },
  contentTxt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    flexWrap: 'wrap',
    width: '100%',
  },

  heading: {
    fontSize: 24,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '700',
    lineHeight: 29,
    color: GetColors.black,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '400',
    letterSpacing: 0.2,
    color: GetColors.black,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    width: '80%',
    marginHorizontal: '10%',
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: GetColors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
