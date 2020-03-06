import React, { useState } from 'react';
import { styles } from '../styles';
import { Modal, View, TextInput } from 'react-native';
import { CustomButton, CustomText } from './ui/CustomElements';

const EditModal = ({ changeModalVisiable, taskForEdit, updateTask }) => {
  const [task, changeTask] = useState(taskForEdit);

  return (
    <Modal visible={true} animationType='slide' transparent={false}>
      <View style={{ ...styles.view, ...styles.centerFlexWrap }}>
        <CustomText style={{ fontSize: 18, ...styles.textHeader }}>{`Редактирование задачи: '${taskForEdit}'`}</CustomText>
        <TextInput value={task} style={styles.input} onChangeText={(newTask) => changeTask(newTask)} />
        <View style={styles.btnGroup}>
          <CustomButton buttonStyle={{ backgroundColor: 'green' }} onTab={() => updateTask(task)}>
            Сохранить
          </CustomButton>
          <CustomButton buttonStyle={{}} onTab={() => changeModalVisiable(false)}>
            Отменить
          </CustomButton>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
