import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeSaved from './HomeSaved';
import Places from './Places';
import Work
  from './Work';
import Header from '../../Components/Header';
const Tab = createMaterialTopTabNavigator();

export default function SavedDestionation(props) {
  return (
    <Header
      {...props}
      rightIcon={false}
      // isBackground={true}
      title={"Saved Destination"}
    >
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { textTransform: 'capitalize' },tabBarActiveTintColor: '#0F437B',
      }}>
        <Tab.Screen name="Home" component={HomeSaved} />
        <Tab.Screen name="Places" component={Places} />
        <Tab.Screen name="Work" component={Work} />
      </Tab.Navigator>
    </Header>
  );
}
