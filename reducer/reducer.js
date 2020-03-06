import updateTaskList from './updateTaskList';
import updateBookLis from './updateBookList';
import updateShopingCart from './updateShopingCart';
import updateUserData from './updateUserData';

const reducer = (state, action) => {
  return {
    taskList: updateTaskList(state, action),
    bookList: updateBookLis(state, action),
    shopingCart: updateShopingCart(state, action),
    userData: updateUserData(state, action),
  };
};

export default reducer;
