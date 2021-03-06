/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes/';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#fcfcfc"
        barStyle="dark-content"
        translucent
      />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
