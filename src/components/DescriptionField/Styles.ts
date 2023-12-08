import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {blackText, descriptionText} from '../../helpers/Colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: wp('90%'),
    height: 170,
    borderRadius: 7,
    paddingHorizontal: 13,
    backgroundColor:'white',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: descriptionText,
  },
  input: {
    color: blackText,
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'top',
  },

});

export default styles;
