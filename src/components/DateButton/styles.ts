import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.grey1,
  },
  selected: {
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '600',
  },
  selectedText: {
    color: colors.darkBlue,
  },
});

export default styles;
