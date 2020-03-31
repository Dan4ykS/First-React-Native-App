import React from 'react';
import { View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import { CustomButton, CustomText, CustomIcon } from './ui/CustomElements';

const ToDoList = ({ tasks, func: { openModal, deleteTask } }) => {
 
  return (
    <FlatList
      style={{marginBottom: 20}}
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
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
//  <FlatList
//       data={tasks}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           activeOpacity={0.7}
//           onLongPress={() => {
//             openModal(item.content);
//           }}
//         >
//           <View style={styles.container}>
//             <CustomText style={styles.taskText}>{item.content}</CustomText>
//             <CustomButton onTab={() => deleteTask(item)} buttonStyle={styles.deleteBtn}>
//               <CustomIcon name={'remove'} />
//             </CustomButton>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//  const toDoList = tasks.map((task) => {
//    return (
//      <TouchableOpacity
//        activeOpacity={0.7}
//        onLongPress={() => {
//          openModal(task.content);
//        }}
//      >
//        <View style={styles.container}>
//          <CustomText style={styles.taskText}>{task.content}</CustomText>
//          <CustomButton onTab={() => deleteTask(task)} buttonStyle={styles.deleteBtn}>
//            <CustomIcon name={'remove'} />
//          </CustomButton>
//        </View>
//      </TouchableOpacity>
//    );
//  });