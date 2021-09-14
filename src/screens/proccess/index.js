
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../assets/theme'
const Proccess = (props) => {

  return (
    <View style={styles.container} ><Text>Proccess</Text></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:COLORS.WHITE
  },

});

export default Proccess;
