
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import COLORS from './src/assets/theme';
import App from './src/app/app';
import { Button, NativeBaseProvider, Center, Box, Icon, IconButton, Card, Flex } from 'native-base';

export default (props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.DARK_STATUSBAR : COLORS.LIGHT_STATUSBAR,
  };

  
  return (
    <>
    <NativeBaseProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden />
      <App />
      </NativeBaseProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:COLORS.WHITE
  },
  
});

