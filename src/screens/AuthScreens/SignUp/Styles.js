import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  blackText,
  yellow,
  greyText,
  descriptionText,
  primaryColor,
} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    backgroundColor: 'white',
    flex:1,
    justifyContent:'space-between'
  },
  logo: {
    width: wp('40%'),
    height: hp('30%'),
    resizeMode: 'contain',
  },
  loginText: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: blackText,
  },
  welcomeText: {
    fontSize: wp('5%'),
    color: yellow,
    marginTop: hp('3%'),
    fontWeight: '500',
  },

  radioButtonGroupContainer: {
    width: '60%',
    height: hp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioButtonIcon: {
    borderRadius: 70,
    marginRight: wp('2%'),
    borderWidth: 2,
    borderColor: descriptionText,
    padding: 4,
  },
  radioButtonIconActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: primaryColor,
  },
  radioButtonIconInActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  radioButtonTextInActive: {
    fontSize: hp('1.5%'),
    color: descriptionText,
  },
  radioButtonTextActive: {
    fontSize: hp('1.5%'),
    color: primaryColor,
    fontWeight: '600',
  },
  forgotPasswordContainer: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: hp('3%'),
  },
  forgotText: {
    fontSize: wp('3.5%'),
    color: descriptionText,
    fontWeight: '600',
  },

  loginWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('10%'),
  },
  loginWithText: {
    fontSize: hp('1.7%'),
    color: descriptionText,
    fontWeight: '600',
    marginRight: 5,
    marginLeft: 5,
  },
  divider: {
    backgroundColor: greyText,
    height: '1%',
    width: '30%',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp('10%'),
    width: wp('90%'),
  },
  socialLoginIconContainer: {
    padding: 13,
    width: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E8ECF4',
  },
  socialLoginIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  registerAccountTextContainer: {
    width: wp('100%'),
    alignItems: 'center',
    marginTop: 20,
    marginBottom: hp('2%'),
  },
  registerText: {
    fontSize: hp('1.9%'),
    color: primaryColor,
    fontWeight: '600',
  },
  bottomText: {
    color: blackText,
  },
});

export default styles;
