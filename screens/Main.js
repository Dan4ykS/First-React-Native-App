import React from 'react';
import { CustomButton, CustomView } from '../components/ui/CustomElements';
import { styles } from '../styles/styles';
import { View } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <CustomView>
      <View style={styles.centerFlexWrap}>
        <CustomButton buttonStyle={{ width: '50%', marginTop: 10 }} titleStyle={{ textAlign: 'center' }} onTab={() => navigation.navigate('ToDo')}>
          Список дел
        </CustomButton>
        <CustomButton buttonStyle={{ width: '50%', marginTop: 10 }} titleStyle={{ textAlign: 'center' }} onTab={() => navigation.navigate('Shop')}>
          Продукция
        </CustomButton>
      </View>
    </CustomView>
  );
};

export default MainScreen;
