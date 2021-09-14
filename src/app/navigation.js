
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../assets/theme'


// screens
import HomeScreen from '../screens/home';
import HomeDetailScreen from '../screens/home/homeDetail';
import TravelScreen from '../screens/travel';
import CardListScreen from '../screens/user';
import CardDetailScreen from '../screens/user/cardDetail';
import ProccessScreen from '../screens/proccess';
import SettingsScreen from '../screens/settings';

const Bottom = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const TravelStack = createNativeStackNavigator();
const ProccessStack = createNativeStackNavigator();
const CardListStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeStackRoutes = (props) => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Anasayfa', headerBackTitleVisible: false, headerShown: true, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle,
         
        }}
      />
      <TravelStack.Screen
        name="HomeDetail"
        component={HomeDetailScreen}
        options={{ title: 'Detay', headerBackTitleVisible: false, headerShown: true, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle }}
      />
    </HomeStack.Navigator>
  );
};

const TravelStackRoutes = (props) => {
  return (
    <TravelStack.Navigator>
      <TravelStack.Screen
        name="Travel"
        component={TravelScreen}
        options={{ title: 'Seyahat', headerBackTitleVisible: false, headerShown: true, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle }}
      />
    </TravelStack.Navigator>
  );
};

const ProccessStackRoutes = (props) => {
  return (
    <ProccessStack.Navigator>
      <ProccessStack.Screen
        name="Proccess"
        component={ProccessScreen}
        options={{ title: 'işlemler', headerBackTitleVisible: false, headerShown: true, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle }}
      />
    </ProccessStack.Navigator>
  );
};

const CardListStackRoutes = (props) => {
  return (
    <CardListStack.Navigator>
      <CardListStack.Screen
        name="CardList"
        component={CardListScreen}
        options={{ title: 'Kart Listesi', headerBackTitleVisible: false, headerShown: false, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle }}
      />

      <CardListStack.Screen
        name="CardDetail"
        component={CardDetailScreen}
        options={{ title: 'GestCard', headerBackTitleVisible: false, headerShown: false, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle }}
      />

    </CardListStack.Navigator>
  );
};

const SettingsStackRoutes = (props) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Ayarlar', headerBackTitleVisible: false, headerShown: true, headerStyle: styles.headerStyle, headerTitleStyle: styles.headerBackTitleStyle }}
      />
    </SettingsStack.Navigator>
  );
};



const BottomRoutes = (props) => {
  return (
    <Bottom.Navigator
      initialRouteName="HomeBottomTab"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: COLORS.BOTTOM_MENU_BACKGROUND },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeBottomTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'TravelBottomTab') {
            iconName = focused ? 'boat' : 'boat-outline';
          } else if (route.name === 'ProccessBottomTab') {
            iconName = focused ? 'code-working' : 'code-working-outline';
          }
          else if (route.name === 'CardListBottomTab') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'SettingsBottomTab') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.BOTTOM_MENU_INACTIVE_COLOR,
      })}
    >
      <Bottom.Screen name="HomeBottomTab" component={HomeStackRoutes} options={{ tabBarLabel: 'Anasayfa', headerShown: false }} />
      <Bottom.Screen name="TravelBottomTab" component={TravelStackRoutes} options={{ tabBarLabel: 'Seyahat', headerShown: false }} />
      <Bottom.Screen name="ProccessBottomTab" component={ProccessStackRoutes} options={{ tabBarLabel: 'İşlemler', headerShown: false }} />
      <Bottom.Screen name="CardListBottomTab" component={CardListStackRoutes} options={{ tabBarLabel: 'Kullanıcı', headerShown: false }} />
      <Bottom.Screen name="SettingsBottomTab" component={SettingsStackRoutes} options={{ tabBarLabel: 'Ayarlar', headerShown: false }} />
    </Bottom.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      {BottomRoutes()}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    // backgroundColor: '#DCDCDC',
    backgroundColor: COLORS.DARK_BLUE
  },
  headerBackTitleStyle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.WHITE
  }

})