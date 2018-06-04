import { Actions } from 'react-native-router-flux';
import { socket } from '../Global';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

    socket.emit('authentication', { username: email, password });
    socket.on('authResult', res => {
      console.log(res);

      if (res.result) {
        loginUserSucess(dispatch, { email, password });
      } else {
        loginUserFail(dispatch);
      }
    });
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSucess = (dispatch, user) => {
	dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
	Actions.homepage();
};
