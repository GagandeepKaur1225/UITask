import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainView: {
    top: heightPercentageToDP('40%'),
    alignSelf: 'center',
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: RFPercentage(4),
  },
  logOut: {
    width: widthPercentageToDP('60%'),
    top: heightPercentageToDP('5%'),
    height: heightPercentageToDP('6%'),
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#87CEEB',
    fontWeight: '900',
  },
});