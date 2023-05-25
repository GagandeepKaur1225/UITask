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
    fontSize: RFValue(28),
    color: '#FFF',
  },
  logOut: {
    width: widthPercentageToDP('25%'),
    top: heightPercentageToDP('0%'),
    height: heightPercentageToDP('5%'),
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'relative',
  },
  buttonText: {
    color: '#87CEEB',
    fontWeight: '900',
    fontSize: RFValue(15),
  },
  uploadMain: {
    alignSelf: 'center',
    // flexDirection: 'row',
    // marginTop: 10,
    justifyContent: 'space-around',
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('30%'),
    // borderWidth: 2,
    borderRadius: 8,
    borderColor: '#fff',
  },
  buttonView: {
    backgroundColor: '#fff',
    // borderWidth: 2,
    justifyContent: 'center',
    // height: '11%',
    alignItems: 'center',
    padding: 4,
    borderRadius: 6,
    width: '30%',
    alignSelf: 'center',
  },
  cross: {
    width: '100%',
    height: '60%',
    // padding: 4,
    aspectRatio: 1,
  },
  docView: {
    flexDirection: 'row',
    alignSelf: 'center',
    // borderWidth: 2,
    width: '80%',
    justifyContent: 'space-around',
  },
  emailText: { alignSelf: 'center', fontSize: RFValue(14), color: '#fff' },
  image: {
    height: RFValue(100),
    width: RFValue(100),
    alignSelf: 'center',
    borderRadius: RFValue(50),
    // borderColor: '#fff',
    // borderWidth:2
  },
  imageButton: {
    width: RFValue(35),
    // top: heightPercentageToDP('0%'),
    height: RFValue(35),
    alignSelf: 'center',
    borderRadius: RFPercentage(25),
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    top: RFValue(65),
    right: 0,
  },
  cameraImage: {
    width: RFValue(35),
    height: RFValue(35),
    alignSelf: 'center',
    borderRadius: RFPercentage(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
