import types from '../../types';

export const createUser = ({ username, nome, email, password, dataCriacao }) => {
  return {
    type: types.CREATING_USER,
    payload: { username, nome, email, password, dataCriacao }
  }
}

export const getUserByLogin = ({ email, password }) => {
  return {
    type: types.FETCHING_USER_LOGIN,
    payload: { email, password }
  }
};

export const getUserById = ({ userId }) => {
  return {
    type: types.FETCHING_USER,
    params: { userId },
  }
};