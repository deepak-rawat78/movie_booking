import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

enum SeatGroup {
  LEFT,
  MIDDLE,
  RIGHT,
}

const midData = new Array(10).fill(new Array(14).fill(0));
const sideData = [
  ...new Array(1).fill(new Array(2).fill(0)),
  ...new Array(3).fill(new Array(4).fill(0)),
  ...new Array(6).fill(new Array(5).fill(0)),
];

const Seat = ({rIndex, cIndex}) => {
  return (
    <View style={[styles.seat]}>
      <Text style={{fontSize: 7}}>
        {rIndex}-{cIndex}
      </Text>
    </View>
  );
};

const SeatRow = ({value, rIndex, group}) => {
  let rowStyle = [];
  if (group === SeatGroup.LEFT) {
    rowStyle = [styles.row, styles.leftRow];
  } else if (group === SeatGroup.RIGHT) {
    rowStyle = [styles.row, styles.rightRow];
  } else {
    rowStyle = [styles.middleRow, styles.row];
  }
  return (
    <View style={rowStyle}>
      {value.map((_, cIndex) => {
        return <Seat rIndex={rIndex} cIndex={cIndex} />;
      })}
    </View>
  );
};

const SeatSelection = () => {
  const renderSeatRow = (value, index, group) => {
    return <SeatRow rIndex={index} value={value} group={group} />;
  };
  return (
    <View style={styles.arrangementContainer}>
      <View>
        {sideData.map((value, index) =>
          renderSeatRow(value, index, SeatGroup.LEFT),
        )}
      </View>
      <View>
        {midData.map((value, index) =>
          renderSeatRow(value, index, SeatGroup.MIDDLE),
        )}
      </View>
      <View>
        {sideData.map((value, index) =>
          renderSeatRow(value, index, SeatGroup.RIGHT),
        )}
      </View>
    </View>
  );
};

export default SeatSelection;
