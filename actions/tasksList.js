import DBService from '../DB';

const addTask = (newTask, id) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: id.toString(),
      content: newTask,
    },
  };
};

const deleteTask = (taskForDelete) => {
  return {
    type: 'DELETE_TASK',
    payload: taskForDelete,
  };
};

const changeModalVisiable = (isModalVisiable) => {
  return {
    type: 'CHANGE_MODAL_VISIBLE',
    payload: isModalVisiable,
  };
};

const addTaskForEditing = (taskForEditing) => {
  return {
    type: 'ADD_TASK_FOR_EDITING',
    payload: taskForEditing,
  };
};

const changeInputVal = (value) => {
  return {
    type: 'CHANGE_INPUT_VALUE',
    payload: value,
  };
};

const fetchTasksRequest = () => {
  return {
    type: 'FETCH_TASKS_REQUEST',
  };
};

const fetchTasksSuccuess = (tasks) => {
  return {
    type: 'FETCH_TASKS_SUCCUESS',
    payload: tasks,
  };
};

const fetchTasks = (dispatch) => () => {
  dispatch(fetchTasksRequest());
  DBService.getTasks().then((tasks) => dispatch(fetchTasksSuccuess(tasks)));
};

const onAddedeToTaskList = (dispatch) => (newTask) => {
  const newTasksss = { content: newTask };
  DBService.additTask(newTasksss).then((id) => dispatch(addTask(newTask, id)));
};

const onDeletedFromTaskList = (dispatch) => (taskForDelete) => {
  dispatch(deleteTask(taskForDelete));
  DBService.removeTask(taskForDelete);
};

const onAddedTaskForEditing = (dispatch) => (taskForEditing) => {
  dispatch(addTaskForEditing(taskForEditing));
};

const onChangeModalVisiable = (dispatch) => (isModalVisiable) => {
  dispatch(changeModalVisiable(isModalVisiable));
};

const updateInputValue = (dispatch) => (value) => {
  dispatch(changeInputVal(value));
};

export { onAddedeToTaskList, onDeletedFromTaskList, onAddedTaskForEditing, onChangeModalVisiable, updateInputValue, fetchTasks };
