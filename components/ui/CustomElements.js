import React from 'react';
import { styles } from '../../styles/styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const CustomText = ({ style, children }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const CustomTextInput = (props, { style }) => { 
  return <TextInput {...props} style={{...styles.textInput, ...style}} multiline/>
}

const TextHeader = ({ style, children }) => { 
  return <CustomText style={{ ...styles.textHeader, ...style }}>{children}</CustomText>
}

const CustomButton = ({ onTab, buttonStyle, titleStyle, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} background={'orange'} style={{ ...styles.button, ...buttonStyle }} onPress={onTab}>
      <Text style={{ ...styles.buttonTitle, ...titleStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

const CustomIcon = ({ IconType = FontAwesome, style, name }) => {
  return <IconType name={name} style={{ ...styles.iconsStyle, ...style }} />;
};

const CustomView = ({ style, children }) => {
  return <View style={{ ...styles.view, ...style }}>{children}</View>;
};

export { CustomText, CustomButton, CustomIcon, CustomView, TextHeader, CustomTextInput };
