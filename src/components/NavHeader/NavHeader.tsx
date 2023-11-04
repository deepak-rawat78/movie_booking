import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {leftDirectionArrow} from '../../assets/png';

interface Props {
  title: string;
  secondaryTitle: string;
}

const NavHeader = ({title, secondaryTitle}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.navContainer, {paddingTop: top}]}>
      <View style={styles.sideSection}>
        <Image source={leftDirectionArrow} />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.primaryTitle}>{title}</Text>
        <Text style={styles.secondaryTitle}>{secondaryTitle}</Text>
      </View>
      <View style={styles.sideSection} />
    </View>
  );
};

export default NavHeader;
