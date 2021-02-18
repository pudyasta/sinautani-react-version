import firebase from '../../../Firebase'
import { Redirect } from 'react-router-dom'


export const signUpWithEmail = (user) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            // Signed in 

            var user = userCredential;
            // ...
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
}

export const signInWithEmail = user => dispatch => {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            dispatch({ type: 'CHANGE_LOADING', value: false })
            return <Redirect to='' />
        })
        .catch((error) => {

            dispatch({ type: 'CHANGE_LOADING', value: false })
            if (error.code === 'auth/invalid-email') {
                return dispatch({
                    type: 'CHANGE_ERROR', value: {
                        value: 'email',
                        messageEmail: error.message
                    }
                })
            } else if (error.code === 'auth/user-not-found') {
                return dispatch({
                    type: 'CHANGE_ERROR', value: {
                        value: 'email',
                        messageEmail: error.message
                    }
                })
            }
            return dispatch({
                type: 'CHANGE_ERROR', value: {
                    value: 'password',
                    messagePassword: error.message
                }
            })
        });
}