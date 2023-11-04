import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import NavHeader from '../../components/NavHeader/NavHeader';
import Strings from '../../utils/constants';
import DateSelection, {TheatreType} from './DateSelection';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../routes/screens';
import {Moment} from 'moment';
import {FULL_MONTH_NAME} from '../../utils/functions';

export const MOVIE_NAME = 'The King’s Man';

const Theatre = () => {
  const navigation = useNavigation<any>();
  const {bottom} = useSafeAreaInsets();
  const [ticketInfo, setTicketInfo] = useState<{
    date: Moment | null;
    theatre: TheatreType | null;
  }>({
    date: null,
    theatre: null,
  });

  const handleClickOnSelectDate = () => {
    navigation.navigate(SCREENS.SELECT_SEAT, {
      theatreName: MOVIE_NAME,
      otherInfoText: ticketInfo.date
        ? `${
            FULL_MONTH_NAME[ticketInfo.date?.get('M')]
          } ${ticketInfo.date?.format(' d, YYYY')}`
        : '',
    });
  };

  const onSelectDateAndTheatre = (date: Moment, theatre: TheatreType) => {
    setTicketInfo({
      date,
      theatre,
    });
  };

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <NavHeader
        title={MOVIE_NAME}
        secondaryTitle={'In theaters december 22, 2021'}
      />
      <View style={styles.contentContainer}>
        <DateSelection onSelectDateAndTheatre={onSelectDateAndTheatre} />
      </View>
      <CustomButton
        title={Strings.SELECT_SEATS}
        onPress={handleClickOnSelectDate}
        containerStyle={styles.customButton}
      />
    </View>
  );
};

export default Theatre;
