/**
 * @format
 */

import { Alert, AppRegistry } from 'react-native';
import PushNotification, { Importance } from 'react-native-push-notification';

import App from './src/App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { useState } from 'react';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
const checkToken = async () => {
  const token = await messaging().getToken();
  if (token) {
    console.log(token, 'token is');
  } else {
    console.log('unable to get token');
    Alert.alert('Something went wrong while creating token');
  }
};
checkToken();

PushNotification.createChannel(
  {
    channelId: 'Notification', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    // playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    if (notification.action === 'ReplyInput') {
      PushNotification.clearLocalNotification(notification.id);
      console.log('texto', notification.reply_text); // this will contain the inline reply text.
    }
    return true;
  },
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  popInitialNotification: true,

  requestPermissions: true,
  onRemoteFetch: function (notification) {
    console.log('on remote fetch called');
    console.log('notification', notification);
  },
});
AppRegistry.registerComponent(appName, () => App);
