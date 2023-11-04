import React from 'react';
import {SafeAreaView} from 'react-native';
import MovieCard from '../../components/MovieCard/MovieCard';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../routes/screens';
import styles from './styles';

const Watch = () => {
  const navigation = useNavigation<any>();

  const onPressMovie = () => {
    navigation.navigate(SCREENS.MOVIE_DETAIL);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MovieCard title="Free Guy" onPress={onPressMovie} />
    </SafeAreaView>
  );
};

export default Watch;
