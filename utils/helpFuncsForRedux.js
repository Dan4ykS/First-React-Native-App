import { onAddedeToTaskList, registration, authorization, fetchBooks, onDeletedFromCart, onAddedToCart } from '../actions/actions';

const mapStateToProps = ({ taskList, bookList, shopingCart, userData }) => {
  return {
    taskList,
    bookList,
    shopingCart,
    userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    onAddedeToTaskList: onAddedeToTaskList(dispatch),
    // fetchBooks: fetchBooks(dispatch, services),
    onAddedToCart: onAddedToCart(dispatch),
    onDeletedFromCart: onDeletedFromCart(dispatch),
    // authorization: authorization(dispatch, services),
    // registration: registration(dispatch, services),
  };
  return { actions };
};

export { mapStateToProps, mapDispatchToProps };
