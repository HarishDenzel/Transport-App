import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FQA from '../Pages/FQA';
import Contact from '../Pages/Contact';
import Report from '../Pages/Report';
const Tab = createMaterialTopTabNavigator();

export default function MaterialTopTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="FQA" component={FQA} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="REPORT" component={Report} />
      </Tab.Navigator>
  );
}