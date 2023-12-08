import {StyleSheet} from 'react-native';
import {primaryColor, blackText, whiteText} from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 190,
    backgroundColor: 'white',
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'grey',
  },
  content: {
    width: '80%',
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nameText: {
    color: blackText,
    fontWeight: 'bold',
  },
  sendMessageText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: 5,
    color: '#A5A7AC',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  acceptButton: {
    width: '45%',
    backgroundColor: primaryColor,
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectButton: {
    width: '45%',
    backgroundColor: 'red',
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: whiteText,
      fontWeight: '600',
    fontSize:14
  },
});

export default styles;
