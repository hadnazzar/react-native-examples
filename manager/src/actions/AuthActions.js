import firebase from 'firebase';
//Router Actions added 
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types'


export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}


export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

// export const loginUser = ({ email, password }) => {
// 	return (dispatch) => {
// 		firebase.auth().signInWithEmailAndPassword(email, password)
// 			.then(user => {
// 				dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
// 			})
// 			.catch(() => {
// 				firebase.auth().createUserWithEmailAndPassword(email, password)
// 					.then(user => {
// 						dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
// 					})
// 			});

// 	}
// }


//with loginUserSuccess func 

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER })

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				console.log(error)
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => { loginUserFail(dispatch) })
			});

	}
}


const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	})
	//Router action function
	Actions.main();
}

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	})
}