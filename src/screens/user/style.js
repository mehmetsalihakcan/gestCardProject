import { StyleSheet} from 'react-native';
import COLORS from '../../assets/theme'

export const  styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: COLORS.WHITE,
      height:'100%',
      width:'100%'
    },
    headerContainer: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.DARK_BLUE
    },
    headerTitleContainer: {
      flex: 1,
      flexDirection: 'row',
      //backgroundColor:'blue',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',

    },
    headerText: { color: COLORS.WHITE, fontSize: 16, fontWeight: 'bold' },
    headerDescriptionContainer: {
      flex: 1,
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      // backgroundColor:'blue',
    },
  
    headerButtonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'green',
    },
    newCardApply: {
      flex: 1,
      position:'absolute',
      zIndex:1,
      height: 50,
      borderRadius: 25, 
      top:-25,
      width: '80%',
      backgroundColor: COLORS.BUTTON_COLOR,
      alignSelf:'center',
     
    },
    contentContainer: {
      flex: 7,
      marginTop:0,
     
      width: '100%',
      backgroundColor: COLORS.WHITE
    },
    dottedView: {
      width: '100%',
      borderStyle: 'dotted',
      borderColor: COLORS.WHITE,
      borderWidth: 1,
      borderRadius: 1,
    },
    cardTitle: { fontSize: 14, fontWeight: 'bold', color: COLORS.WHITE },
    cardDescription: { fontSize: 10, fontWeight: '200', color: COLORS.WHITE },
    shortLine:{width:30,height:3,backgroundColor:COLORS.WHITE}
  });