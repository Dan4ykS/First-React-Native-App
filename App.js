import React from 'react';
import store from './store';
import MainScreen from './screens/Main';
import ToDoScreen from './screens/ToDo';
import Shop from './components/Shop';
import BookstoreService from './services/BookstoreService';
import UsersService from './services/UsersService';
import HeaderIcons from './components/HeaderIcons';
import { THEM } from './styles/styles';
import { BackHandler } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { loadAplication, Stack } from './utils/helpFuncks';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { ServicesProvider } from './components/Context';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const App = () => {
  const [isReady, updateIsReady] = useState(false);
  const services = {
    bookstoreService: new BookstoreService(),
    usersService: new UsersService(),
  };

  if (!isReady) {
    return <AppLoading startAsync={loadAplication} onError={() => BackHandler.exitApp()} onFinish={() => updateIsReady(true)} />;
  }

  return (
    <Provider store={store}>
      <ServicesProvider value={services}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: THEM.FRAGMENT_COLOR }, headerTintColor: THEM.TEXT_COLOR }}>
            <Stack.Screen
              options={{
                headerTitle: 'Главная',
                headerRight: () =>  (
                  <HeaderButtons HeaderButtonComponent={HeaderIcons}>
                    <Item title='home icon' iconName='home' />
                  </HeaderButtons>
                ),
              }}
              name='Home'
              component={MainScreen}
            />
            <Stack.Screen options={{ title: 'Список дел' }} name='ToDo' component={ToDoScreen} />
            <Stack.Screen options={{ title: 'Магазин' }} name='Shop' component={Shop} />
          </Stack.Navigator>
        </NavigationContainer>
      </ServicesProvider>
    </Provider>
  );
};

export default App;
