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

export { authorization, registration };
