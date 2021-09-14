
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../assets/theme'
const Settings = (props) => {

  return (
    <View style={styles.container} ><Text>Settings</Text></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:COLORS.WHITE
  },

});

export default Settings;
