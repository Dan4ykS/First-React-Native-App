import * as Fonts from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';

const loadAplication = async () => {
  await Fonts.loadAsync({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
  });
};

const Stack = createStackNavigator();

export { loadAplication, Stack };
