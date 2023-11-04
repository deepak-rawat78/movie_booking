import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.white,
    fontWeight: '600',
  },
});

export default styles;
