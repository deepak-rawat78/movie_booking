import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import NavHeader from '../../components/NavHeader/NavHeader';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MOVIE_NAME} from '../Theatre/Theatre';
import Strings from '../../utils/constants';
import SeatSelection from './SeatSelection';

const SelectSeat = () => {
  const {bottom} = useSafeAreaInsets();
  const handleClickOnPay = () => {};
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <NavHeader
        title={MOVIE_NAME}
        secondaryTitle={'In theaters december 22, 2021'}
      />
      <View style={{flex: 1}}>
        <SeatSelection />
      </View>
      <CustomButton
        title={Strings.PROCEED_TO_PAY}
        containerStyle={styles.customButton}
        onPress={handleClickOnPay}
      />
    </View>
  );
};

export default SelectSeat;
