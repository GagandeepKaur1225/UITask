import { Alert, SafeAreaView, StatusBar, Text } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, { useEffect } from 'react';

import Home from '../screens/Home';
import MainNavigator from './Main';
import Profile from '../screens/Profile';
import PushNotification from 'react-native-push-notification';
import SignIn from './Welcome/SignIn';
import { Startup } from '../screens';
import { View } from 'react-native';
import Welcome from './Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import { useFlipper } from '@react-navigation/devtools';
import { useSelector } from 'react-redux';
import { useTheme } from '../hooks';

const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
  useEffect(() => {
    checkToken();
    messaging().setBackgroundMessageHandler(onMessageRecieved);
    messaging().onMessage(onMessageRecieved);
    messaging().onNotificationOpenedApp(remoteMessage => {
      PushNotification.localNotification({
        channelId: 'Notification',
        vibration: 300,
        actions: ['ReplyInput'],
        message: remoteMessage.notification,
        reply_placeholder_text: 'Write your response...', // (required)
        reply_button_text: 'Reply',
      });
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          Alert.alert(remoteMessage.notification);
        }
      });
  }, []);

  async function onMessageRecieved(message) {
    console.log('we recieved message', message);
    PushNotification.localNotification({
      channelId: 'Notification',
      vibration: 300,
      actions: ['ReplyInput'],
      message: message.notification,
      reply_placeholder_text: 'Write your response...', // (required)
      reply_button_text: 'Reply',
    });
  }

  const checkToken = async () => {
    const token = await messaging().getToken();
    if (token) {
      console.log(token, 'token is');
      // Alert.alert(token);
    } else {
      console.log('unable to get token');
      Alert.alert('Something went wrong while creating token');
    }
  };

  const dataUser = useSelector(data => data.welcome.welcomeShown);
  console.log(dataUser, 'data required  in application.js is');
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      {dataUser ? (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Welcome" component={Welcome} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Welcome"
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};
export default ApplicationNavigator;
