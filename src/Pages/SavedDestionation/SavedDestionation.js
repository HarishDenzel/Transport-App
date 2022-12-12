import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeSaved from './HomeSaved';
import Places from './Places';
import Work
 from './Work';
const Tab = createMaterialTopTabNavigator();

export default function SavedDestionation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeSaved} />
        <Tab.Screen name="Places" component={Places} />
        <Tab.Screen name="Work" component={Work} />
      </Tab.Navigator>
  );
}
