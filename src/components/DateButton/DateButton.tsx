import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export interface DateButtonProps {
  title: string;
  onPress: () => void;
  isSelected: boolean;
}

const DateButton = ({title, onPress, isSelected}: DateButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isSelected && styles.selected]}>
      <Text style={[styles.text, !isSelected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DateButton;
