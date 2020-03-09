import React, { useState } from 'react';
import EditModal from '../components/Modal';
import ToDoList from '../components/ToDoList';
import { styles } from '../styles/styles';
import { View, TextInput } from 'react-native';
import { CustomButton, CustomIcon, CustomView, TextHeader, CustomTextInput } from '../components/ui/CustomElements';
import withStore from '../utils/helpFuncsForRedux';
import { addTask, openModalScreen, delTask, updTask, confDataForLogicComp } from '../utils/helpFuncks';
import LoadingDataLogic from '../componentsLogic/LoadingData';

const ToDoScreen = ({
  taskList: { tasks, taskForEditing, modalVisiable, inputValue, loading, error },
  actions: { fetchTasks, onAddedeToTaskList, onDeletedFromTaskList, onChangeModalVisiable, onAddedTaskForEditing, updateInputValue },
}) => {
  const addNewTask = addTask(onAddedeToTaskList, updateInputValue);
  const deleteTask = delTask(onDeletedFromTaskList, onChangeModalVisiable, modalVisiable);
  const openModal = openModalScreen(onAddedTaskForEditing, onChangeModalVisiable);
  const updateTask = updTask(deleteTask, onChangeModalVisiable, tasks, taskForEditing);

  const modal = modalVisiable ? <EditModal updateTask={updateTask} taskForEdit={taskForEditing} changeModalVisiable={onChangeModalVisiable} /> : null;

  const configData = confDataForLogicComp(loading, error, fetchTasks);
  return (
    <CustomView>
      <LoadingDataLogic configData={configData}>
        <TextHeader style={{ marginTop: 20 }}>Это работает и на Android и на IOS !</TextHeader>
        {modal}
        <View style={styles.toDoForm}>
          <CustomTextInput
            keyboardAppearance={'dark'}
            style={styles.input}
            onChangeText={(text) => updateInputValue(text)}
            value={inputValue}
            placeholder='Напиши что-нибудь ...'
            placeholderTextColor={'#fff'}
          />
          <CustomButton onTab={() => addNewTask(inputValue)}>
            <CustomIcon name={'plus'} />
          </CustomButton>
        </View>
        <ToDoList tasks={tasks} func={{ openModal, deleteTask }} />
      </LoadingDataLogic>
    </CustomView>
  );
};

export default withStore(ToDoScreen);
