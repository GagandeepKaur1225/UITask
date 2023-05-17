import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  imageStyle: {
    width: heightPercentageToDP('48%'),
    height: heightPercentageToDP('45%'),
    margin: heightPercentageToDP('6%'),
  },
  headerText: {
    color: '#87CEEB',
    fontWeight: '700',
  },
  heading: {
    fontSize: 24,
    width: widthPercentageToDP('80%'),
    marginBottom: 3,
    marginTop: 3,
    fontWeight: '700',
  },
  bottomView: {
    flexDirection: 'row',
    width: widthPercentageToDP('80%'),
    // borderWidth: 2,
    justifyContent: 'space-between',
    left: widthPercentageToDP('8%'),
    marginTop: heightPercentageToDP('7%'),
  },
  skip: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: widthPercentageToDP('87%'),
    top: heightPercentageToDP('4%'),
  },
  nextButton: {
    borderRadius: 20,
    width: widthPercentageToDP('25%'),
    height: heightPercentageToDP('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  nextText: {
    // alignSelf: 'center',
    color: '#fff',
  },
});
