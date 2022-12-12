import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favourite from './Favourite';
import Complete from './Complete';

const Tab = createMaterialTopTabNavigator();

export default function Trips() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Complete" component={Complete} />
      </Tab.Navigator>
  );
}