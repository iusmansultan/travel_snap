import {StyleSheet} from 'react-native';
import {
  primaryColor,
  postedQuestionTitle,
  blackText,
  yellow,
} from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 300,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  detailContentContainer: {
    width: '80%',
    height: '100%',
    marginTop: 10,
  },
  detailContentTopContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailContentTopContainerUserNameText: {
    fontSize: 14,
    color: blackText,
    fontWeight: '600',
  },
  detailContentTopContainerSendMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
    resizeMode: 'contain',
  },
  detailContentTopContainerSendMessageText: {
    fontSize: 14,
    color: yellow,
    fontWeight: '600',
  },
  questionText: {
    fontSize: 14,
    color: blackText,
    marginTop: 10,
  },
  deliveryContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  deliveryTimeText: {
    fontSize: 12,
    color: '#A5A7AC',
    fontWeight: '500',
  },

  detailBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailBottomContainerStatus: {
    backgroundColor: '#DEFABB',
    borderRadius: 5,
    height: 30,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailBottomContainerStatusText: {
    fontSize: 12,
    color: primaryColor,
    fontWeight: '600',
  },
  actionIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
