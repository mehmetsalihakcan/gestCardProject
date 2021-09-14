

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../assets/theme'
import { Button } from 'native-base';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CardDetail = (props) => {

  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState(props.route.params.selectedCard);

  useEffect(() => {
    console.log('CardInfo ya gelen propslar : ', selectedCard);
  }, []);

  const handleButton = () => {
    console.log('tklandı');
  }
  return (
    <View style={styles.container} >

      <View style={styles.headerContainer} >

        <View style={styles.headerIconContainer} >
          <TouchableOpacity style={{ flexDirection: 'row' }}   >
            <Ionicons name='chevron-back-outline' size={28} color={COLORS.WHITE} style={{ margin: 12 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerTextContainer} >
          <Text style={styles.headerText} >GestCard</Text>
        </View>

      </View>


      <View style={styles.content} >
        <View style={styles.cardTitleContainer} >
          <Text style={styles.cardTitle} >{selectedCard.typeName}</Text>
          <Text style={[styles.cardDescription, { marginVertical: 5 }]} >{selectedCard.typeDesc}</Text>
          <View style={[styles.shortLine, { backgroundColor: COLORS.DARK_BLUE }]} ></View>
        </View>


        <View style={styles.dealEndContainer} >
          <Text style={styles.cardDescription} >Sözleşme Durumu </Text>
          {
            !selectedCard.isDealEnd === true ? <Ionicons name='checkmark-outline' size={16} color={COLORS.PRIMARY_TEXT_COLOR} />
              : <Ionicons name='close' size={16} color='red' />
          }
        </View>

        <View style={styles.middleDottedLineContainer} >

          <View style={[styles.halfView, { alignItems: 'flex-start', borderBottomEndRadius: 100, borderTopEndRadius: 100 }]} />


          <View style={styles.dottedLineContainer} >
            <View style={styles.dottedView} ></View>
          </View>


          <View style={[styles.halfView, { alignItems: 'flex-end', borderBottomStartRadius: 100, borderTopStartRadius: 100 }]} />

        </View>

        <View style={styles.firmContainer} >

          <Text style={styles.cardDescription} >Firma</Text>
          <Text style={styles.cardTitle} >Tanıtım Reklam Ajansı</Text>
          <View style={styles.lineView} />

        </View>
        <View style={styles.dealEndDateContainer} >

          <Text style={styles.cardDescription} >Sözleşme bitiş Tarihi</Text>
          <Text style={[styles.cardTitle, { padding: 5, fontSize: 14 }]} >{selectedCard.dealEndDate}</Text>
          <View style={styles.lineView} />
        </View>

        <View style={styles.cardBalangeContainer} >
          <Text style={[styles.cardDescription, { flex: 4, fontWeight: 'bold', marginLeft: '50%' }]}>Bakiye : </Text>
          <Text style={[styles.cardTitle, { flex: 2, }]}
          >{selectedCard.balance} ₺</Text>
        </View>

      </View>

      <View style={styles.buttonGroupContainer} >

        <ScrollView>
          <Button style={styles.buttonStyle} onPress={() => handleButton}>
            <Text style={styles.buttonText} >Bakiye yükle</Text>
          </Button>

          <Button style={[styles.buttonStyle, { backgroundColor: COLORS.BOTTOM_MENU_BACKGROUND }]} onPress={() => handleButton}>
            <Text style={styles.buttonText} >Gestcard çeşitleri</Text>
          </Button>

          <Button style={[styles.buttonStyle, { backgroundColor: COLORS.LIGHT_BLUE_BACKGROUND1 }]} onPress={() => handleButton}>
            <Text style={styles.buttonText} >Araçlar</Text>
          </Button>

          <Button style={[styles.buttonStyle, { backgroundColor: COLORS.DARK_RED_BACKGROUND }]} onPress={() => handleButton}>
            <Text style={styles.buttonText} >Gestcard İptal</Text>
          </Button>
        </ScrollView>


      </View>


    </View>

  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },

  headerContainer: { flex: 2, width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', backgroundColor: COLORS.DARK_BLUE, top: 0 },
  headerText: { color: COLORS.WHITE, fontSize: 16, fontWeight: 'bold' },

  headerTextContainer: { flex: 8, alignItems: 'flex-start', justifyContent: 'center', marginTop: 20, marginLeft: 30 },
  headerIconContainer: { flex: 2, alignItems: 'center', justifyContent: 'center' },
  content: {
    flex: 3,

    marginHorizontal: 20,
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: COLORS.ORANGE_BACKGROUND,

    top: -50
  },

  buttonGroupContainer: {
    flex: 3,
    top: 0,
    marginHorizontal: 20,

  },


  cardTitleContainer: {
    flex: 3,

    alignItems: 'flex-start',
    padding: 10,
  },
  dealEndContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5,
    flexDirection: 'row',

  },
  middleDottedLineContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
    width: '100%',
    //backgroundColor: 'green'
  },
  dottedLineContainer: {
    flex: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  dottedView: {
    width: '100%',
    borderStyle: 'dotted',
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 1,
    alignItems: 'center',
  },
  halfView: {
    flex: 1,

    height: '100%',
    backgroundColor: COLORS.WHITE
  },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: COLORS.DARK_BLUE },
  cardDescription: { fontSize: 10, fontWeight: '200', color: COLORS.DARK_BLUE },
  shortLine: { width: 30, height: 3, backgroundColor: COLORS.WHITE },
  cardBalangeContainer: { flex: 3, flexDirection: 'row', alignItems: 'flex-end', padding: 10, },
  dealEndDateContainer: { flex: 3, alignItems: 'flex-start', paddingHorizontal: 10, },
  lineView: {

    height: 1,
    width: '100%',
    backgroundColor: '#797979'

  },
  firmContainer: { flex: 3, alignItems: 'flex-start', padding: 10 },

  // buttonGroup
  buttonStyle: {
    width: '100%',
    height: 50,
    borderRadius: 25,

    backgroundColor: COLORS.BUTTON_COLOR,

    marginVertical: 5,

  },

  buttonText: { textTransform: 'uppercase', color: COLORS.WHITE, fontSize: 14, fontWeight: 'bold', width: '100%' },

})

export default CardDetail;
