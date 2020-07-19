import types from './../types';

export const createUser = ({ user, email, password }) => {
  return {
    type: types.CREATING_USER,
    payload: { user, email, password }
  }
}