import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import NavHeader from '../../components/NavHeader/NavHeader';
import Strings from '../../utils/constants';
import DateSelection from './DateSelection';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../routes/screens';

const THREATRE_NAME = 'The King’s Man';

const Theatre = () => {
  const navigation = useNavigation<any>();
  const {bottom} = useSafeAreaInsets();

  const handleClickOnSelectDate = () => {
    navigation.navigate(SCREENS.SELECT_SEAT, {
      theatreName: THREATRE_NAME,
      otherInfoText: '',
    });
  };

  const onSelectDateAndTheatre = () => {};

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <NavHeader
        title={THREATRE_NAME}
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
