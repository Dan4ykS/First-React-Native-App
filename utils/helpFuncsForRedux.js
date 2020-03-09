import withServices from '../components/hoc/withServices';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { onAddedeToTaskList, onDeletedFromTaskList, onAddedTaskForEditing, onChangeModalVisiable, updateInputValue, fetchTasks } from '../actions/tasksList';
import { fetchBooks } from '../actions/booksList';
import { onAddedToCart, onDeletedFromCart } from '../actions/shopingCart';
import { authorization, registration } from '../actions/userData';

const mapStateToProps = ({ taskList, bookList, shopingCart, userData }) => {
  return {
    taskList,
    bookList,
    shopingCart,
    userData,
  };
};

const mapDispatchToProps = (dispatch, { services }) => {
  const actions = {
    onAddedeToTaskList: onAddedeToTaskList(dispatch),
    fetchBooks: fetchBooks(dispatch, services),
    onAddedToCart: onAddedToCart(dispatch),
    onDeletedFromCart: onDeletedFromCart(dispatch),
    authorization: authorization(dispatch, services),
    registration: registration(dispatch, services),
    onDeletedFromTaskList: onDeletedFromTaskList(dispatch),
    onAddedTaskForEditing: onAddedTaskForEditing(dispatch),
    onChangeModalVisiable: onChangeModalVisiable(dispatch),
    updateInputValue: updateInputValue(dispatch),
    fetchTasks: fetchTasks(dispatch, services),
  };
  return { actions };
};

const withStore = (Component) => compose(withServices(), connect(mapStateToProps, mapDispatchToProps))(Component);

export default withStore;
