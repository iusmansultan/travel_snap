import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { blackText, descriptionText, whiteText } from '../../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: whiteText,
    padding: wp('4%'),
  },
  header: {
    height: hp('15%'),
  },
  logo: {
    width: '100%',
    height: hp('15%'),
    resizeMode: 'contain',
  },
  searchContainer: {
    width: wp('90%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor:descriptionText,
    borderRadius: 100,
    marginTop: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: blackText,
  },
  searchInput: {
    width: '80%',
    fontSize: 14,
  
    color: blackText,
    height: 30,
    padding: 0,
  },
  flatList: {
    width: wp('90%'),
    marginTop: 10,
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: blackText,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Indicator: {
    flex: 1,
    backgroundColor: 'rgba(235, 235, 235, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default styles;
