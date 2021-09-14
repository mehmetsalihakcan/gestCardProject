
import React, { useEffect, useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Button, NativeBaseProvider, Center, Box, Icon, IconButton, Card, Flex } from 'native-base';
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../assets/theme'
import { styles } from './style'

// servis
import { getData } from '../../api/user/user'

// local json data
import localJsonData from '../components/jsonData';


const CardList = (props) => {

  const navigation = useNavigation();
 
  const handleButton = () => {
    console.log('tıklandı');
  }

  useEffect(() => {
    // GET DATA
    // getRealData();
  }, [useIsFocused]);

  const getRealData = async () => {
    const result = await getData();
    console.log('servis datası : ', result);

  }

  const renderCardItem = (item,index)=> {
    return (
      <TouchableOpacity 
      key={index}
      style={{}} onPress={() => navigation.navigate('CardDetail', {selectedCard:item})} >

        <Box px={3} py={1} mx={3} borderRadius={25} my={1} bg={item.typeId === 1 ? COLORS.YELLOW_BACKGROUND : item.typeId === 2 ? COLORS.PINK_BACKGROUND : item.typeId === 3 ? COLORS.ORANGE_BACKGROUND : item.typeId === 4 ? COLORS.lIGHT_BLUE_BACKGROUND : COLORS.ERROR}>

          <Box align="flex-start" justify="flex-start" flexDirection="column" w="100%" h={10}  >
            <Text style={[styles.cardTitle, { color: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}>{item.typeName}</Text>
            <Text style={[styles.cardDescription, { color: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}>{item.typeDesc}</Text>
          </Box>

          <Box align="flex-end" justify="flex-end" flexDirection="row" w="100%" h={10}   >
            <View style={[  styles.shortLine,{backgroundColor:item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE, alignSelf:'center',marginRight:'30%'}]}></View>
            {
              item.typeId === 3 ?
                <View style={{ flexDirection: 'row' }} >

                  <Text style={[styles.cardTitle, { right: 0, alignSelf: 'center', alignItems: 'flex-end', color: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}>Sözleşme durumu</Text>
                  {
                    !item.isDealEnd === true ? <Ionicons name='checkmark-outline' size={30} color={COLORS.PRIMARY_TEXT_COLOR} /> : <Ionicons name='close' size={30} color='red' />
                  }
                </View>
                :
                <Text style={[styles.cardTitle, { flex: 2, right: 0, alignSelf: 'center', alignItems: 'flex-end', color: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}>{item.cardNo}</Text>
            }
          </Box>
          <View style={[styles.dottedView, { borderColor: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}></View>
          <Box align="flex-end" justify="flex-end" flexDirection="row" w="100%" h={10}  >

            <Text style={[styles.cardDescription, { flex: 4, fontWeight: 'bold', marginLeft: '50%', color: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}>Bakiye : </Text>
            <Text style={[styles.cardTitle, { flex: 2, color: item.typeId === 1 || item.typeId === 3 ? COLORS.PRIMARY_TEXT_COLOR : COLORS.WHITE }]}
            >{item.balance} ₺</Text>
          </Box>
        </Box>
      </TouchableOpacity>
    )
  }

  return (

    <View style={styles.container} >
      <View style={styles.headerContainer} >
        <View style={styles.headerTitleContainer} >
          <Ionicons name='chevron-back-outline' size={24} color={COLORS.WHITE} style={{ marginHorizontal: 12 }} />
          <Text style={styles.headerText} >GestCard Listesi</Text></View>
          <View style={[styles.shortLine, {marginBottom:10}]}></View>
        <View style={styles.headerDescriptionContainer} >
     
                
          <Text style={[styles.headerText, { fontSize: 14 }]}>  <Text style={[styles.headerText, { fontSize: 14,fontWeight:'400' }]}>GestCard </Text> ile indirimlerden</Text>
          <Text style={[styles.headerText, { fontSize: 14 }]}>faydalanabilirsiniz.</Text>
        </View>

      </View>


      <View style={styles.contentContainer} >

        <Button style={styles.newCardApply} onPress={() => handleButton}>
          <Text style={[styles.headerText, { fontSize: 14, fontWeight: '300' }]} >YENİ KART BAŞVURUSU</Text>
        </Button>

        <FlatList
          style={{ flex: 1, marginTop: 40 }}
          data={localJsonData || []}
          renderItem={({ item,index }) => renderCardItem(item,index)}
          keyExtractor={(item) => item.cardId}
        />


      </View>
    </View>

  );
};



export default CardList;
