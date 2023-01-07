import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native';
import GetImage from '../../assets/GetImage';
import NotificationList from '../../Components/Notofication/NotificationList';
import BottomModal from '../../Components/BottomModal';
import { icon } from '../../assets/icons';

export default function NotificationScreen(props) {
  const height = Dimensions.get("screen").height;
  const navigation = useNavigation();
  const [optionModal, setOptionModal] = useState(false)
  const data = [
    {
      mode: "latest",
      id: 1,
      head: "30% Special Discount!",
      subhead:"Special promotion only valid today",
      time: "just Now",
      img: GetImage.Notifi2,
    },
    {
      mode: "latest",
      id: 2,
      head: "Top Up E-Wallet Successful!",
      subhead: "You have topup up your e-wallet",
      time: "2 minutes ago",
      img: GetImage.Notifi1,
    },
    {
      mode: "latest",
      id: 3,
      head: "3000 points",
      subhead: "Get points on the first install",
      time: "2 minutes ago",
      img: GetImage.newspaper,
    },
    {
      mode: "today",
      id: 4,
      head: "New Feature!",
      subhead: "You can track drivers in real time",
      time: "just Now",
      img: GetImage.newspaper,
    },
    {
      mode: "today",
      id: 5,
      head: "Vote for new Prime Minister!",
      subhead: "Ellection is coming",
      time: "8 Hours ago",
      img: GetImage.newspaper,
    },
    {
      mode: "today",
      id: 1,
      head: "30% Special Discount!",
      subhead: "Special promotion only valid today",
      time: "5 hours ago",
      img: GetImage.Notifi2,
    },
    {
      mode: "older",
      id: 2,
      head: "Top Up E-Wallet Successful!",
      subhead: "You have topup up your e-wallet",
      time: "2 days ago",
      img: GetImage.Notifi1,
    },
    {
      mode: "older",
      id: 3,
      head: "3000 points",
      subhead: "Get points on the first install",
      time: "3 days ago",
      img: GetImage.newspaper,
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#E5E5E5",paddingLeft:5 }}>
      <Header
        {...props}
        righticon={true}
        onPress={() => setOptionModal(!optionModal)}
        title={"Notification"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 0.1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.2,
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
                color: "black",
              }}
              onPress={() => alert("hi")}
            >
              Latest
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.6,
                fontFamily: "Urbanist, sans-serif",
                color: "#0F437B",fontWeight:'500',
              }}
            >
              View All
            </Text>
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View key={index} style={{ flex: 1 }}>
                {item.mode == "latest" ? (
                  <NotificationList
                    Head={item.head}
                    onPress={() => {item.subhead.includes('Special promotion')?navigation.navigate("NotificationView"):item.subhead.includes('You have')?navigation.navigate("NotificationPayment"):item.subhead.includes('Get points')?navigation.navigate("NotificationGeneral"):null}}
                    SubHead={item.subhead}
                    time={item.time}
                    img={item.img}
                    isRead={index == 1 || index == 2 ? true : false}
                  />
                ) : null}
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={{ height: (height / 100) * 2 }} />
          <View
            style={{
              flex: 0.1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.2,
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
                color: "black",
              }}
              onPress={() => alert("hi")}
            >
              {"Today"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.6,
                fontFamily: "Urbanist, sans-serif",
                color: "#0F437B",fontWeight:'500',
              }}
            >
              View All
            </Text>
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View key={index} style={{ flex: 1 }}>
                {item.mode == "today" ? (
                  <NotificationList
                    Head={item.head}
                    onPress={() => {item.subhead.includes('Special promotion')?navigation.navigate("NotificationView"):item.subhead.includes('You have')?navigation.navigate("NotificationPayment"):item.subhead.includes('Get points')?navigation.navigate("NotificationGeneral"):null}}
                    SubHead={item.subhead}
                    time={item.time}
                    img={item.img}
                    isRead={index == 1 || index == 2 ? true : false}
                  />
                ) : null}
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
                    <View style={{ height: (height / 100) * 2 }} />

          <View
            style={{
              flex: 0.1,
              flexDirection: "row",
              justifyContent: "space-between",
              //top: (height / 100) * 2,
            }}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.2,
                fontFamily: "Urbanist, sans-serif",
                fontWeight: "700",
                color: "black",
              }}
              onPress={() => alert("hi")}
            >
              {"Older"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.8,
                fontFamily: "Urbanist, sans-serif",
                color: "#0F437B",
              }}
            >
              View All
            </Text>
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View key={index} style={{ flex: 1 }}>
                {item.mode == "older" ? (
                  <NotificationList
                    Head={item.head}
                    onPress={() => {item.subhead.includes('Special promotion')?navigation.navigate("NotificationView"):item.subhead.includes('You have')?navigation.navigate("NotificationPayment"):item.subhead.includes('Get points')?navigation.navigate("NotificationGeneral"):null}}
                    SubHead={item.subhead}
                    time={item.time}
                    img={item.img}
                    isRead={index == 1 || index == 2 ? true : false}
                  />
                ) : null}
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </Header>
      <BottomModal
        container={{
          backgroundColor: "rgba(0,9,16,0.7)",
        }}
        visible={optionModal}
      >
        <TouchableOpacity
          onPress={() => setOptionModal(!optionModal)}
          style={{ flex: 0.7 }}
        ></TouchableOpacity>
        <View
          style={{
            flex: 0.3,
            backgroundColor: "#fff",
            borderTopLeftRadius: 25,
            borderTopEndRadius: 25,
          
          }}
        >
        <Image source={icon.pull} style={{height:20,width:25,resizeMode:'contain',alignSelf:'center'}}></Image>
          <View style={{ flex: 1, margin: 20 ,paddingLeft:2}}>
            <Text
              onPress={() => setOptionModal(!optionModal)}
              style={{
                paddingTop: 1,
                fontSize: (height / 100) * 1.8,
                fontFamily: "Urbanist,sans-serif",
                color: "#0F437B",
                padding:5
              }}
            >
              {"Mark all as read"}
            </Text>
            <View
              style={{
                flex: 0.9,
                borderTopWidth: 1,
                justifyContent: "space-around",
              
              
                borderColor:'#EEEEEE',
                borderBottomWidth: 1,
              
                
              }}
            >
              <Text
                onPress={() => setOptionModal(!optionModal)}
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist,sans-serif",
                  color: "#000",
                 
                  padding:5
                }}
              >
                {"Delete notification (Older > 30 Days)"}
              </Text>
              <Text
                onPress={() => setOptionModal(!optionModal)}
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist,sans-serif",
                  color: "#000",
                 padding:5

                }}
              >
                {"Delete notification (Older > 60 Days)"}
              </Text>
              <Text
                onPress={() => setOptionModal(!optionModal)}
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist,sans-serif",
                  color: "#000",
                padding:5

                }}
              >
                {"Delete notification (Older >90 Days)"}
              </Text>
              <Text
                onPress={() => setOptionModal(!optionModal)}
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist,sans-serif",
                  color: "#000",
                paddingBottom:5,
                 
                  paddingLeft:5
                }}
              >
                {"Delete all"}
              </Text>
            </View>
          </View>
        </View>
      </BottomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  list_font: {
    fontFamily: "Urbanist, sans-serif",
    color: "#616161",
    fontWeight: 'bold',
  }
})