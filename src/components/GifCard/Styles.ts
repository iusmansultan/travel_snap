import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {blackText, whiteText} from '../../helpers/Colors';

const styles = StyleSheet.create({
  card: {
    width: wp('90%'),
    height: hp('20%'),
    backgroundColor: whiteText,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    color: blackText,
  },
  image: {
    width: '100%',
    height: hp('17%'),
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default styles;
