import * as React from 'react';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import SplashScreen from '../Pages/SplashScreen';
import Intro1 from '../Pages/Intro1';
import Intro2 from '../Pages/Intro2';
import Intro3 from '../Pages/Intro3';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';
import Payment from '../Pages/Payment';
import Security from '../Pages/Security';
import Language from '../Pages/Language';
import Notification from '../Pages/Notification';
import PrivacyPolicies from '../Pages/Privacypolicy';
import Editprofile from '../Pages/Editprofile';
import EditProfile1 from '../Pages/EditProfile1';
import Editsuccess from '../Pages/Editsuccess';
import Helpcenter from '../Pages/Helpcenter';
import FQA from '../Pages/FQA';
import Contact from '../Pages/Contact';
import Report from '../Pages/Report';
import Address from '../Pages/Address';
import Addressnew from '../Pages/Addressnew';
import Addresssuccess from '../Pages/Addresssuccess';
import Singup from '../Pages/Singup';
import Singin from '../Pages/Singin';
import Invite from '../Pages/Invite';
import FirstTimeRegister from '../Pages/FirstTimeReg';
import ForgetPassword from '../Pages/ForgetReset';
import ForgetReset from '../Pages/ForgetReset1';
import ForgetSuccess from '../Pages/ForgetSuccess';
import Security1 from '../Pages/Security1';
import Security2 from '../Pages/Security2';
import PromoCode from '../Pages/PromoCode';
import Favourite from '../Pages/Trips/Favourite';
import Complete from '../Pages/Trips/Complete';
import Trips from '../Pages/Trips/Trips';

import SavedDestionation from '../Pages/SavedDestionation/SavedDestionation';
import HomeSaved from '../Pages/SavedDestionation/HomeSaved';
import Places from '../Pages/SavedDestionation/Places';

import CurrentLocation from '../Pages/SubHome/CurrentLocation';
import Destination from '../Pages/SubHome/Destination';
import Ewallet from '../Pages/wallet/Ewallet';
import cardlist from '../Pages/wallet/cardlist';

import addnewcard from '../Pages/wallet/addnewcard';
import cardDetails from '../Pages/wallet/cardDetails';
import EReceipt from '../Pages/wallet/EReceipt';
import TopupScreen from '../Pages/wallet/TopupScreen';
import NotificationScreen from '../Pages/Notification/NotificationScreen';
import NotificationView from '../Pages/Notification/NotificationView';
import ScanQR from '../Pages/QR/ScanQR';
import routerlist from '../Pages/QR/routerlist';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro1"
          component={Intro1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
           />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          name="PrivacyPolicies"
          component={PrivacyPolicies}
        />
        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
        />
        <Stack.Screen
          name="EditProfile1"
          component={EditProfile1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Editsuccess"
          component={Editsuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Helpcenter"
          component={Helpcenter}
        />
        <Stack.Screen
          name="Helpcenter1"
          component={FQA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Helpcenter2"
          component={Contact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Helpcenter3"
          component={Report}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          name="Security"
          component={Security}
        />
        <Stack.Screen
          name="Language"
          component={Language}
        />
        <Stack.Screen
          name="Addressnew"
          component={Addressnew}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Addresssuccess"
          component={Addresssuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Singup"
          component={Singup}
        />
        <Stack.Screen
          name="Singin"
          component={Singin}
        />
        <Stack.Screen
          name="Invite"
          component={Invite}
        />
        <Stack.Screen
          name="FirstTimeRegister"
          component={FirstTimeRegister}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          name="ForgetReset"
          component={ForgetReset}
        />
        <Stack.Screen
          name="ForgetSuccess"
          component={ForgetSuccess}
        />
        <Stack.Screen
          name="Security1"
          component={Security1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Security2"
          component={Security2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PromoCode"
          component={PromoCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentLocation"
          component={CurrentLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favourite"
          component={Favourite}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="Complete"
          component={Complete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedDestionation"
          component={SavedDestionation}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeSaved"
          component={HomeSaved}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Places"
          component={Places}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="NotificationView"
          component={NotificationView}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Ewallet"
          component={Ewallet}
          options={{ headerShown: false }}
        />
             <Stack.Screen
          name="cardlist"
          component={cardlist}
          options={{ headerShown: false }}
        />
                     <Stack.Screen
          name="addnewcard"
          component={addnewcard}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="cardDetails"
          component={cardDetails}
          options={{ headerShown: false }}
        />
         <Stack.Screen
         
         name="EReceipt"
         component={EReceipt}
           options={{ headerShown: false }}
         />

       <Stack.Screen
        name="TopupScreen"
        component={TopupScreen}
         options={{ headerShown: false }}
      />
           <Stack.Screen
        name="ScanQR"
        component={ScanQR}
         options={{ headerShown: false }}
      />

<Stack.Screen
        name="routerlist"
        component={routerlist}
         options={{ headerShown: false }}
      />


      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
export function handleNavigation(nav) {
  switch (nav.type) {
    case 'push':
      nav.navigation.navigate(nav.page, nav.passProps);
      break;
    case 'setRoot':
      nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] });
      break;
    case 'pop':
      nav.navigation.goBack();
      break;
    case 'popToTop':
      nav.navigation.popToTop();
      break;
  }
}
export default Routes;
