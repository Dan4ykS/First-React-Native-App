import React from 'react';
import ProductsScreen from '../screens/Products';
import CartScreen from '../screens/Cart';
import { Tab } from '../utils/helpFuncks';
import { THEM, styles } from '../styles/styles';
import { CustomIcon } from './ui/CustomElements';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const Shop = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: THEM.TEXT_COLOR,
        inactiveTintColor: THEM.MAIN_COLOR,
        style: { backgroundColor: THEM.FRAGMENT_COLOR, height: 75 },
      }}
      barStyle={{ backgroundColor: THEM.FRAGMENT_COLOR, height: 65 }}
      inactiveColor={THEM.MAIN_COLOR}
      activeColor={THEM.TEXT_COLOR}
      // labeled={false}
      shifting={true}
    >
      <Tab.Screen
        name='Product'
        component={ProductsScreen}
        options={{
          tabBarLabel: 'Продукция',
          tabBarIcon: ({ color }) => (
            <CustomIcon
              IconType={MaterialIcons}
              name={'library-books'}
              style={{
                ...styles.iconInTabs,
                color,
                ...Platform.select({
                  ios: styles.iconInTabsIos,
                  android: styles.iconInTabsAndroid,
                }),
              }}
            />
          ),
          tabBarLabe: 'Товары',
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarLabel: 'Корзина',
          tabBarIcon: ({ color }) => (
            <CustomIcon
              name={'shopping-cart'}
              style={{
                ...styles.iconInTabs,
                color,
                ...Platform.select({
                  ios: styles.iconInTabsIos,
                  android: styles.iconInTabsAndroid,
                }),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Shop;
