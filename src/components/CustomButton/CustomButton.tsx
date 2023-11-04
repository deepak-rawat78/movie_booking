import {Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomButton = ({title, onPress, containerStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
