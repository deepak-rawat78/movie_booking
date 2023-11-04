import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {leftDirectionArrow} from '../../assets/png';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  secondaryTitle: string;
}

const NavHeader = ({title, secondaryTitle}: Props) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const goBack = () => navigation.goBack();
  return (
    <View style={[styles.navContainer, {paddingTop: top}]}>
      <TouchableOpacity onPress={goBack} style={styles.sideSection}>
        <Image source={leftDirectionArrow} />
      </TouchableOpacity>
      <View style={styles.middleSection}>
        <Text style={styles.primaryTitle}>{title}</Text>
        <Text style={styles.secondaryTitle}>{secondaryTitle}</Text>
      </View>
      <View style={styles.sideSection} />
    </View>
  );
};

export default NavHeader;
