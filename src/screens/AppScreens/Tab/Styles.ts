import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {primaryColor,blackText} from '../../../helpers/Colors';

const styles = StyleSheet.create({
  tabBarIconsInActive: {
    width: 25,
    height: 25,
    tintColor: blackText,
  },
  tabBarIconsActive: {
    width: 25,
    height: 25,
    tintColor: primaryColor,
  },
  tabBarLabelActive: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: primaryColor,
  },
  tabBarLabelInActive: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: blackText,
  },
});

export default styles;
