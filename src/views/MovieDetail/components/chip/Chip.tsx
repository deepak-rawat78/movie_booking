import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  text: string;
  backgroundColor: string;
  containerStyle: StyleProp<ViewStyle>;
}

const Chip = ({backgroundColor, text, containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle, {backgroundColor}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Chip;
