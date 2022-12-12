import React from "react"
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import GetColors from '../../assets/GetColors';

export default function Places() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  return (
    <ScrollView>
      <View style={styles.Address_01}>
        <View style={styles.Group}>
          <View style={styles.AutoLayoutVertical3}>
            {/* <View style={styles.AutoLayoutVertical2}> */}
              <View style={styles.AutoLayoutVertical1}>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View>
                      <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Home</Text>
                      <Text style={styles.Txt979}>
                        364 Stillwater Ave. Attleboro, MA 02703
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.IconlyBoldEdit}
                    source={require('../../assets/Profile/pencil.png')}
                  />
                </View>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View>
                      <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Office</Text>
                      <Text style={styles.Txt979}>
                        73 Virginia Rd. Cuyahoga Falls, OH 44221
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.IconlyBoldEdit}
                    source={require('../../assets/Profile/pencil.png')}
                  />
                </View>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View>
                      <RadioButton
                        value="three"
                        status={checked === 'three' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('three')}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Mall Plaza</Text>
                      <Text style={styles.Txt979}>
                        55 Summerhouse Dr. Apopka, FL 32703
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.IconlyBoldEdit}
                    source={require('../../assets/Profile/pencil.png')}
                  />
                </View>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View>
                      <RadioButton
                        value="four"
                        status={checked === 'four' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('four')}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Grand City Park</Text>
                      <Text style={styles.Txt979}>
                        26 State St. Daphne, AL 36526
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.IconlyBoldEdit}
                    source={require('../../assets/Profile/pencil.png')}
                  />
                </View>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View>
                      <RadioButton
                        value="five"
                        status={checked === 'five' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('five')}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Town Square</Text>
                      <Text style={styles.Txt979}>
                        20 Applegate St. Hoboken, NJ 07030
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.IconlyBoldEdit}
                    source={require('../../assets/Profile/pencil.png')}
                  />
                </View>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList2
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View>
                      <RadioButton
                        value="six"
                        status={checked === 'six' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('six')}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Bank</Text>
                      <Text style={styles.Txt979}>
                        917 W. Pine Street Easton, PA 18042
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={styles.IconlyBoldEdit}
                    source={require('../../assets/Profile/pencil.png')}
                  />
                </View>
              </View>
            {/* </View> */}
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Addressnew")}>
        <Text style={styles.btnTxt}>Add new</Text>
      </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Address_01: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: '100%',
    height: '100%',
  },
  Group: {
    display: "flex",
    flexDirection: "column",
  },
  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 43,
    paddingBottom: 47,
    paddingLeft: 23,
    paddingRight: 23,
    height: 600,
    width: 428,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // width: 380,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // width: 380,
  },
  CategoryLocationEditThemeLightComponentLocationList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    // width: 380,
  },
  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
    // width: 344,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    // width: 300,
  },
  Txt363: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 301,
    marginBottom: 6,
  },
  Txt979: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(97,97,97,1)",
    width: 301,
  },

  IconlyBoldEdit: {
    width: 24,
    height: 24,
  },

  CategoryLocationEditThemeLightComponentLocationList1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
    width: 380,
  },
  CategoryLocationEditThemeLightComponentLocationList2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // width: 380,
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
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
})
