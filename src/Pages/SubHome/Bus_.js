import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  FileList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../../Components/Header";

const Tab = createMaterialTopTabNavigator();

const listTab = [
  {
    tabName: "Mon",
  },
  {
    tabName: "Tue",
  },
  {
    tabName: "Wed",
  },
  {
    tabName: "Thu",
  },
  {
    tabName: "Fri",
  },
  {
    tabName: "Sat",
  },
  {
    tabName: "Sun",
  },
];

const data = [
  {
    name: "Vivek",
    tabName: "Mon",
  },
  {
    name: "Chandru",
    tabName: "Tue",
  },
  {
    name: "Abhi",
    tabName: "Wed",
  },
  {
    name: "Parthi",
    tabName: "Thu",
  },
  {
    name: "Vivek",
    tabName: "Fri",
  },
  {
    name: "Vivek",
    tabName: "Sat",
  },
  {
    name: "Vivek",
    tabName: "Sun",
  },
];

const HomeAction = (props) => {
  const navigation = useNavigation();
  const [tabName, setTabName] = useState("Mon");
  const [dataList, setDataList] = useState(data);

  const setTab = (tabName) => {
    setTabName(tabName);
  };

  const renderItem = ({ items, index }) => {
    return (
      <View key={index} style={styles.itmeStyles}>
        <Text>9:30</Text>
      </View>
    );
  };

  return (
    <Header
      {...props}
      rightIcon={false}
      // isBackground={true}
      title={"Available Routes"}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal={true} style={styles.tabList}>
          {listTab.map((item) => (
            <TouchableOpacity
              style={[
                styles.btnTab,
                tabName === item.tabName && styles.btnTabActive,
              ]}
              onPress={() => setTab(item.tabName)}
            >
              <Text
                style={[
                  styles.textTab,
                  tabName === item.tabName && styles.textTabActive,
                ]}
              >
                {item.tabName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* <FileList
          data={dataList}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
        /> */}
      </SafeAreaView>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabList: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 10,
  },
  btnTab: {
    width: Dimensions.get("window").width / 4.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 20,
    padding: 8,
    height: 40,
    borderColor: "#eee",
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#C62453",
  },
  textTabActive: {
    color: "#fff",
  },
  itmeStyles: {
    margin: 4,
    backgroundColor: "#ddd",
  },
});

export default HomeAction;
