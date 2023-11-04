import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors';
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const MovieCard = ({title, onPress, containerStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <LinearGradient
        colors={[colors.black3, colors.black2]}
        locations={[0, 1]}
        style={styles.bottomGradient}
      />
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg',
        }}
        style={styles.movieImage}
      />
      <Text style={styles.movieTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
