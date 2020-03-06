const addTask = (newTask) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: Math.random().toString(),
      content: newTask,
    },
  };
};
const fetchBooksRequest = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const fetchBooksSuccuess = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCUESS',
    payload: newBooks,
  };
};

const fetchBooksFailure = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const bookAddToCart = (bookId) => {
  return {
    type: 'BOOK_ADD_TO_CART',
    payload: bookId,
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: bookId,
  };
};

const userLogin = (userName) => {
  return {
    type: 'USER_LOGIN',
    payload: userName,
  };
};

const wrongUser = (err) => {
  return {
    type: 'WRONG_USER',
  };
};

const createNewUser = (userName) => {
  return {
    type: 'CREATE_NEW_USER',
    payload: userName,
  };
};

const onAddedToCart = (dispatch) => (id) => {
  dispatch(bookAddToCart(id));
};

const onDeletedFromCart = (dispatch) => (id) => {
  dispatch(bookDeletedFromCart(id));
};

const fetchBooks = (dispatch, { bookstoreService }) => () => {
  dispatch(fetchBooksRequest());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(fetchBooksSuccuess(data)))
    .catch((error) => dispatch(fetchBooksFailure(error)));
};

const authorization = (dispatch, { usersService }) => (data) => {
  usersService
    .authUser(data)
    .then(() => dispatch(userLogin(data.userName)))
    .catch((err) => dispatch(wrongUser(err)));
};

const registration = (dispatch, { usersService }) => (data) => {
  usersService
    .createNewUser(data)
    .then(() => dispatch(createNewUser(data.userName)))
    .catch((err) => console.log(err));
};

const onAddedeToTaskList = (dispatch) => (newTask) => {
  dispatch(addTask(newTask));
};

export { onAddedeToTaskList, registration, authorization, fetchBooks, onDeletedFromCart, onAddedToCart };
