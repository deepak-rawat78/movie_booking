import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import NavHeader from '../../components/NavHeader/NavHeader';
import DateSelection from '../Threatre/DateSelection';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SelectSeat = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <NavHeader />
      <View style={styles.contentContainer}>
        <DateSelection />
      </View>
      <CustomButton containerStyle={styles.customButton} />
    </View>
  );
};

export default SelectSeat;
