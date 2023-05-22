import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  mainView: {
    top: heightPercentageToDP('20%'),
    alignSelf: 'center',
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: RFPercentage(4),
  },
  logOut: {
    width: widthPercentageToDP('60%'),
    top: heightPercentageToDP('5%'),
    height: heightPercentageToDP('7%'),
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
    fontSize: RFValue(20),
  },
  uploadMain: {
    alignSelf: 'center',
    // flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('40%'),
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonView: {
    backgroundColor: '#fff',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 6,
    width: '50%',
    alignSelf: 'center',
  },
});
