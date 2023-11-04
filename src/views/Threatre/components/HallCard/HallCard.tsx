import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Strings from '../../../../utils/constants';

interface Props {
  time: string | null;
  theatreName?: string;
  hallName?: string;
  isSelected: boolean;
  onPress: () => void;
}

const HallCard = ({
  time = null,
  theatreName = 'Cinetech',
  hallName = 'Hall 1',
  isSelected,
  onPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.theatreText}>
        <Text style={styles.timeText}>{time ? `${time}  ` : ''}</Text>
        {`${theatreName} + ${hallName}`}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.hallContainer, isSelected && styles.selectedHall]}
      />
      <Text style={styles.theatreCostText}>
        {Strings.FROM} <Text style={styles.priceText}>{50}$</Text> {Strings.OR}
        <Text style={styles.priceText}>{2500}</Text> {Strings.BONUS}
      </Text>
    </View>
  );
};

export default HallCard;
