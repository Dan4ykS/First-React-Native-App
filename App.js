import React, { useState } from 'react';
import store from './store';
import MainScreen from './components/screens/Main';
import ToDoScreen from './components/screens/ToDo';
import { THEM } from './styles';
import { BackHandler } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { loadAplication, Stack } from './utils/helpFuncks';
import { Provider } from 'react-redux';
import CartScreen from './components/screens/Cart';

const App = () => {
  const [isReady, updateIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading startAsync={loadAplication} onError={() => BackHandler.exitApp()} onFinish={() => updateIsReady(true)} />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: THEM.FRAGMENT_COLOR }, headerTintColor: THEM.TEXT_COLOR }}>
          <Stack.Screen options={{ title: 'Главная' }} name='Home' component={MainScreen} />
          <Stack.Screen options={{ title: 'Список дел' }} name='ToDo' component={ToDoScreen} />
          <Stack.Screen options={{ title: 'Корзина' }} name='Cart' component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
