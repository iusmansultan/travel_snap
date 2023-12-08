import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  blackText,
  yellow,
  greyText,
  primaryColor,
  whiteText,
  headingColor,
} from './Colors';

const commonStyles = StyleSheet.create({
  textInput: {
    width: wp('90%'),
    height: 58,
    backgroundColor: greyText,
    padding: '4%',
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
    color: blackText,
  },

  buttonPrimary: {
    backgroundColor: primaryColor,
    borderRadius: wp('2%'),
    width: wp('90%'),
    color: whiteText,
    marginTop: hp('2%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimaryText: {
    color: whiteText,
    fontWeight: '600',
    fontSize: hp('2%'),
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    marginRight: 15,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  headingText: {
    color: headingColor,
    fontWeight: '500',
    fontSize: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.84,

    elevation: 3,
  },
  profileName: {
    color: blackText,
  },
  subheadingText: {
    color: blackText,
    fontSize: 16,
    fontWeight: '500',
  },
  sWidth: {
    width: wp('90%'),
  },
  dFlexCenterCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dFlexStartCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  dFlexEndCol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  dFlexBetweenCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dFlexCenterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dFlexStartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dFlexEndRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  dFlexBetweenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  navigationBackIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // marginTop: Platform.OS === 'ios' ? 0 : 2,
  },
  marginLeft: {
    marginLeft: 15,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  
  gap10: {
    gap: 10,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mt5: {
    marginTop: 5,
  },
  
});

export default commonStyles;
