import {StyleSheet, Platform} from 'react-native';
import {
  primaryColor,
  descriptionText,
  whiteText,
  greyText,
  blackText,
} from '../../helpers/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#6C6A6D',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    position: 'absolute',
  },
  ContentView: {
    width: wp('75%'),
    height: hp('25%'),
    backgroundColor: 'white',
    // position: 'relative',
    top: '35%',
    left: wp('12.5%'),
    borderRadius: wp('5%'),
    alignItems: 'center',
    padding: hp('3%'),
    flexDirection: 'column',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.0,

    elevation: 24,
  },
  topStyle: {
    width: '100%',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: hp('2.5%'),
    color: blackText,
  },
  messageStyle: {
    marginTop: hp('3%'),
    // fontWeight: '500',
    fontSize: hp('1.5%'),
    textAlign: 'center',
    color: blackText,
  },
  buttonsViewStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmbutton: {
    width: '47%',
    backgroundColor: primaryColor,
    padding: hp('1.5%'),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelbutton: {
    width: '47%',
    backgroundColor: descriptionText,
    padding: hp('1.5%'),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: 'white',
    fontWeight: '500',
  },
  confirmText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default styles;
