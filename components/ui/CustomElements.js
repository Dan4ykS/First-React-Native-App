import React from 'react';
import styles from '../../styles';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomText = ({ style, children }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const CustomButton = ({ onTab, buttonStyle, titleStyle, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} background={'orange'} style={{ ...styles.button, ...buttonStyle }} onPress={onTab}>
      <Text style={{ ...styles.buttonTitle, ...titleStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

const CustomIcon = ({ IconType = FontAwesome, style, name }) => {
  return <IconType name={name} style={{ ...styles.iconStyle, ...style }} />;
};

export { CustomText, CustomButton, CustomIcon };
