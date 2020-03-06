const updateTasks = (state, ne) => {

 }


const updateTaskList = (state, action) => {
  if (state === undefined) {
    return {
      tasks: [],
      modalVisiable: false,
      taskForEdit: '',
    };
  }
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [
          ...state.taskList.tasks,
          {
            ...action.payload,
          },
        ],
        modalVisiable: false,
        taskForEdit: '',
      };
    case 'DELETE_TASK': { 
      return {
        tasks
      }
    }
    default:
      return state.taskList;
  }
};

export default updateTaskList;
