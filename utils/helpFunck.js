import * as Fonts from 'expo-font';

const loadAplication = async () => {
  await Fonts.loadAsync({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
  });
};

export default loadAplication;
