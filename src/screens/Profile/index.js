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
  const email = useSelector(data => data.welcome.email);
  useEffect(() => {
    GoogleSignin.configure();
    console.log('inn use effect');
  });

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('LOGGED OUT');
      dispatch(changeLogin());
      // navigation.goBack(); // Remember to remove the user from your app's state as well
      navigation.navigate('Welcome');
    } catch (error) {
      console.error(error);
    }
  };

  console.log(objectInfo, 'objectInfo is');
  return (
    <>
      {/* <ImageBackground
        source={require('../../components/imagesAll/subtle-prism.png')}
        style={{ flex: 1 }}
      > */}
      <View style={{ flex: 1, backgroundColor: '#87CEEB' }}>
        <View style={style.mainView}>
          <Text style={style.welcomeText}>Welcome {dataLogged} !!</Text>
          <Text style={{ alignSelf: 'center' }}>{email}</Text>
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
            <Text style={style.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ImageBackground> */}
    </>
  );
};

export default Profile;
