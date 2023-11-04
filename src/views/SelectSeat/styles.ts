import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    marginBottom: 3,
  },
  middleRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  leftRow: {
    flexDirection: 'row',
    marginBottom: 3,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  rightRow: {
    flexDirection: 'row',
    marginBottom: 3,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  seat: {
    height: 10,
    width: 10,
    borderWidth: 1,
    marginHorizontal: 3,
  },
  arrangementContainer: {
    width: '100%',
    flexDirection: 'row',
    overflow: 'scroll',
  },
  midWayGap: {
    marginRight: 10,
  },
  dateSeparator: {
    width: 12,
  },
  dateHeading: {
    marginHorizontal: 20,
    marginTop: 94,
  },
  dateFlatlist: {
    marginTop: 14,
  },
  contentFlatlist: {
    paddingHorizontal: 20,
  },
  theatreFlatlist: {
    marginTop: 39,
  },
  contentContainer: {
    flex: 1,
  },
  customButton: {
    marginHorizontal: 26,
    marginBottom: 26,
  },
});

export default styles;
