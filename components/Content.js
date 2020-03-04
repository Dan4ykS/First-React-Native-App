import React, { useState } from 'react';
import styles from '../styles';
import EditModal from './Modals';
import { View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { CustomButton, CustomText, CustomIcon } from './ui/CustomElements';

const Content = ({
  tasks,
  openModal,
  taskHendlers: { addTask, deleteTask, updateTask },
  state: { inputValue, modalVisiable, taskForEdit },
  updateState: { updateInputValue, changeModalVisiable },
}) => {
  const modal = modalVisiable ? <EditModal updateTask={updateTask} taskForEdit={taskForEdit} changeModalVisiable={changeModalVisiable} /> : null;

  return (
    <View style={{ width: '100%' }}>
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
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onLongPress={() => {
              openModal(item.content);
            }}
          >
            <View style={styles.container}>
              <CustomText style={styles.taskText}>{item.content}</CustomText>
              <CustomButton onTab={() => deleteTask(item)} buttonStyle={styles.deleteBtn}>
                <CustomIcon name={'remove'} />
              </CustomButton>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Content;
