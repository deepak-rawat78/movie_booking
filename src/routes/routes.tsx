import React from 'react';
import SCREENS from './screens';
import MediaLibrary from '../views/MediaLibrary/MediaLibrary';
import More from '../views/More/More';
import Watch from '../views/Watch/Watch';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../views/Dashboard/Dashboard';
import {Image} from 'react-native';
import {tabBarIcon} from './routesUtils';
import colors from '../assets/colors';
import styles from './styles';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route: RouteProp<any>, focused: boolean) => {
  let tintColor = focused ? colors.white : colors.black4;

  return (
    <Image
      source={tabBarIcon[route.name]}
      style={[styles.tabIcon, {tintColor: tintColor}]}
    />
  );
};

const tabBarOption = ({route}: {route: RouteProp<any>}) => ({
  tabBarInactiveTintColor: colors.black4,
  headerShown: false,
  tabBarActiveTintColor: colors.white,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarStyle: styles.tabBarStyle,
  tabBarIcon: ({focused}: {focused: boolean}) => getTabBarIcon(route, focused),
});

const NavigatorRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.DASHBOARD}
      screenOptions={tabBarOption}>
      <Tab.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={SCREENS.WATCH} component={Watch} />
      <Tab.Screen name={SCREENS.MEDIA_LIBRARY} component={MediaLibrary} />
      <Tab.Screen name={SCREENS.MORE} component={More} />
    </Tab.Navigator>
  );
};

export default NavigatorRoutes;
