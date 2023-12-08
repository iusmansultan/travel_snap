import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {blackText, descriptionText} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: wp('100%'),
    height: hp('45%'),
    resizeMode: 'cover',
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userName: {
    fontSize: wp('6%'),
    color: blackText,
    fontWeight: '600',
  },
  title: {
    fontSize: wp('5%'),
    color: blackText,
    fontWeight: '600',
    width: wp('90%'),
    marginTop: 20,
  },
  description: {
    fontSize: wp('4%'),
    color: blackText,
    width: wp('90%'),
    marginTop: 20,
    textAlign: 'left',
  },
    date: {
    fontSize: wp('4%'),
    color: descriptionText,
  },
});

export default styles;
