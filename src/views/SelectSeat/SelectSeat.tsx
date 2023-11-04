import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import NavHeader from '../../components/NavHeader/NavHeader';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MOVIE_NAME} from '../Theatre/Theatre';

const SelectSeat = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <NavHeader
        title={MOVIE_NAME}
        secondaryTitle={'In theaters december 22, 2021'}
      />
      <View style={{flex: 1}} />
      <CustomButton containerStyle={styles.customButton} />
    </View>
  );
};

export default SelectSeat;
