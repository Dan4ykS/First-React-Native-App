import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import styles from './styles';
import Content from './components/Content';
import loadAplication from './utils/helpFunck';
import { View, Alert, Keyboard } from 'react-native';
import { AppLoading } from 'expo';
import { CustomText } from './components/ui/CustomElements';

const App = () => {
  const title = 'ToDo App !';

  const [date, updateDate] = useState(new Date());
  const [tasks, updateTasks] = useState([]);
  const [isReady, updateIsReady] = useState(false);
  const [inputValue, updateInputValue] = useState('');
  const [modalVisiable, changeModalVisiable] = useState(false);
  const [taskForEdit, updateTaskForEdit] = useState('');

  const addTask = (newTask) => {
    if (newTask === '') {
      return;
    }
    updateTasks((tasks) => [
      ...tasks,
      {
        id: Math.random().toString(),
        content: newTask,
      },
    ]);
    updateInputValue('');
    Keyboard.dismiss();
  };

  const deleteTask = ({ id }) => {
    updateTasks((tasks) => [
      ...tasks.slice(
        0,
        tasks.findIndex((el) => el.id === id)
      ),
      ...tasks.slice(tasks.findIndex((el) => el.id === id) + 1),
    ]);
    if (modalVisiable) {
      changeModalVisiable(false);
    }
  };

  const openModal = (task) => {
    updateTaskForEdit(task);
    changeModalVisiable(true);
  };

  const updateTask = (newTask) => {
    const oldElem = tasks.find((task) => task.content === taskForEdit);
    if (newTask === '') {
      Alert.alert(
        'Удаление задачи',
        `Вы уверены что хотите удалить задачу '${taskForEdit}'?`,
        [
          {
            text: 'Отмна',
            style: 'cancel',
          },
          {
            text: 'Удалить задачу',
            style: 'destructive',
            onPress: () => deleteTask(oldElem),
          },
        ],
        { cancelable: false }
      );
    } else {
      oldElem.content = newTask;
      changeModalVisiable(false);
    }
  };

  const state = {
    inputValue,
    modalVisiable,
    taskForEdit,
  };

  const taskHendlers = {
    addTask,
    deleteTask,
    updateTask,
  };

  const updateState = {
    updateInputValue,
    changeModalVisiable,
  };

  if (!isReady) {
    return <AppLoading startAsync={() => loadAplication()} onFinish={() => updateIsReady(true)} />;
  }

  return (
    <View style={styles.view}>
      <NavBar title={title} date={date} />
      <CustomText>Это работает и на Android и на IOS !</CustomText>
      <Content openModal={openModal} taskHendlers={taskHendlers} state={state} tasks={tasks} updateState={updateState} />
    </View>
  );
};

export default App;
