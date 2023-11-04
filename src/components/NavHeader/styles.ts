import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  navContainer: {
    height: 140,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.white2,
  },
  backArrow̉: {
    height: 15,
    width: 15,
    borderWidth: 1,
  },
  primaryTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: colors.darkBlue,
  },
  secondaryTitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    color: colors.blue,
    marginTop: 6,
  },
  sideSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
