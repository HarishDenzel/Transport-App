import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native';
import GetImage from '../../assets/GetImage';
import NotificationList from '../../Components/Notofication/NotificationList';
import BottomModal from '../../Components/BottomModal';
export default function NotificationScreen(props) {
  const height = Dimensions.get("screen").height;
  const navigation = useNavigation();
  const [optionModal, setOptionModal] = useState(false)
  const data = [
    {
      id: 1,
      head: '30% Special Discount!',
      subhead: 'Special promotion only valid today',
      time: 'just Now',
      img: GetImage.Notifi2
    },
    {
      id: 2,
      head: 'Top Up E-Wallet Successful!',
      subhead: 'You have topup up your e-wallet',
      time: '2 minutes ago',
      img: GetImage.Notifi1
    },
    {
      id: 3,
      head: 'Top Up E-Wallet Successful!',
      subhead: 'You have topup up your e-wallet',
      time: '10 minutes ago',
      img: GetImage.Notifi1
    },


  ]
  return (
    <View style={{ flex: 1,backgroundColor:'#FFFFFF' }}>
      <Header
        {...props}
        righticon={true}
        onPress={() => setOptionModal(!optionModal)}
        title={"Notification"} >
          <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: (height / 100) * 2.2,
              fontFamily: "Urbanist_semibold",
              fontWeight: 'bold',
              color: "#616161",
            }}
            onPress={() => alert("hi")}>Latest</Text>
          <Text style={{
            fontSize: (height / 100) * 1.8,
            fontFamily: "Urbanist_semibold",
            color: "#0F437B",
          }}>View All</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View key={index} style={{ flex: 1 }}>

              <NotificationList
                Head={item.head}
                onPress={()=>navigation.navigate("NotificationView")}
                SubHead={item.subhead}
                time={item.time}
                img={item.img}
                isRead = {index == 1  || index == 2 ? true : false}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={{ height: height / 100 * 2 }} />
        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: (height / 100) * 2.2,
              fontFamily: "Urbanist_semibold",
              fontWeight: 'bold',
              color: "#616161",
            }}
            onPress={() => alert("hi")}>{"Today"}</Text>
          <Text style={{
            fontSize: (height / 100) * 1.8,
            fontFamily: "Urbanist_semibold",
            color: "#0F437B",
          }}>View All</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View key={index} style={{ flex: 1 }}>

              <NotificationList
              onPress={()=>navigation.navigate("NotificationView")}
                Head={item.head}

                SubHead={item.subhead}
                time={item.time}
                img={item.img}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', top: height / 100 * 2 }}>
          <Text
            style={{
              fontSize: (height / 100) * 2.2,
              fontFamily: "Urbanist_semibold",
              fontWeight: 'bold',
              color: "#616161",
            }}
            onPress={() => alert("hi")}>{"Older"}</Text>
          <Text style={{
            fontSize: (height / 100) * 1.8,
            fontFamily: "Urbanist_semibold",
            color: "#0F437B",
          }}>View All</Text>
        </View>
        <View style={{ height: height / 100 * 5 }} />

        {/* modal */}
        </ScrollView>

      </Header>
      <BottomModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",

        }}
        visible={optionModal}
      >
        <TouchableOpacity onPress={() => setOptionModal(!optionModal)} style={{ flex: 0.7 }}>

        </TouchableOpacity>
        <View style={{ flex: 0.3, backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopEndRadius: 25 }}>
          <View style={{ flex: 1, margin: 20, }}>
            <Text onPress={() => setOptionModal(!optionModal)} style={{
              paddingTop: 10, fontSize: (height / 100) * 1.8,
              fontFamily: "Urbanist_semibold",
              color: "#0F437B",
            }}>{"Mark all as read"}</Text>
            <View style={{ flex: 0.7, borderTopWidth: 0.2, justifyContent: 'space-around', top: 10, borderBottomWidth: 0.2, paddingTop: 5, paddingBottom: 5 }}>
              <Text onPress={() => setOptionModal(!optionModal)} style={{
                fontSize: (height / 100) * 1.8,
                fontFamily: "Urbanist_semibold",
                color: "#000",
              }} >{"Delete notification (Older > 30 Days)"}</Text>
              <Text onPress={() => setOptionModal(!optionModal)} style={{
                fontSize: (height / 100) * 1.8,
                fontFamily: "Urbanist_semibold",
                color: "#000",
              }}>{"Delete notification (Older > 60 Days)"}</Text>
              <Text
                onPress={() => setOptionModal(!optionModal)}
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist_semibold",
                  color: "#000",
                }}>{"Delete notification (Older >90 Days)"}</Text>
              <Text
                onPress={() => setOptionModal(!optionModal)}
                style={{
                  fontSize: (height / 100) * 1.8,
                  fontFamily: "Urbanist_semibold",
                  color: "#000",
                }}>{"Delete all"}</Text>
            </View>
          </View>
        </View>
      </BottomModal>
    </View>

  )
}

const styles = StyleSheet.create({
  list_font: {
    fontFamily: "Urbanist_semibold",
    color: "#616161",
    fontWeight: 'bold',
  }
})