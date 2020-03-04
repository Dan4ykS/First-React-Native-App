import React from 'react';
import styles from '../styles';
import { View } from 'react-native';
import { CustomText } from './ui/CustomElements';

const NavBar = ({ title, date }) => {
  return (
    <View style={styles.navBar}>
      <CustomText style={styles.boldTextItalick}>{`${title} ${date.getFullYear()} год =))`}</CustomText>
    </View>
  );
};

export default NavBar;

// ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
