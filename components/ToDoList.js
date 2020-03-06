import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../styles';
import { CustomButton, CustomText, CustomIcon } from './ui/CustomElements';

const ToDoList = ({ tasks, func: { openModal, deleteTask } }) => {
  return (
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
  );
};

export default ToDoList;
