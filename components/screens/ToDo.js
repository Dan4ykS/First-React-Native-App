import React, { useState } from 'react';
import EditModal from '../Modal';
import ToDoList from '../ToDoList';
import { styles } from '../../styles';
import { View, Alert, Keyboard, TextInput, BackHandler, Button } from 'react-native';
import { CustomText, CustomButton, CustomIcon, CustomView } from '../ui/CustomElements';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../utils/helpFuncsForRedux';

const ToDoScreen = ({ taskList: { tasks }, actions: { onAddedeToTaskList } }) => {
  // const [tasks, updateTasks] = useState([]);
  const [inputValue, updateInputValue] = useState('');
  const [modalVisiable, changeModalVisiable] = useState(false);
  const [taskForEdit, updateTaskForEdit] = useState('');

  const addTask = (newTask) => {
    if (newTask === '') {
      return;
    }
    onAddedeToTaskList(newTask);
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

  const modal = modalVisiable ? <EditModal updateTask={updateTask} taskForEdit={taskForEdit} changeModalVisiable={changeModalVisiable} /> : null;

  return (
    <CustomView>
      <CustomText style={styles.textHeader}>Это работает и на Android и на IOS !</CustomText>
      {modal}
      <View style={styles.toDoForm}>
        <TextInput
          keyboardAppearance={'dark'}
          style={styles.input}
          onChangeText={(text) => updateInputValue(text)}
          value={inputValue}
          placeholder='Напиши что-нибудь ...'
          placeholderTextColor={'#fff'}
        />
        <CustomButton onTab={() => addTask(inputValue)}>
          <CustomIcon name={'plus'} />
        </CustomButton>
      </View>
      <ToDoList tasks={tasks} func={{ openModal, deleteTask }} />
    </CustomView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoScreen);
