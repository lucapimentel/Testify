import axios from 'axios';
import cookie from 'react-cookie';
import { logoutUser } from './album';

export const API_URL = 'http://localhost:3000/api';
export const CLIENT_ROOT_URL = 'http://localhost:8080';


export function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data : error;

  if (error.status === 401 || error.response.status === 401) {
    errorMessage = 'You are not authorized to do this.';
    return dispatch(logoutUser(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}


