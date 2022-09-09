import { StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#191970" />
      <Routes/>
    </NavigationContainer>
  );
}

