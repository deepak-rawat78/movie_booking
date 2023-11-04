import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Chip from './components/chip/Chip';
import colors from '../../assets/colors';
import Heading from '../../components/Heading/Heading';
import styles from './styles';
import Strings from '../../utils/constants';
import {playIcon, whiteLeftDirectionArrow} from '../../assets/png';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../routes/screens';

interface Props {}

type GENRESTYPE = {value: string; color: string};

const description =
  "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons.";

const genres: GENRESTYPE[] = [
  {value: Strings.ACTION, color: colors.green2},
  {value: Strings.THRILLER, color: colors.pink2},
  {value: Strings.SCIENCE, color: colors.purple2},
  {value: Strings.FICTION, color: colors.yellow2},
];

const MovieDetail = ({}: Props) => {
  const navigation = useNavigation<any>();
  const {top} = useSafeAreaInsets();
  const goBack = () => navigation.goBack();
  const renderGenre = (item: GENRESTYPE) => {
    return (
      <Chip
        text={item.value}
        backgroundColor={item.color}
        containerStyle={styles.genre}
      />
    );
  };

  const handleClickOnGetTicket = () => {
    navigation.navigate(SCREENS.THEATRE);
  };

  const handleClickOnWatchTrailer = () => {};

  return (
    <ScrollView bounces={false}>
      <View style={[styles.topContainer]}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/6o1jEuYRseIvVnJOGPHCDyW9Mr4.jpg',
          }}
          resizeMode="cover"
          style={styles.movieImage}
        />
        <LinearGradient
          colors={[colors.black2, colors.black3]}
          locations={[0, 0.8]}
          style={styles.topGradient}
        />
        <LinearGradient
          colors={[colors.black3, colors.black2]}
          locations={[0.1, 0.8]}
          style={styles.bottomGradient}
        />

        <TouchableOpacity
          onPress={goBack}
          style={[styles.navHeader, {marginTop: top}]}>
          <Image source={whiteLeftDirectionArrow} />
          <Text style={styles.navText}>{Strings.WATCH}</Text>
        </TouchableOpacity>
        <View style={styles.buttonContiner}>
          <CustomButton
            onPress={handleClickOnGetTicket}
            title={Strings.GET_TICKETS}
            containerStyle={styles.getTicketButton}
          />
          <CustomButton
            icon={playIcon}
            onPress={handleClickOnWatchTrailer}
            title={Strings.WATCH_TRAILER}
            containerStyle={styles.watchButton}
          />
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Heading value={Strings.GENRES} />
        <View style={styles.genresContainer}>{genres.map(renderGenre)}</View>
        <View style={styles.separator} />
        <Heading value={Strings.OVERVIEW} />
        <Text style={styles.overviewText}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
