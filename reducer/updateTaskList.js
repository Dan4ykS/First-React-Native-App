const updateTasks = (state, task) => {
  const {
    taskList: { tasks },
  } = state;
  if (task === '') {
    return tasks;
  }
  const elem = tasks.findIndex((elem) => elem.id === task.id);
  if (elem === -1) {
    return [
      ...tasks,
      {
        ...task,
      },
    ];
  }
  return [...tasks.slice(0, elem), ...tasks.slice(elem + 1)];
};

const update = (state, task, inputValue, modalVisiable = false, taskForEditing = '') => {
  return {
    tasks: updateTasks(state, task),
    inputValue,
    modalVisiable,
    taskForEditing,
  };
};

const updateTaskList = (state, action) => {
  if (state === undefined) {
    return {
      tasks: [],
      modalVisiable: false,
      taskForEditing: '',
      inputValue: '',
      loading: true,
      error: null,
    };
  }

  const {
    taskList: { modalVisiable, taskForEditing, inputValue },
  } = state;

  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      return update(state, '', action.payload, modalVisiable, taskForEditing);
    case 'ADD_TASK':
      return update(state, action.payload, inputValue);
    case 'DELETE_TASK':
      return update(state, action.payload, inputValue);
    case 'CHANGE_MODAL_VISIBLE':
      return update(state, '', inputValue, action.payload, taskForEditing);
    case 'ADD_TASK_FOR_EDITING':
      return update(state, '', inputValue, modalVisiable, action.payload);
    case 'FETCH_TASKS_REQUEST':
      return {
        ...update(state, '', inputValue, modalVisiable, taskForEditing),
        loading: true,
        error: null,
      };
    case 'FETCH_TASKS_SUCCUESS':
      return {
        tasks: action.payload,
        modalVisiable,
        taskForEditing,
        inputValue,
        loading: false,
        error: null,
      };
    default:
      return state.taskList;
  }
};

export default updateTaskList;
