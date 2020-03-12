import * as Fonts from 'expo-font';
import DBService from '../DB';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Keyboard, Alert, Platform } from 'react-native';


const loadAplication = async () => {
  await Fonts.loadAsync({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
  });
  await DBService.init();
};

const Stack = createStackNavigator();
const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator() ;

const confDataForLogicComp = (loading, error, funcForLogic) => {
  return {
    loading,
    error,
    loadingData: funcForLogic,
  };
};

const addTask = (onAddedeToTaskList, updateInputValue) => (newTask) => {
  if (newTask === '') {
    return;
  }
  onAddedeToTaskList(newTask);
  updateInputValue('');
  Keyboard.dismiss();
};

const openModalScreen = (onAddedTaskForEditing, onChangeModalVisiable) => (task) => {
  onAddedTaskForEditing(task);
  onChangeModalVisiable(true);
};

const delTask = (onDeletedFromTaskList, onchangeModalVisiable, modalVisiable) => (taskForDelete) => {
  onDeletedFromTaskList(taskForDelete);
  if (modalVisiable) {
    onchangeModalVisiable(false);
  }
};

const updTask = (deleteTask, onChangeModalVisiable, tasks, taskForEditing) => async (newTask) => {
  const oldElem = tasks.find((task) => task.content === taskForEditing);
  if (newTask === '') {
    Alert.alert(
      'Удаление задачи',
      `Вы уверены что хотите удалить задачу '${taskForEditing}'?`,
      [
        {
          text: 'Отмна',
          style: Platform.select({
            ios: 'cancel',
            android: 'neutral',
          }),
        },
        {
          text: 'Удалить задачу',
          style: Platform.select({
            android: 'negative',
            ios: 'destructive',
          }),
          onPress: () => deleteTask(oldElem),
        },
      ],
      { cancelable: false }
    );
  } else {
    oldElem.content = newTask;
    onChangeModalVisiable(false);
    await DBService.updateTask(oldElem);
  }
};

export {
  loadAplication,
  Stack, confDataForLogicComp, addTask, openModalScreen, updTask, delTask, Tab
};
