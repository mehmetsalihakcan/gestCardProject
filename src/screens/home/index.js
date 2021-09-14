
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import COLORS from '../../assets/theme';

const Home = (props) => {
const navigation = useNavigation();

  return (
    <View style={styles.container} >
      <Text style={{}}>Alt menüden kullanıcı sekmesine tıklayın.</Text>
      <TouchableOpacity style={styles.detailButton} onPress={()=>navigation.navigate('HomeDetail')} >
        <Text style={styles.detailButonText} >DETAY SAYFAYA GİT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE
  },
  detailButton: {
    height: 40,
    backgroundColor: COLORS.DARK_RED_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 20
  },
  detailButonText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: COLORS.WHITE
  }


});

export default Home;
