import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Trip() {
  const Intro2 = () => {};
  return (
    <ScrollView>
      <View style={styles.Profile}>
        <Text style={styles.Title}>Hi, I'm a Trip Page</Text>
        <TouchableOpacity onPress={Intro2} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Profile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 926,
  },
  Title: {
    color: 'red',
  }
});
