import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addEmail, addUser } from '../../store/welcome';
import notifee, { EventType } from '@notifee/react-native';

import { Images } from '../../shared/Images';
import PushNotification from 'react-native-push-notification';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [clear, setClear] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure();
    console.log('inn use effect');
  });
  useEffect(() => {
    if (clear) {
      PushNotification.clearLocalNotification('tag', 123);
    }
  }, [clear]);
  async function getInitialNotificationsDevice() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        'Notification caused application to open',
        initialNotification.notification,
      );
      console.log(
        'Press action used to open the app',
        initialNotification.pressAction,
      );
    }
  }
  useEffect(() => {
    getInitialNotificationsDevice();
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('USER DISMISSED NOTIFICATION');
          break;
        case EventType.PRESS:
          console.log('user pressed the notification');
          break;
      }
    });
  }, []);
  async function onDisplayNotification() {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'here is the notification',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
    await notifee.displayNotification({
      id: '123',
      title: 'Updated Notification Title',
      body: 'Updated main body content of the notification',
      android: {
        channelId,
      },
    });
  }

  const sendNotifications = () => {
    PushNotification.localNotification({
      channelId: 'Notification',
      id: 123,
      autoCancel: true,
      vibration: 300,
      actions: ['ReplyInput'],
      message: 'I am notification',
      reply_placeholder_text: 'Write your response...', // (required)
      reply_button_text: 'Reply',
    });
    setClear(true);
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'user info required is');
      navigation.navigate('Profile', { name: userInfo.user.givenName });
      dispatch(addUser(userInfo.user.givenName));
      dispatch(addEmail(userInfo.user.email));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('LOGGED OUT'); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={style.buttonStyle}
          onPress={() => signIn()}
          hitSlop={{
            top: 5,
            left: 20,
            bottom: 10,
            right: 20,
          }}
        >
          <Image
            source={Images.logoGoogle}
            style={style.googleLogo}
            resizeMode="contain"
          />
          <Text style={style.buttonText}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={style.sendNotification}
          onPress={() => onDisplayNotification()}
          hitSlop={{
            top: 5,
            left: 20,
            bottom: 10,
            right: 20,
          }}
        >
          <Text style={style.buttonText}>Send notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
