import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('70%'),
    resizeMode: 'contain',
  },
  text: {
    fontSize: wp('5%'),
    color: 'black',
  },
});

export default styles;
