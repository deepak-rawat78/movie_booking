import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import Chip from './components/chip/Chip';
import colors from '../../assets/colors';
import Heading from '../../components/Heading/Heading';
import styles from './styles';
import Strings from '../../utils/constants';
import {
  leftDirectionArrow,
  playIcon,
  whiteLeftDirectionArrow,
} from '../../assets/png';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton/CustomButton';

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
  const {top} = useSafeAreaInsets();
  const renderGenre = (item: GENRESTYPE) => {
    return (
      <Chip
        text={item.value}
        backgroundColor={item.color}
        containerStyle={styles.genre}
      />
    );
  };

  const handleClickOnWatchTrailer = () => {};

  return (
    <ScrollView bounces={false}>
      <View style={[styles.topContainer, {paddingTop: top}]}>
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
        <View style={styles.navHeader}>
          <Image source={whiteLeftDirectionArrow} />
          <Text style={styles.navText}>{Strings.WATCH}</Text>
        </View>
        <View style={styles.buttonContiner}>
          <CustomButton
            icon={playIcon}
            onPress={handleClickOnWatchTrailer}
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
