import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';

import { Images } from '../../shared/Images';
import SignIn from '../../navigators/Welcome/SignIn';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const dataLogged = useSelector(data => data.welcome.loggedUser);
  console.log(dataLogged.length);
  useEffect(() => {
    if (dataLogged.length !== 0) {
      navigation.navigate('Profile');
    }
  }, []);
  return (
    <>
      <ImageBackground
        source={Images.backProfile}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View>
          <SignIn />
        </View>
      </ImageBackground>
    </>
  );
};

export default Home;
