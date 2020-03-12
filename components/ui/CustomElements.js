import React from 'react';
import { styles } from '../../styles/styles';
import { Text, TouchableOpacity, View, Platform, TextInput, TouchableNativeFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomText = ({ style, children }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const CustomTextInput = (props, { style }) => {
  return <TextInput {...props} style={{ ...styles.textInput, ...style }} multiline />;
};

const TextHeader = ({ style, children }) => {
  return <CustomText style={{ ...styles.textHeader, ...style }}>{children}</CustomText>;
};

const CustomButton = ({ onTab, buttonStyle, titleStyle, children }) => {
  const Wrap = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  console.log(onTab)
  return (
    <Wrap onPress={onTab} activeOpacity={0.6}>
      <View style={{ ...styles.button, ...buttonStyle }}>
        <Text style={{ ...styles.buttonTitle, ...titleStyle }}>{children}</Text>
      </View>
    </Wrap>
  );
};

const CustomIcon = ({ IconType = FontAwesome, style, name }) => {
  return <IconType name={name} style={{ ...styles.iconsStyle, ...style }} />;
};

const CustomView = ({ style, children }) => {
  return <View style={{ ...styles.view, ...style }}>{children}</View>;
};

export { CustomText, CustomButton, CustomIcon, CustomView, TextHeader, CustomTextInput };
