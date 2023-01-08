import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GetImage from "../assets/GetImage";
import { useNavigation } from "@react-navigation/native";


export default function GetLocation(props) {
    const{onAddressSelected,onPress,label,currentLocation}=props
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  const navigation=useNavigation()
  return (
    <View
      style={{ height: text == "" ? (height / 100) * 15 : (height / 100) * 50 }}
    >
      <GooglePlacesAutocomplete
        keepResultsAfterBlur={true}
        placeholder="Search for an address"
      
        fetchDetails={true}
        eturnKeyType={"search"}
       
        ref={(ref) => {
          ref?.setAddressText("123 myDefault Street, mycity");
        }}
        query={{
          key: "AIzaSyDTxfALZJJC30L1XXhQs7uvNtjvsNLBLlA",
          language: "en",
          //components: `country:${isDefaultCountry}`,
        }}
        
        styles={{
          description:{color:'#000'},
          textInputContainer: {
            flexDirection: "row",
            width: width - 45,
            height: 40,

           borderRadius: 5,
            backgroundColor: "#fff",
            alignSelf: "center",
            // margin: 13,
            marginVertical: 15,
          
          },

          textInput: {
            height: 40,
            borderWidth: 0.3,
            width: "90%",
            borderRadius: 12,
            backgroundColor: "rgba(203, 211, 223, 0.33)",
            paddingLeft: 40,
            color: "#000",
            
          },
        }}
        //currentLocation={true}
        //currentLocationLabel="Current location"
        numberOfLines={2}
        //getCurrentLocation = {location}
        multiline={true}
        // getAddressText = {(text)=>{
        //   alert(text)
        // }}
        listViewDisplayed={true} 
        isRowScrollable={false}
        disableScroll={true}
        textInputProps={{
          placeholderTextColor:"#000",
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
          value: () => {
            text;
          },
          onChangeText:(text)=>setText(text)
        }}
        onPress={(data, details = null) => {
onPress(data)
        //   console.log("==>AddressData", );
        //   onAddressSelected()
        //   
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=` +
              data.description +
              `&key=` +
              "goole key",
            {
              method: "POST",
            }
          )
            .then((response) => response.json())

            .then((responsejson) => {
              //alert(JSON.stringify(responsejson));
              console.log("==>Address", responsejson);
              console.log(
                "==>SelectedAddress",
                setText(responsejson?.results[0]?.formatted_address)
              );
              console.log(
                "==>SelectedAddress",
                responsejson?.results[0]?.geometry?.location?.lat
              );
              console.log(
                "==>SelectedAddress",
                responsejson?.results[0].geometry?.location?.lng
              );
              let SelectAddressValue = {};
              SelectAddressValue.address =
                responsejson?.results[0]?.formatted_address;
              SelectAddressValue.lat =
                responsejson?.results[0]?.geometry?.location?.lat;
              SelectAddressValue.lng =
                responsejson?.results[0].geometry?.location?.lng;
              SelectAddressValue.isDefaultCountry = isDefaultCountry;
          
              OnBackPress();
            });
        }}
        // renderRightButton={() => (
        //   <Image
        //     // onPress={() => {
        //     //   alert(locationStatus);
        //     // }}
        //     style={{width: 23, height: 23, right: 18, top: 8}}
        //     source={require('../../../src/Assets/currentloc.png')}
        //   />
        // )}
        renderLeftButton={() => (
          <View style={{ position: "absolute" }}>
            <TouchableOpacity style={{ paddingTop: 12, paddingLeft: 10 }}>
              <Image
                source={GetImage.locaionSearch}
                style={{
                  height: (height / 100) * 2,
                  width: (height / 100) * 2,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        )}
       
      />

      <View
        style={{
          height: (height / 100) * 5,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       {currentLocation? <><View
          style={{
            height: (height / 100) * 6,
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#EEEEEE",
          }}
        >
          <Image
            source={GetImage.from}
            style={{
              height: (height / 100) * 2,
              width: (height / 100) * 2,
              resizeMode: "contain",

              left: 5,
            }} />
          <Text
            style={{
              fontSize: (height / 100) * 2,
              fontFamily: "Urbanist_semibold",
              left: 15,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            {label}
          </Text>

        </View><Text
          style={{
            alignSelf:'flex-start',
            paddingTop:8,
           
            paddingLeft:23,
            fontSize: 14,
            fontFamily: "Urbanist_semibold",
            fontWeight: "600",
            color: "#0F437B",
            fontFamily: "Urbanist_regular",
            
                  }}
        >
            {text.length == 0 ?'':'See results for Larkin Stadium'}
          </Text></>
        :<View
          style={{
            height: (height / 100) * 6,
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
           
            
          }}
        ><Text
         
         style={{
          fontSize: (height / 100) * 1.5,
          fontFamily: "Urbanist_semibold",
          fontWeight: "bold",
          color:'#0F437B'
        }}>
        
        {text.length == 0 ?'':'See results for Larkin Stadium'}

        </Text></View>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
