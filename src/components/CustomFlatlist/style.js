import { Platform, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  flatlist: {
    height:
      Platform.OS === 'ios'
        ? heightPercentageToDP('60%')
        : heightPercentageToDP('70%'),
    marginTop: heightPercentageToDP('8%'),
  },
  imageStyle: {
    width: '86%',
    height: '45%',
    margin: heightPercentageToDP('3%'),
    // padding: 4,
    alignSelf: 'center',
    borderRadius: 10,
    // borderWidth:2
  },
  headerText: {
    color: Platform.OS === 'ios' ? '#1e90ff' : '#87CEEB',
    fontWeight: '700',
    left: widthPercentageToDP('7%'),
    fontSize: RFValue(21),
  },
  heading: {
    fontSize: RFValue(22),
    width: '85%',
    marginBottom: 3,
    marginTop: 3,
    fontWeight: '700',
    left: widthPercentageToDP('7%'),
  },
  bottomView: {
    flexDirection: 'row',
    width: widthPercentageToDP('77%'),
    // borderWidth: 2,
    justifyContent: 'space-between',
    left: widthPercentageToDP('8%'),
    marginTop: heightPercentageToDP('7%'),
  },
  skip: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: widthPercentageToDP('89%'),
    top: heightPercentageToDP('4%'),
    borderWidth:2
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
    fontWeight: '900',
    color: '#fff',
    fontSize: RFValue(20),
  },
  body: {
    left: widthPercentageToDP('7%'),
    width: '85%',
    fontSize: RFValue(15),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
  },
  active: {},
  inactive: {},
});
