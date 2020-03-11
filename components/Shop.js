import React from 'react';
import ProductsScreen from '../screens/Products';
import CartScreen from '../screens/Cart';
import { Tab } from '../utils/helpFuncks';
import { THEM, styles } from '../styles/styles';
import { CustomIcon } from './ui/CustomElements';
import { MaterialIcons } from '@expo/vector-icons';

const Shop = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: THEM.TEXT_COLOR,
        inactiveTintColor: THEM.MAIN_COLOR,
        style: { backgroundColor: THEM.FRAGMENT_COLOR, height: 75 },
      }}
    >
      <Tab.Screen
        name='Product'
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon IconType={MaterialIcons} name={'library-books'} style={{ ...styles.iconInTabs, color }} />,
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name={'shopping-cart'} style={{ ...styles.iconInTabs, color }} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Shop;
