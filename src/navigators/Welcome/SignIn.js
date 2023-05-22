import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { addEmail, addUser } from '../../store/welcome';

import { Images } from '../../shared/Images';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure();
    console.log('inn use effect');
  });

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
    <View>
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
    </View>
  );
};

export default SignIn;
