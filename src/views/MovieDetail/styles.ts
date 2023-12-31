import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  genresContainer: {
    flexDirection: 'row',
    marginTop: 14,
  },
  genre: {
    marginRight: 5,
  },
  detailContainer: {
    paddingHorizontal: 40,
    paddingTop: 27,
  },
  separator: {
    marginTop: 22,
    marginBottom: 15,
    height: 1,
    backgroundColor: colors.black,
    opacity: 0.05,
  },
  overviewText: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: '400',
    color: colors.grey2,
    marginTop: 14,
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 13,
  },
  navText: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
    marginLeft: 15,
    fontWeight: '500',
  },
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
  },
  topContainer: {
    height: 500,
  },
  watchButton: {
    backgroundColor: '#ffffff00',
    borderWidth: 2,
    borderColor: colors.blue,
    width: 243,
    marginTop: 10,
  },
  getTicketButton: {
    width: 243,
  },
  buttonContiner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 34,
  },
  movieImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
  },
});

export default styles;
