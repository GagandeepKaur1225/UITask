import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ImageBackground } from 'react-native';
import { Images } from '../../shared/Images';
import { changeLogin } from '../../store/welcome/index';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const Profile = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const objectInfo = route.params;
  const dataLogged = useSelector(data => data.welcome.loggedUser);
  useEffect(() => {
    GoogleSignin.configure();
    console.log('inn use effect');
  });

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('LOGGED OUT');
      dispatch(changeLogin());
      navigation.goBack(); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  console.log(objectInfo, 'objectInfo is');
  return (
    <>
      <ImageBackground source={Images.backProfile} style={{ flex: 1 }}>
        <View style={style.mainView}>
          <Text style={style.welcomeText}>Welcome {dataLogged} !!</Text>
          <TouchableOpacity
            style={style.logOut}
            onPress={() => signOut()}
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 10,
              right: 20,
            }}
          >
            <Text style={style.buttonText}>Sign OUT</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity
            style={{ left: widthPercentageToDP('5%') }}
            hitSlop={{
              top: 5,
              left: 20,
              bottom: 10,
              right: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text>BACK</Text>
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </>
  );
};

export default Profile;
