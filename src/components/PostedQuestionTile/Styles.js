import {StyleSheet} from 'react-native';
import {primaryColor, postedQuestionTitle} from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height:180,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#D7D7D7',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  postedText: {
    color: 'black',
    fontSize: 12,
    marginBottom: 4,
  },
  postedQuestionTitleText: {
    // height:24,
    color: postedQuestionTitle,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 4,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 10,
    color: 'grey',
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 4,
  },
  statusButtonActive: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusButtonInActive: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
