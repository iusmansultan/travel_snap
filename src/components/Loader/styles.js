import {StyleSheet} from 'react-native';
import {
  primaryColor,
  descriptionText,
  whiteText,
  greyText,
  blackText,
} from '../../helpers/Colors';

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    
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
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    opacity: 0.8,
  },
});

export default styles;
