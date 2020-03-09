import React from 'react';
import { styles } from '../styles/styles';
import { Modal, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { CustomButton, CustomText, CustomTextInput } from './ui/CustomElements';
import { useState } from 'react';

const EditModal = ({ changeModalVisiable, taskForEdit, updateTask }) => {
  const [task, changeTask] = useState(taskForEdit);

  return (
    <Modal visible={true} animationType='slide' transparent={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ ...styles.view, ...styles.centerFlexWrap }}>
          <CustomText style={{ fontSize: 18, ...styles.textHeader }}>{`Редактирование задачи: '${taskForEdit}'`}</CustomText>
          <CustomTextInput value={task} style={styles.input} onChangeText={(newTask) => changeTask(newTask)} multiline />
          <View style={styles.btnGroup}>
            <CustomButton buttonStyle={{ backgroundColor: 'green' }} onTab={() => updateTask(task)}>
              Сохранить
            </CustomButton>
            <CustomButton buttonStyle={{}} onTab={() => changeModalVisiable(false)}>
              Отменить
            </CustomButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditModal;
