import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  value: string;
  textStyle?: StyleProp<TextStyle>;
}

const Heading = ({value, textStyle}: Props) => {
  return <Text style={[styles.text, textStyle]}>{value}</Text>;
};

export default Heading;
