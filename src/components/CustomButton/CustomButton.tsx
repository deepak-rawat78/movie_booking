import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  Image,
  TextStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton = ({
  title,
  onPress,
  containerStyle,
  icon,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {icon && <Image source={icon} style={styles.iconStyle} />}
      <Text style={[styles.titleText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
