import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../SelectSeat/styles';
import Strings from '../../utils/constants';
import DateButton from '../../components/DateButton/DateButton';
import HallCard from '../Threatre/components/HallCard/HallCard';

const date = ['3 Mar', '4 Mar', '5 Mar', '6 Mar', '7 Mar'];
const theatre = ['Cinetech + hall 1', 'Cinetech + hall 2'];

const ItemSeparatorComponent = () => <View style={styles.dateSeparator} />;

const DateSelection = ({onSelectDateAndTheatre}) => {
  const [selectedDate, setSelectedDate] = useState(date[0]);
  const [selectedThreatre, setSelectedThreatre] = useState(theatre[0]);

  const renderDate = ({item}: {item: string}) => (
    <DateButton
      title={item}
      isSelected={item === selectedDate}
      onPress={() => setSelectedDate(item)}
    />
  );

  const renderHallCard = ({item}: {item: string}) => {
    return (
      <HallCard
        time={item}
        isSelected={item === selectedThreatre}
        theatreName={item}
        onPress={() => setSelectedThreatre(item)}
      />
    );
  };

  return (
    <View>
      <Text style={styles.dateText}>{Strings.DATE}</Text>
      <FlatList
        data={date}
        renderItem={renderDate}
        horizontal={true}
        ItemSeparatorComponent={ItemSeparatorComponent}
        style={styles.dateFlatlist}
        contentContainerStyle={styles.contentFlatlist}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={theatre}
        renderItem={renderHallCard}
        horizontal={true}
        ItemSeparatorComponent={ItemSeparatorComponent}
        style={styles.theatreFlatlist}
        contentContainerStyle={styles.contentFlatlist}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DateSelection;