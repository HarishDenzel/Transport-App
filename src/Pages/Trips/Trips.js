import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favourite from './Favourite';
import Complete from './Complete';
import Header from '../../Components/Header';

const Tab = createMaterialTopTabNavigator();

export default function Trips(props) {
  return (
    <Header
      {...props}
      rightIcon={false}
      title={"Trip Planner"}
    >
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { textTransform: 'capitalize' },tabBarActiveTintColor: '#0F437B',
      }}>
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Complete" component={Complete} />

      </Tab.Navigator>
    </Header>
  );
}