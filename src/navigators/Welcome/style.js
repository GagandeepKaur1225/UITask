import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { RFValue } from 'react-native-responsive-fontsize';

export const style = StyleSheet.create({
  imageStyle: {
    width: '90%',
    height: '45%',
    margin: heightPercentageToDP('6%'),
  },
  headerText: {
    color: Platform.OS === 'ios' ? '#1e90ff' : '#87CEEB',
    fontWeight: '700',
  },
  heading: {
    fontSize: 24,
    marginBottom: 3,
    marginTop: 3,
    fontWeight: '700',
  },
  bottomView: {
    flexDirection: 'row',
    width: widthPercentageToDP('85%'),
    justifyContent: 'space-between',
    left: widthPercentageToDP('7%'),
    position: 'absolute',
    bottom: RFValue(60),
    // borderWidth:2
  },
  skip: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: widthPercentageToDP('92%'),
    top: heightPercentageToDP('4%'),
    // borderWidth:2,
    height: heightPercentageToDP('4%'),
  },
  nextButton: {
    borderRadius: 20,
    width: widthPercentageToDP('25%'),
    height: heightPercentageToDP('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#1e90ff' : '#87CEEB',
  },
  nextText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: RFValue(15),
  },
  startButton: {
    borderRadius: 20,
    width: widthPercentageToDP('25%'),
    height: heightPercentageToDP('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
  },
  indicatorFocused: {
    width: 45,
    height: 10,
    borderRadius: 5,
    backgroundColor: Platform.OS === 'ios' ? '#1e90ff' : '#87CEEB',
    marginHorizontal: 5,
  },
  indicatorNormal: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Platform.OS === 'ios' ? '#1e90ff' : '#87CEEB',
    marginHorizontal: 5,
  },
  indicatorStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    width: widthPercentageToDP('42%'),
    top: heightPercentageToDP('46%'),
    height: heightPercentageToDP('6%'),
    left: widthPercentageToDP('33%'),
    // alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  googleLogo: {
    height: '80%',
    width: '22%',
  },
  buttonText: {
    color: '#87CEEB',
    fontWeight: '900',
    fontSize: RFValue(12),
  },
  logOut: {
    width: widthPercentageToDP('60%'),
    top: heightPercentageToDP('45%'),
    height: heightPercentageToDP('6%'),
    left: widthPercentageToDP('20%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  sendNotification: {
    width: widthPercentageToDP('42%'),
    top: heightPercentageToDP('66%'),
    height: heightPercentageToDP('6%'),
    left: widthPercentageToDP('33%'),
    // alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
