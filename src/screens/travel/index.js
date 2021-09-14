
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../assets/theme'

const Travel = (props) => {

  return (
    <View style={styles.container} ><Text>Travel</Text></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:COLORS.WHITE
  },

});

export default Travel;
