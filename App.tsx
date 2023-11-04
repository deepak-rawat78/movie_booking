import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigatorRoutes from './src/routes/routes';

const App = () => {
  return <NavigationContainer>{NavigatorRoutes()}</NavigationContainer>;
};

export default App;
