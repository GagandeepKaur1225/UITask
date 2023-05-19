import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  buttonStyle: {
    width: widthPercentageToDP('60%'),
    top: heightPercentageToDP('35%'),
    height: heightPercentageToDP('6%'),
    left: widthPercentageToDP('20%'),
    // borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  googleLogo: {
    height: '90%',
    width: '20%',
  },
  buttonText: {
    color: '#87CEEB',
    fontWeight: '900',
  },
});
