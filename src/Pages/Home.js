import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import GetImage from '../assets/GetImage';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  const [state, setState] = useState({
    isLoading: true,
    latitude: null,
    longitude: null,
  });

  // useEffect(() => {
  //   GetLocation.getCurrentPosition((position) => {
  //       setState({...state, latitude: position.coords.latitude, longitude: position.coords.longitude})
  //     },
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
  //   console.log(this.state)
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.map} source={require('../../assets/map.png')}/> */}
      {/* latitude: this.state.latitude,
      longitude: this.state.longitude, */}
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      />
      <View style={styles.bottom}>
        <View style={styles.AutoLayoutVertical}>
          <View style={styles.PointSection}>
            <View style={styles.tokenBtn}>
              <Image style={styles.Token1} source={GetImage.tokenImg} />
              <Text style={styles.Txt}>7000 Points</Text>
            </View>
            <View style={{width: '10%'}} />
            <View style={styles.walletBtn}>
              <Image style={styles.Wallet1} source={GetImage.walletImg} />
              <Text style={styles.Txt}>$45</Text>
            </View>
          </View>
          <View style={styles.PromoView}>
            <Text style={styles.Txt}>Promos</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.TxtLink}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Group387}>
            <View style={styles.Group778}>
              <View style={styles.Group53}>
                <Text style={styles.Txt631}>
                  Get 50% off on buying a new bike
                </Text>
                <Text style={styles.Txt229}>Promocode: “GET50”</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.Bycicle11}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ds123fj7twa-1400%3A4838?alt=media&token=a53d3baa-fc74-4106-8dc5-7b8f99fb1a3a',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
    height: '50%',
    width: '100%',
    position: 'relative',
  },
  AutoLayoutVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: 11,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '50%',
  },
  PointSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  tokenBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    width: '40%',
    backgroundColor: '#E5E5E5',
  },
  Token1: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  Txt: {
    fontSize: 14,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#000000',
  },
  walletBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  Wallet1: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  PromoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Group51: {
    marginRight: 'auto',
    width: 66,
    height: 24,
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },
  TxtLink: {
    fontSize: 14,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.2,
    color: 'rgba(97,97,97,1)',
    textAlign: 'center',
    justifyContent: 'center',
  },

  Group778: {
    paddingTop: 20,
    paddingBottom: 18,
    paddingLeft: 28,
    paddingRight: 185,
    borderRadius: 14,
    backgroundColor: 'rgba(74,175,87,1)',
    width: 353,
    height: 112,
  },
  Group53: {
    display: 'flex',
    flexDirection: 'column',
  },
  Txt631: {
    fontSize: 14,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.2,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 11,
  },
  Txt229: {
    fontSize: 14,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.2,
    color: 'rgba(255,235,79,1)',
  },

  Bycicle11: {
    position: 'absolute',
    top: 192,
    left: 389,
    width: 148,
    height: 148,
  },
});

export default Home;
