import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../SelectSeat/styles';
import Strings from '../../utils/constants';
import DateButton from '../../components/DateButton/DateButton';
import HallCard from '../Threatre/components/HallCard/HallCard';
import Heading from '../../components/Heading/Heading';
import moment, {Moment} from 'moment';
import {getDateAndMonth, isDateEqual} from './functions';

type TheatreType = {time: string; theatre: string; hall: string; id: number};
const getDate = () => {
  var startOfWeek = moment().startOf('month');
  var endOfWeek = moment().endOf('month');

  var days: Moment[] = [];
  var day = startOfWeek;

  while (day <= endOfWeek) {
    days.push(day);
    day = day.clone().add(1, 'd');
  }
  return days;
};
console.log(getDate());

const date: Moment[] = getDate();
const theatre: TheatreType[] = [
  {id: 1, time: '12:30', theatre: 'Cinetech', hall: 'hall 1'},
  {id: 2, time: '02:30', theatre: 'Cinetech', hall: 'hall 2'},
  {id: 3, time: '05:30', theatre: 'Cinetech', hall: 'hall 3'},
];

const ItemSeparatorComponent = () => <View style={styles.dateSeparator} />;

interface Props {
  onSelectDateAndTheatre: (date: string, theatre: string) => void;
}

const DateSelection = ({onSelectDateAndTheatre}: Props) => {
  const [selectedDate, setSelectedDate] = useState<Moment>(date[0]);
  const [selectedThreatre, setSelectedThreatre] = useState<TheatreType>(
    theatre[0],
  );
  useEffect(() => {
    if (selectedDate && selectedThreatre) {
      onSelectDateAndTheatre(selectedDate, selectedThreatre);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, selectedThreatre]);

  const renderDate = ({item}: {item: Moment}) => (
    <DateButton
      title={getDateAndMonth(item)}
      isSelected={isDateEqual(item, selectedDate)}
      onPress={() => setSelectedDate(item)}
    />
  );

  const renderHallCard = ({item}: {item: TheatreType}) => {
    return (
      <HallCard
        time={item.time}
        isSelected={item.id === selectedThreatre.id}
        theatreName={item.theatre}
        hallName={item.hall}
        onPress={() => setSelectedThreatre(item)}
      />
    );
  };

  return (
    <View>
      <Heading textStyle={styles.dateHeading} value={Strings.DATE} />
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
