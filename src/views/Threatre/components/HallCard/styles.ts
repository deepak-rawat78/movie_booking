import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {},
  hallContainer: {
    width: 250,
    height: 145,
    borderWidth: 1,
    borderColor: '#00000040',
    marginTop: 9,
    borderRadius: 10,
  },
  selectedHall: {
    borderColor: colors.blue,
  },
  timeText: {
    color: colors.darkBlue,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19,
  },
  theatreText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
    color: colors.grey2,
  },
  theatreCostText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19,
    color: colors.grey2,
    marginTop: 10,
  },
  priceText: {
    color: colors.darkBlue,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 19,
  },
});

export default styles;
