import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '600',
    color: colors.white,
  },
});

export default styles;
