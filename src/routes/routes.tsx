import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SCREENS from './screens';
import MediaLibrary from '../views/MediaLibrary/MediaLibrary';
import More from '../views/More/More';
import Watch from '../views/Watch/Watch';
import Theatre from '../views/Threatre/Threatre';
import SeatSelection from '../views/SelectSeat/SeatSelection';

const Stack = createNativeStackNavigator();

const NavigatorRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.DASHBOARD} component={Theatre} />
      <Stack.Screen name={SCREENS.THREATRE} component={Theatre} />
      <Stack.Screen name={SCREENS.SELECT_SEAT} component={SeatSelection} />
      <Stack.Screen name={SCREENS.MEDIA_LIBRARY} component={MediaLibrary} />
      <Stack.Screen name={SCREENS.MORE} component={More} />
      <Stack.Screen name={SCREENS.WATCH} component={Watch} />
    </Stack.Navigator>
  );
};

export default NavigatorRoutes;
