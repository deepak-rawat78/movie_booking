import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
const CARD_HEIGHT = 200;
const styles = StyleSheet.create({
  container: {
    height: CARD_HEIGHT,
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: CARD_HEIGHT * 0.3,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: CARD_HEIGHT * 0.45,
  },
  movieTitle: {
    fontSize: 18,
    lineHeight: 22,
    color: colors.white,
    fontWeight: '500',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  movieImage: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
